# ParkBoston 🅿️

Real-time parking finder for Boston — combines curated garage/lot data with **6,955 active street meters** from City of Boston open data.

## Features

- **648 parking locations** across 14 neighborhoods
- **Search** by neighborhood, street, or landmark
- **"Use my location"** button — uses the browser Geolocation API to find parking near you (with a Boston bounding-box check so out-of-area users get a helpful message instead of an empty list)
- **Smart filters** for type, max price, distance, and availability
- **List & map views** with one-click toggle
- **Pagination** for fast list loading (30 per page out of 648)
- **Detail modal** with hours, capacity, features, and a directions link to Google Maps
- **Fully responsive**, mobile-first
- **Modern dark UI** with glass-morphism, animated gradient mesh, and Instrument Serif × Geist typography

## Data sources

The street parking data is processed from the City of Boston `parking_meters.csv`:
- 6,955 active meters
- Aggregated into ~634 street segments (grouped by street + block)
- Real coordinates, real hours, real rates

Garages and lots are a curated set of well-known Boston parking facilities. In a production app, you'd plug in real-time availability via APIs like SpotHero or ParkWhiz.

## Project structure

```
boston-parking/
├── index.html      Markup
├── styles.css      Theme + all styling
├── script.js       App logic
├── data.js         Combined parking dataset (~284KB)
└── README.md
```

## Running locally

Geolocation requires a secure context, but `localhost` counts as secure, so the local dev experience works fine:

```bash
python3 -m http.server 8000     # then visit http://localhost:8000
# or
npx serve .
```

Opening `index.html` directly via `file://` will load the page but the geolocation button won't work (browsers block the API on `file://` origins).

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. **Settings → Pages → Deploy from a branch → main / root**.
3. Live at `https://<user>.github.io/<repo>/` in about a minute.

GitHub Pages serves over HTTPS by default, so geolocation works in production too.

## Updating the data

If the City of Boston releases a new `parking_meters.csv`, you can regenerate `data.js`. The transformation:
1. Filter to active meters with valid lat/lng.
2. Group by `STREET + DIR + BLK_NO` (street segments).
3. Parse `PAY_POLICY` for hours and max-stay.
4. Estimate hourly rate as `BASE_RATE × 5` (since `BASE_RATE` is per ~12-min increment).
5. Combine with the garage/lot list.

## Notes & known limitations

- **Availability data on street segments is simulated** — the City CSV doesn't include real-time occupancy. Real systems use sensor data; meters with `HAS_SENSOR=YES` in the source CSV (marked with the "Pay-by-Plate sensor" feature pill) do report live status in production deployments.
- **Garage availability is also static** for the demo. Hooking into a real-time API like SpotHero would replace the hardcoded `spotsOpen` values.
- **Geocoding uses a small offline lookup** of ~30 Boston neighborhoods and landmarks. For a production app, swap in Mapbox Geocoding or Google Places.
- **Map tiles** come from CartoDB Dark Matter (free, no API key required).
- **Distance is straight-line (Haversine)**, not driving distance. For walking parking that's fine; if you needed routing you'd use OSRM or Mapbox Directions.

## Tech stack

- Vanilla HTML/CSS/JavaScript — no build step, no framework
- [Leaflet](https://leafletjs.com/) for the map
- [CartoDB Dark Matter](https://carto.com/basemaps) tiles
- [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) and [Geist](https://vercel.com/font) via Google Fonts
- Browser Geolocation API for "Use my location"

## Credits

Built with assistance from **Claude Opus 4.7** (Anthropic). The model helped scaffold the HTML/CSS/JS architecture, process the City of Boston meter CSV into aggregated street segments, design the visual theme, and wire up features like geolocation, filtering, and the map view.

Parking meter data: City of Boston Open Data Portal.
Map tiles: © OpenStreetMap contributors, © CARTO.
