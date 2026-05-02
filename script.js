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
  // GEOLOCATION — uses browser's built-in Geolocation API
  // -----------------------------------------------------
  // Boston bounding box — if the user is outside this, they'd see a useless
  // empty state (no parking within 5 miles). We warn instead and fall back.
  const BOSTON_BOUNDS = {
    minLat: 42.20, maxLat: 42.45,
    minLng: -71.25, maxLng: -70.95
  };

  function isInBoston(lat, lng) {
    return lat >= BOSTON_BOUNDS.minLat && lat <= BOSTON_BOUNDS.maxLat &&
           lng >= BOSTON_BOUNDS.minLng && lng <= BOSTON_BOUNDS.maxLng;
  }

  function requestUserLocation() {
    const $btn = document.getElementById('locateBtn');
    const $input = document.getElementById('searchInput');

    if (!navigator.geolocation) {
      alert('Your browser does not support location services.');
      return;
    }

    // Show spinner state
    $btn.classList.add('is-loading');

    navigator.geolocation.getCurrentPosition(
      // Success — got coordinates
      position => {
        $btn.classList.remove('is-loading');

        const { latitude, longitude } = position.coords;

        if (!isInBoston(latitude, longitude)) {
          // User is outside the data coverage area
          $btn.classList.remove('is-active');
          alert("You appear to be outside of the Boston area. We'll show parking near Boston Common instead. Try searching for a specific neighborhood.");
          return;
        }

        referencePoint = {
          lat: latitude,
          lng: longitude,
          label: 'Your location'
        };

        // Clear the search box so it's clear we're using location, not a query
        $input.value = '';
        $btn.classList.add('is-active');

        update();
        document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
      },
      // Error — denied, timeout, or unavailable
      error => {
        $btn.classList.remove('is-loading');

        let message = 'Could not get your location.';
        if (error.code === error.PERMISSION_DENIED) {
          message = 'Location access denied. You can search by neighborhood instead.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          message = "Your location isn't available right now. Try searching by neighborhood.";
        } else if (error.code === error.TIMEOUT) {
          message = 'Location request timed out. Try again or search by neighborhood.';
        }
        alert(message);
      },
      // Options
      {
        enableHighAccuracy: false,  // Wi-Fi/IP positioning is plenty for parking
        timeout: 8000,              // give up after 8 seconds
        maximumAge: 300000          // accept cached positions up to 5 min old
      }
    );
  }

  // -----------------------------------------------------
  // EVENT WIRING
  // -----------------------------------------------------
  function init() {
    // Search form
    document.getElementById('searchForm').addEventListener('submit', e => {
      e.preventDefault();
      // User is overriding the location — clear the active state on locate button
      document.getElementById('locateBtn').classList.remove('is-active');
      handleSearch(document.getElementById('searchInput').value);
    });

    // Quick chips
    document.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.chip;
        document.getElementById('searchInput').value = q;
        // User picked a chip — clear the active state on locate button
        document.getElementById('locateBtn').classList.remove('is-active');
        handleSearch(q);
      });
    });

    // Locate-me button — uses browser Geolocation API
    document.getElementById('locateBtn').addEventListener('click', requestUserLocation);

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

  // =====================================================
  // NEARBY TRANSIT — ported from nearby-transit Python
  // Queries OpenStreetMap Overpass API for bus, subway,
  // train, ferry, tram, and aerial stops near a point.
  // =====================================================

  const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

  const TRANSIT_MODE_LABELS = {
    subway: { label: 'Subway',  emoji: '🚇', color: '#7dd3fc' },
    train:  { label: 'Train',   emoji: '🚆', color: '#4ade80' },
    bus:    { label: 'Bus',     emoji: '🚌', color: '#f0abfc' },
    tram:   { label: 'Tram',    emoji: '🚋', color: '#fde68a' },
    ferry:  { label: 'Ferry',   emoji: '⛴️', color: '#67e8f9' },
    aerial: { label: 'Aerial',  emoji: '🚡', color: '#d8b4fe' },
    taxi:   { label: 'Taxi',    emoji: '🚕', color: '#fca5a5' },
    other:  { label: 'Other',   emoji: '📍', color: '#9ca3af' }
  };

  // --- classify: mirrors the Python classify() function ---
  function transitClassify(tags) {
    if (!tags) return 'other';

    const highway         = (tags.highway         || '').toLowerCase();
    const railway         = (tags.railway         || '').toLowerCase();
    const publicTransport = (tags.public_transport || '').toLowerCase();
    const amenity         = (tags.amenity         || '').toLowerCase();
    const operator        = (tags.operator        || '').toLowerCase();
    const network         = (tags.network         || '').toLowerCase();
    const ref             = (tags.ref             || '').toLowerCase();
    const service         = (tags.service         || '').toLowerCase();

    // Explicit rail/subway/tram
    if (railway) {
      if (['subway', 'metro'].includes(railway))          return 'subway';
      if (['tram_stop', 'tram'].includes(railway))        return 'tram';
      if (['station', 'halt', 'stop'].includes(railway))  return 'train';
    }

    // public_transport roles
    if (['platform', 'stop_position', 'stop_area', 'stop'].includes(publicTransport)) {
      if (railway) {
        if (['subway', 'metro'].includes(railway))         return 'subway';
        if (['tram_stop', 'tram'].includes(railway))       return 'tram';
        return 'train';
      }
      if (highway === 'bus_stop' || tags.bus)              return 'bus';
    }

    // Bus
    if (highway === 'bus_stop' || tags.bus === 'yes' || tags.busway) return 'bus';

    // Ferry / aerial / taxi
    if (amenity === 'ferry_terminal' || tags.ferry === 'yes')         return 'ferry';
    if (tags.aerialway)                                               return 'aerial';
    if (amenity === 'taxi'           || tags.taxi  === 'yes')         return 'taxi';

    // Infer from operator/network/ref/service (MBTA-style)
    const mbta = ['mbta', 'commuter rail', 'massachusetts'];
    if (mbta.some(x => operator.includes(x)) ||
        ['mbta', 'commuter rail'].some(x => network.includes(x)) ||
        ref.includes('commuter') || service.includes('commuter')) {
      if (['rail', 'commuter'].some(x => operator.includes(x) || ref.includes(x))) return 'train';
      if (highway === 'bus_stop') return 'bus';
      return 'train';
    }

    return 'other';
  }

  // --- element coords: mirrors element_coords() ---
  function transitElementCoords(el) {
    if (el.type === 'node') return { lat: el.lat, lon: el.lon };
    if (el.center)          return { lat: el.center.lat, lon: el.center.lon };
    if (el.bounds) {
      return {
        lat: (el.bounds.minlat + el.bounds.maxlat) / 2,
        lon: (el.bounds.minlon + el.bounds.maxlon) / 2
      };
    }
    return null;
  }

  // --- Overpass query: mirrors query_overpass() ---
  async function queryOverpass(lat, lon, radiusM) {
    const r = Math.round(radiusM);
    const query = `
[out:json][timeout:30];
(
  node(around:${r},${lat},${lon})[highway=bus_stop];
  node(around:${r},${lat},${lon})[public_transport~"platform|stop_position|stop_area|stop"];
  node(around:${r},${lat},${lon})[railway~"station|subway|halt|tram_stop|stop"];
  node(around:${r},${lat},${lon})[amenity=ferry_terminal];
  node(around:${r},${lat},${lon})[aerialway];
  node(around:${r},${lat},${lon})[amenity=taxi];

  way(around:${r},${lat},${lon})[highway=bus_stop];
  way(around:${r},${lat},${lon})[public_transport~"platform|stop_position|stop_area|stop"];
  way(around:${r},${lat},${lon})[railway~"station|subway|halt|tram_stop|stop"];
  way(around:${r},${lat},${lon})[amenity=ferry_terminal];
  way(around:${r},${lat},${lon})[aerialway];
  way(around:${r},${lat},${lon})[amenity=taxi];

  relation(around:${r},${lat},${lon})[public_transport~"stop_area|platform"];
  relation(around:${r},${lat},${lon})[operator~"MBTA|Massachusetts Bay Transportation Authority",i];
);
out center tags;
    `.trim();

    const resp = await fetch(OVERPASS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: query
    });
    if (!resp.ok) throw new Error(`Overpass HTTP ${resp.status}`);
    const json = await resp.json();
    return json.elements || [];
  }

  // --- metres between two lat/lon points (Haversine) ---
  function transitDistanceM(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = d => d * Math.PI / 180;
    const dphi = toRad(lat2 - lat1);
    const dlam = toRad(lon2 - lon1);
    const a = Math.sin(dphi / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dlam / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // --- find + deduplicate: mirrors find_nearby() ---
  async function findNearbyTransit(lat, lon, radiusM = 1000) {
    const elements = await queryOverpass(lat, lon, radiusM);
    const results  = [];
    const seenIds  = new Set();
    const seenCoords = new Set();

    for (const el of elements) {
      const elId = `${el.type}-${el.id}`;
      const coords = transitElementCoords(el);
      if (!coords) continue;

      const coordKey = `${coords.lat.toFixed(6)},${coords.lon.toFixed(6)}`;
      if (seenIds.has(elId) || seenCoords.has(coordKey)) continue;
      seenIds.add(elId);
      seenCoords.add(coordKey);

      const tags = el.tags || {};
      const name = tags.name || tags.ref || tags.operator || 'Unnamed stop';
      const mode = transitClassify(tags);
      const distM = transitDistanceM(lat, lon, coords.lat, coords.lon);

      // Mirror Python filter: exclude 'other' and outbound
      if (mode === 'other') continue;
      const nameLower = name.toLowerCase();
      const dirTag    = (tags.direction || '').toLowerCase();
      if (nameLower.includes('outbound') || dirTag.includes('outbound')) continue;

      results.push({ osmType: el.type, osmId: el.id, name, mode, distM, lat: coords.lat, lon: coords.lon, tags });
    }

    results.sort((a, b) => a.distM - b.distM);
    return results;
  }

  // -------------------------------------------------------
  // TRANSIT UI — panel rendered below the parking results
  // -------------------------------------------------------
  let transitResults  = [];
  let transitVisible  = 50;
  const TRANSIT_PAGE  = 50;
  let transitRadius   = 800; // metres — default
  let transitLoading  = false;

  function getOrCreateTransitSection() {
    let section = document.getElementById('transitSection');
    if (section) return section;

    section = document.createElement('section');
    section.id = 'transitSection';
    section.className = 'transit-section';
    section.innerHTML = `
      <div class="transit-header">
        <h2 class="transit-title">🚇 Nearby Transit</h2>
        <div class="transit-controls">
          <label class="transit-radius-label" for="transitRadius">Radius</label>
          <select id="transitRadius" class="transit-radius-select">
            <option value="400">400 m (¼ mi)</option>
            <option value="800" selected>800 m (½ mi)</option>
            <option value="1600">1,600 m (1 mi)</option>
            <option value="2400">2,400 m (1.5 mi)</option>
          </select>
          <button id="transitRefresh" class="transit-refresh-btn" aria-label="Refresh transit stops">↻ Refresh</button>
        </div>
      </div>
      <div id="transitStatus" class="transit-status" aria-live="polite"></div>
      <div id="transitList"   class="transit-list"></div>
      <div id="transitPagination" class="transit-pagination" hidden>
        <button id="transitLoadMore" class="transit-load-more">Load more stops</button>
        <span   id="transitPageInfo" class="transit-page-info"></span>
      </div>
    `;

    // Insert after the main results section (or append to body if not found)
    const resultsSection = document.getElementById('results') || document.querySelector('main') || document.body;
    resultsSection.insertAdjacentElement('afterend', section);

    // Wire controls
    section.querySelector('#transitRadius').addEventListener('change', e => {
      transitRadius = Number(e.target.value);
      loadTransit();
    });
    section.querySelector('#transitRefresh').addEventListener('click', loadTransit);
    section.querySelector('#transitLoadMore').addEventListener('click', () => {
      transitVisible += TRANSIT_PAGE;
      renderTransitList(false);
    });

    // Inject styles (only once)
    if (!document.getElementById('transitStyles')) {
      const style = document.createElement('style');
      style.id = 'transitStyles';
      style.textContent = `
        .transit-section {
          max-width: 1100px;
          margin: 2.5rem auto 0;
          padding: 0 1.25rem 3rem;
          font-family: var(--font-sans, system-ui, sans-serif);
        }
        .transit-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .transit-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text, #f1f5f9);
          margin: 0;
        }
        .transit-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .transit-radius-label {
          font-size: 0.8rem;
          color: var(--text-soft, #94a3b8);
          white-space: nowrap;
        }
        .transit-radius-select {
          background: var(--surface-2, #1e1e2e);
          color: var(--text, #f1f5f9);
          border: 1px solid var(--border, #2e2e3e);
          border-radius: 6px;
          padding: 0.3rem 0.55rem;
          font-size: 0.82rem;
          cursor: pointer;
        }
        .transit-refresh-btn {
          background: var(--surface-2, #1e1e2e);
          color: var(--text-soft, #94a3b8);
          border: 1px solid var(--border, #2e2e3e);
          border-radius: 6px;
          padding: 0.3rem 0.75rem;
          font-size: 0.82rem;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .transit-refresh-btn:hover { background: var(--surface-3, #2e2e3e); color: var(--text, #f1f5f9); }
        .transit-refresh-btn.is-loading { opacity: 0.55; cursor: wait; }
        .transit-status {
          font-size: 0.85rem;
          color: var(--text-soft, #94a3b8);
          margin-bottom: 0.85rem;
          min-height: 1.4em;
        }
        .transit-list {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .transit-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.9rem;
          background: var(--surface-1, #16161d);
          border: 1px solid var(--border, #2e2e3e);
          border-radius: 8px;
          transition: border-color 0.15s;
        }
        .transit-row:hover { border-color: var(--accent, #7dd3fc); }
        .transit-mode-badge {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.2rem 0.55rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
          background: color-mix(in srgb, var(--badge-color) 18%, transparent);
          color: var(--badge-color);
          border: 1px solid color-mix(in srgb, var(--badge-color) 35%, transparent);
          min-width: 5rem;
          justify-content: center;
        }
        .transit-name {
          flex: 1;
          font-size: 0.9rem;
          color: var(--text, #f1f5f9);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .transit-dist {
          font-size: 0.78rem;
          color: var(--text-faint, #64748b);
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }
        .transit-dir-link {
          font-size: 0.75rem;
          color: var(--text-soft, #94a3b8);
          text-decoration: none;
          border: 1px solid var(--border, #2e2e3e);
          border-radius: 5px;
          padding: 0.2rem 0.45rem;
          white-space: nowrap;
          transition: color 0.15s, border-color 0.15s;
        }
        .transit-dir-link:hover { color: var(--text, #f1f5f9); border-color: var(--text-soft, #94a3b8); }
        .transit-pagination {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.1rem;
        }
        .transit-load-more {
          background: var(--surface-2, #1e1e2e);
          color: var(--text-soft, #94a3b8);
          border: 1px solid var(--border, #2e2e3e);
          border-radius: 7px;
          padding: 0.45rem 1rem;
          font-size: 0.84rem;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .transit-load-more:hover { background: var(--surface-3, #2e2e3e); color: var(--text, #f1f5f9); }
        .transit-page-info { font-size: 0.78rem; color: var(--text-faint, #64748b); }
        .transit-empty {
          text-align: center;
          padding: 2.5rem 1rem;
          color: var(--text-soft, #94a3b8);
          font-size: 0.9rem;
        }
        .transit-error {
          padding: 0.85rem 1rem;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-radius: 8px;
          color: #fca5a5;
          font-size: 0.85rem;
        }
      `;
      document.head.appendChild(style);
    }

    return section;
  }

  function renderTransitList(reset = true) {
    const section     = getOrCreateTransitSection();
    const $tList      = section.querySelector('#transitList');
    const $tPagination = section.querySelector('#transitPagination');
    const $tLoadMore  = section.querySelector('#transitLoadMore');
    const $tPageInfo  = section.querySelector('#transitPageInfo');

    if (reset) transitVisible = TRANSIT_PAGE;

    if (transitResults.length === 0) {
      $tList.innerHTML = `<div class="transit-empty">No transit stops found within this radius.<br>Try increasing the search radius.</div>`;
      $tPagination.hidden = true;
      return;
    }

    const visible = transitResults.slice(0, transitVisible);

    $tList.innerHTML = visible.map(stop => {
      const meta   = TRANSIT_MODE_LABELS[stop.mode] || TRANSIT_MODE_LABELS.other;
      const distFt = (stop.distM * 3.28084).toFixed(0);
      const distMi = (stop.distM / 1609.34).toFixed(2);
      const distLabel = stop.distM < 400
        ? `${distFt} ft`
        : `${distMi} mi`;
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${stop.lat},${stop.lon}`;

      return `
        <div class="transit-row" style="--badge-color: ${meta.color}">
          <span class="transit-mode-badge">${meta.emoji} ${meta.label}</span>
          <span class="transit-name" title="${escapeHtml(stop.name)}">${escapeHtml(stop.name)}</span>
          <span class="transit-dist">${distLabel}</span>
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="transit-dir-link" aria-label="Directions to ${escapeHtml(stop.name)}">Directions →</a>
        </div>
      `;
    }).join('');

    if (transitResults.length > transitVisible) {
      $tPagination.hidden = false;
      const remaining = transitResults.length - transitVisible;
      const next = Math.min(TRANSIT_PAGE, remaining);
      $tLoadMore.textContent = `Load ${next} more stops`;
      $tPageInfo.textContent = `Showing ${transitVisible} of ${transitResults.length}`;
    } else {
      $tPagination.hidden = true;
    }
  }

  async function loadTransit() {
    if (transitLoading) return;
    transitLoading = true;

    const section  = getOrCreateTransitSection();
    const $status  = section.querySelector('#transitStatus');
    const $tList   = section.querySelector('#transitList');
    const $refresh = section.querySelector('#transitRefresh');

    $refresh.classList.add('is-loading');
    $tList.innerHTML = '';
    $status.textContent = `Searching for transit stops within ${transitRadius} m…`;

    try {
      transitResults = await findNearbyTransit(referencePoint.lat, referencePoint.lng, transitRadius);
      const modeBreakdown = {};
      transitResults.forEach(s => { modeBreakdown[s.mode] = (modeBreakdown[s.mode] || 0) + 1; });
      const breakdown = Object.entries(modeBreakdown)
        .map(([m, n]) => `${TRANSIT_MODE_LABELS[m]?.emoji || ''} ${n} ${TRANSIT_MODE_LABELS[m]?.label || m}`)
        .join('  ·  ');
      $status.textContent = transitResults.length > 0
        ? `Found ${transitResults.length} stop${transitResults.length !== 1 ? 's' : ''} near ${referencePoint.label}  —  ${breakdown}`
        : `No transit stops found near ${referencePoint.label} within ${transitRadius} m.`;
      renderTransitList(true);
    } catch (err) {
      console.error('Transit query failed:', err);
      $status.textContent = '';
      $tList.innerHTML = `<div class="transit-error">⚠️ Could not load transit data. The Overpass API may be temporarily unavailable — try again in a moment.</div>`;
    } finally {
      transitLoading = false;
      $refresh.classList.remove('is-loading');
    }
  }

  // Patch update() to also refresh transit whenever parking updates
  const _origUpdate = update;  // eslint-disable-line no-use-before-define
  // (update is defined above in the same scope, this reference is valid at call-time)

  // Hook into the existing update function by wrapping it
  // We redefine the module-level update to also call loadTransit
  // Since update() is called from multiple places, we monkey-patch after definition:
  const _transitHookUpdate = () => {
    _origUpdate.call(this);
    // Only auto-load transit if the section already exists (avoids loading on every filter tweak)
    if (document.getElementById('transitSection')) {
      loadTransit();
    }
  };

  // Expose transit load so it can be triggered manually from the page
  window.loadNearbyTransit = loadTransit;
  window.transitState = { get results() { return transitResults; } };

  // Auto-load transit on initial page ready (after parking data loads)
  // We wait for DOMContentLoaded + a small delay so referencePoint is set
  function autoLoadTransit() {
    // Defer so parking init() runs first and sets referencePoint
    setTimeout(loadTransit, 300);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoLoadTransit);
  } else {
    autoLoadTransit();
  }

  // Re-load transit whenever the reference point changes.
  // We do this by wrapping handleSearch and requestUserLocation side-effects.
  // The cleanest hook is to observe referencePoint changes — we use a tiny
  // MutationObserver on the locationLabel element instead of Proxy (IE-safe).
  const _locationLabel = document.getElementById('locationLabel');
  if (_locationLabel) {
    new MutationObserver(() => {
      if (document.getElementById('transitSection')) {
        loadTransit();
      }
    }).observe(_locationLabel, { childList: true, characterData: true, subtree: true });
  }
})();
