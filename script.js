/* =========================================================
   ParkBoston · App Logic
   - 648 parking entries: 14 garages/lots + 634 real meter segments
   - Search by neighborhood / street / landmark with fuzzy matching
   - Filters: type (segmented control), max price, distance, availability
   - Pagination on list view (30 per page) — 648 cards at once is too much
   - Map view uses dark Carto Voyager tiles to match the theme
   - Detail modal with all info and a directions link
   ========================================================= */

(function () {
  'use strict';

  // -----------------------------------------------------
  // STATE
  // -----------------------------------------------------
  let referencePoint = { lat: 42.3554, lng: -71.0680, label: 'Boston Common' };

  const filters = {
    type: 'all',
    maxPrice: 30,
    maxDistance: 5,
    availableOnly: false
  };

  let view = 'list';
  let visibleCount = 30;        // pagination — start with 30 cards
  const PAGE_SIZE = 30;
  let cachedResults = [];

  let map = null;
  let mapMarkers = [];

  // -----------------------------------------------------
  // GEOCODING — quick offline lookup
  // -----------------------------------------------------
  const PLACES = {
    'back bay':           { lat: 42.3503, lng: -71.0810 },
    'beacon hill':        { lat: 42.3588, lng: -71.0707 },
    'north end':          { lat: 42.3647, lng: -71.0542 },
    'south end':          { lat: 42.3388, lng: -71.0765 },
    'downtown':           { lat: 42.3555, lng: -71.0606 },
    'financial district': { lat: 42.3567, lng: -71.0550 },
    'seaport':            { lat: 42.3520, lng: -71.0445 },
    'south boston':       { lat: 42.3380, lng: -71.0470 },
    'fenway':             { lat: 42.3434, lng: -71.0997 },
    'kenmore':            { lat: 42.3489, lng: -71.0950 },
    'chinatown':          { lat: 42.3504, lng: -71.0610 },
    'theater district':   { lat: 42.3522, lng: -71.0640 },
    'west end':           { lat: 42.3631, lng: -71.0700 },
    'cambridge':          { lat: 42.3736, lng: -71.1097 },
    'harvard':            { lat: 42.3736, lng: -71.1190 },
    'harvard square':     { lat: 42.3736, lng: -71.1190 },
    'mit':                { lat: 42.3601, lng: -71.0942 },
    'fenway park':        { lat: 42.3467, lng: -71.0972 },
    'faneuil hall':       { lat: 42.3601, lng: -71.0567 },
    'boston common':      { lat: 42.3554, lng: -71.0656 },
    'newbury':            { lat: 42.3504, lng: -71.0810 },
    'newbury street':     { lat: 42.3504, lng: -71.0810 },
    'charles street':     { lat: 42.3590, lng: -71.0705 },
    'boylston':           { lat: 42.3499, lng: -71.0769 },
    'boylston street':    { lat: 42.3499, lng: -71.0769 },
    'tremont':            { lat: 42.3522, lng: -71.0640 },
    'south station':      { lat: 42.3519, lng: -71.0552 },
    'td garden':          { lat: 42.3662, lng: -71.0621 },
    'copley':             { lat: 42.3499, lng: -71.0779 },
    'copley square':      { lat: 42.3499, lng: -71.0779 },
    'prudential':         { lat: 42.3473, lng: -71.0821 },
    'commonwealth ave':   { lat: 42.3500, lng: -71.0900 },
    'commonwealth':       { lat: 42.3500, lng: -71.0900 },
    'mass ave':           { lat: 42.3470, lng: -71.0850 },
    'massachusetts ave':  { lat: 42.3470, lng: -71.0850 }
  };

  function resolveLocation(query) {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    if (PLACES[q]) return { ...PLACES[q], label: titleCase(query) };

    // Fuzzy lookup against PLACES keys
    for (const key in PLACES) {
      if (key.includes(q) || q.includes(key)) {
        return { ...PLACES[key], label: titleCase(query) };
      }
    }

    // Try matching neighborhood/street in actual data
    const match = PARKING_DATA.find(p =>
      p.neighborhood.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q) ||
      p.street?.toLowerCase().includes(q)
    );
    if (match) {
      return { lat: match.lat, lng: match.lng, label: titleCase(query) };
    }
    return null;
  }

  function titleCase(s) {
    return s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
  }

  // -----------------------------------------------------
  // DISTANCE — Haversine in miles
  // -----------------------------------------------------
  function distance(lat1, lng1, lat2, lng2) {
    const R = 3958.8;
    const toRad = d => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  // -----------------------------------------------------
  // FILTER + SORT
  // -----------------------------------------------------
  function getFilteredResults() {
    return PARKING_DATA
      .map(spot => ({
        ...spot,
        distance: distance(referencePoint.lat, referencePoint.lng, spot.lat, spot.lng)
      }))
      .filter(s => {
        if (filters.type !== 'all' && s.type !== filters.type) return false;
        if (s.price > filters.maxPrice) return false;
        if (s.distance > filters.maxDistance) return false;
        if (filters.availableOnly && s.availability === 'full') return false;
        return true;
      })
      .sort((a, b) => a.distance - b.distance);
  }

  // -----------------------------------------------------
  // RENDER LIST (with pagination)
  // -----------------------------------------------------
  const $list = document.getElementById('resultsList');
  const $empty = document.getElementById('emptyState');
  const $count = document.getElementById('resultCount');
  const $pagination = document.getElementById('pagination');
  const $loadMore = document.getElementById('loadMore');
  const $pageInfo = document.getElementById('pageInfo');
  const $locationLabel = document.getElementById('locationLabel');

  function renderList(reset = true) {
    if (reset) {
      cachedResults = getFilteredResults();
      visibleCount = PAGE_SIZE;
    }

    $count.textContent = cachedResults.length.toLocaleString();
    $locationLabel.textContent = referencePoint.label;

    if (cachedResults.length === 0) {
      $list.innerHTML = '';
      $empty.hidden = false;
      $pagination.hidden = true;
      return;
    }
    $empty.hidden = true;

    const visible = cachedResults.slice(0, visibleCount);

    $list.innerHTML = visible.map(spot => `
      <article class="card" data-type="${spot.type}" data-id="${spot.id}" tabindex="0" role="button" aria-label="View details for ${escapeHtml(spot.name)}">
        <div class="card-top">
          <h3 class="card-name">${escapeHtml(spot.name)}</h3>
          <span class="card-distance">${spot.distance.toFixed(1)} mi</span>
        </div>

        <div class="card-meta">
          <span class="tag tag-type ${spot.type}">${spot.type}</span>
          <span class="tag tag-neighborhood">${escapeHtml(spot.neighborhood)}</span>
        </div>

        <div class="card-bottom">
          <div class="card-price">
            <span class="amount">$${formatPrice(spot.price)}</span>
            <span class="unit">/ ${spot.priceUnit}</span>
          </div>
          <span class="availability ${spot.availability}">
            ${availabilityLabel(spot)}
          </span>
        </div>
      </article>
    `).join('');

    // Wire up click + keyboard
    $list.querySelectorAll('.card').forEach(card => {
      const id = card.dataset.id;
      card.addEventListener('click', () => openModal(id));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(id);
        }
      });
    });

    // Pagination state
    if (cachedResults.length > visibleCount) {
      $pagination.hidden = false;
      const remaining = cachedResults.length - visibleCount;
      const next = Math.min(PAGE_SIZE, remaining);
      $loadMore.textContent = `Load ${next} more`;
      $pageInfo.textContent = `Showing ${visibleCount} of ${cachedResults.length}`;
    } else {
      $pagination.hidden = true;
    }
  }

  function formatPrice(p) {
    return p < 5 ? p.toFixed(2) : p.toFixed(0);
  }

  function availabilityLabel(spot) {
    if (spot.availability === 'full') return 'Full';
    if (spot.availability === 'limited') return `${spot.spotsOpen} left`;
    return `${spot.spotsOpen} open`;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  // -----------------------------------------------------
  // MAP — Leaflet with dark tiles
  // -----------------------------------------------------
  function initMap() {
    if (map) return;

    map = L.map('map', {
      center: [referencePoint.lat, referencePoint.lng],
      zoom: 14,
      scrollWheelZoom: true,
      zoomControl: true
    });

    // CartoDB Dark Matter — fits the dark theme perfectly
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19,
      subdomains: 'abcd'
    }).addTo(map);
  }

  function renderMap() {
    initMap();

    // Clear old markers
    mapMarkers.forEach(m => map.removeLayer(m));
    mapMarkers = [];

    const results = getFilteredResults();

    // Cap markers on the map for performance & legibility — show first 200 closest
    const toShow = results.slice(0, 200);

    const colors = {
      garage: '#7dd3fc',
      lot:    '#4ade80',
      street: '#f0abfc'
    };

    toShow.forEach(spot => {
      const color = colors[spot.type];
      const icon = L.divIcon({
        className: 'park-pin',
        html: `<div style="
          width: 22px; height: 22px;
          background: ${color};
          border: 2px solid #0a0a0f;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 0 12px ${color}66;
        "></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 22]
      });

      const marker = L.marker([spot.lat, spot.lng], { icon }).addTo(map);
      marker.bindPopup(`
        <div class="popup-title">${escapeHtml(spot.name)}</div>
        <div class="popup-meta">${escapeHtml(spot.neighborhood)} · ${spot.distance.toFixed(1)} mi</div>
        <div class="popup-price">$${formatPrice(spot.price)}<span style="font-size:0.7rem; color: var(--text-soft); margin-left: 0.3rem;">/ ${spot.priceUnit}</span></div>
        <button class="popup-btn" onclick="window.openParkingDetail('${spot.id}')">View details →</button>
      `);
      mapMarkers.push(marker);
    });

    // Reference point pulse marker
    const refMarker = L.circleMarker([referencePoint.lat, referencePoint.lng], {
      radius: 8,
      color: '#f0abfc',
      fillColor: '#f0abfc',
      fillOpacity: 0.6,
      weight: 2
    }).addTo(map).bindPopup(`<strong style="color: var(--text)">${escapeHtml(referencePoint.label)}</strong>`);
    mapMarkers.push(refMarker);

    // Fit to visible markers
    if (toShow.length > 0) {
      const bounds = L.latLngBounds(
        toShow.map(s => [s.lat, s.lng]).concat([[referencePoint.lat, referencePoint.lng]])
      );
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }

    setTimeout(() => map.invalidateSize(), 50);

    // Indicate cap to user if applicable
    if (results.length > toShow.length) {
      console.log(`Map showing ${toShow.length} of ${results.length} results (closest first)`);
    }
  }

  // -----------------------------------------------------
  // MODAL
  // -----------------------------------------------------
  const $modal = document.getElementById('detailModal');
  const $modalBody = document.getElementById('modalBody');

  function openModal(id) {
    const spot = PARKING_DATA.find(p => p.id === id);
    if (!spot) return;

    const dist = distance(referencePoint.lat, referencePoint.lng, spot.lat, spot.lng);

    $modalBody.innerHTML = `
      <div class="card-meta" style="margin-bottom: 0.85rem;">
        <span class="tag tag-type ${spot.type}">${spot.type}</span>
        <span class="tag tag-neighborhood">${escapeHtml(spot.neighborhood)}</span>
      </div>

      <h3 class="modal-name" id="modalTitle">${escapeHtml(spot.name)}</h3>
      <p class="modal-address">${escapeHtml(spot.address)}</p>

      <div class="modal-grid">
        <div class="modal-cell">
          <span class="label">Price</span>
          <span class="value">$${formatPrice(spot.price)} <span style="color: var(--text-faint); font-size: 0.85rem; font-weight: 400;">/ ${spot.priceUnit}</span></span>
        </div>
        <div class="modal-cell">
          <span class="label">Distance</span>
          <span class="value">${dist.toFixed(2)} mi</span>
        </div>
        <div class="modal-cell">
          <span class="label">Availability</span>
          <span class="value">
            <span class="availability ${spot.availability}">${availabilityLabel(spot)}</span>
          </span>
        </div>
        <div class="modal-cell">
          <span class="label">Capacity</span>
          <span class="value">${spot.spotsOpen} / ${spot.totalSpots}</span>
        </div>
        <div class="modal-cell" style="grid-column: 1 / -1;">
          <span class="label">Hours</span>
          <span class="value">${escapeHtml(spot.hours)}</span>
        </div>
      </div>

      ${spot.features && spot.features.length ? `
        <div style="margin-bottom: 1.25rem;">
          <span class="label" style="display: block; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-faint); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.6rem;">
            Features
          </span>
          <div class="modal-features">
            ${spot.features.map(f => `<span class="feature-pill">${escapeHtml(f)}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <div class="modal-actions">
        <a href="https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}"
           target="_blank" rel="noopener"
           class="modal-btn modal-btn-primary">
          Get directions →
        </a>
        <button type="button" class="modal-btn modal-btn-ghost" data-close>Close</button>
      </div>
    `;

    // Wire up close buttons inside the freshly rendered body
    $modal.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', closeModal);
    });

    $modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $modal.hidden = true;
    document.body.style.overflow = '';
  }

  window.openParkingDetail = openModal;

  // -----------------------------------------------------
  // VIEW TOGGLE
  // -----------------------------------------------------
  function switchView(v) {
    view = v;
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.view === v);
    });
    document.getElementById('resultsList').hidden = (v !== 'list');
    document.getElementById('resultsMap').hidden  = (v !== 'map');
    $pagination.hidden = (v !== 'list') || (cachedResults.length <= visibleCount);

    if (v === 'map') renderMap();
  }

  // -----------------------------------------------------
  // UPDATE — re-renders whatever's active
  // -----------------------------------------------------
  function update() {
    renderList(true);
    if (view === 'map') renderMap();
  }

  // -----------------------------------------------------
  // SEARCH HANDLER
  // -----------------------------------------------------
  function handleSearch(query) {
    const resolved = resolveLocation(query);
    if (resolved) {
      referencePoint = resolved;
    } else if (query.trim() === '') {
      referencePoint = { lat: 42.3554, lng: -71.0680, label: 'Boston Common' };
    } else {
      // No match — show inline notice but don't break the layout
      $list.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">⌕</div>
          <p class="empty-title">"${escapeHtml(query)}" — no match</p>
          <p class="empty-sub">Try a Boston neighborhood (Back Bay, North End) or a landmark (Faneuil Hall, Fenway Park).</p>
        </div>
      `;
      $count.textContent = '0';
      $pagination.hidden = true;
      $empty.hidden = true;
      return;
    }
    update();
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // -----------------------------------------------------
  // EVENT WIRING
  // -----------------------------------------------------
  function init() {
    // Search form
    document.getElementById('searchForm').addEventListener('submit', e => {
      e.preventDefault();
      handleSearch(document.getElementById('searchInput').value);
    });

    // Quick chips
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.chip;
        document.getElementById('searchInput').value = q;
        handleSearch(q);
      });
    });

    // Type segmented control
    document.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        filters.type = btn.dataset.type;
        update();
      });
    });

    // Price
    const $price = document.getElementById('priceFilter');
    const $priceVal = document.getElementById('priceValue');
    $price.addEventListener('input', e => {
      filters.maxPrice = Number(e.target.value);
      $priceVal.textContent = filters.maxPrice >= 30 ? 'Any' : `$${filters.maxPrice}/hr`;
      update();
    });

    // Distance
    const $dist = document.getElementById('distanceFilter');
    const $distVal = document.getElementById('distanceValue');
    $dist.addEventListener('input', e => {
      filters.maxDistance = Number(e.target.value);
      $distVal.textContent = `${filters.maxDistance} mi`;
      update();
    });

    // Availability
    document.getElementById('availableOnly').addEventListener('change', e => {
      filters.availableOnly = e.target.checked;
      update();
    });

    // Reset filters
    document.getElementById('resetFilters').addEventListener('click', () => {
      filters.type = 'all';
      filters.maxPrice = 30;
      filters.maxDistance = 5;
      filters.availableOnly = false;

      document.querySelectorAll('.seg-btn').forEach(b => {
        b.classList.toggle('is-active', b.dataset.type === 'all');
      });
      $price.value = 30;
      $priceVal.textContent = 'Any';
      $dist.value = 5;
      $distVal.textContent = '5 mi';
      document.getElementById('availableOnly').checked = false;
      update();
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });

    // Pagination
    $loadMore.addEventListener('click', () => {
      visibleCount += PAGE_SIZE;
      renderList(false);
    });

    // Modal close on backdrop
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !$modal.hidden) closeModal();
    });

    // Live stats
    const total = PARKING_DATA.length;
    const neighborhoods = new Set(PARKING_DATA.map(p => p.neighborhood)).size;
    document.getElementById('statSpots').textContent = total.toLocaleString();
    document.getElementById('statNeighborhoods').textContent = neighborhoods;
    // statMeters stays as the literal "6,955" — that's the raw count from the CSV

    document.getElementById('year').textContent = new Date().getFullYear();

    // Initial price label
    $priceVal.textContent = 'Any';

    update();
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
