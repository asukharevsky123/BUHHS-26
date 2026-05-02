# ParkBoston 🅿️

Real-time parking finder for Boston — combines curated garage/lot data with **6,955 active street meters** from City of Boston open data.

## Features

- **648 parking locations** across 14 neighborhoods
- **Search** by neighborhood, street, or landmark
- **Smart filters** for type, max price, distance, and availability
- **List & map views** with one-click toggle
- **Pagination** for fast list loading (30 per page out of 648)
- **Detail modal** with hours, capacity, features, and directions link
- **Fully responsive**, mobile-first
- **Modern dark UI** with glass-morphism, animated gradient mesh, and Instrument Serif × Geist typography

## Data sources

The street parking data is processed from the City of Boston `parking_meters.csv`:
- 6,955 active meters
- Aggregated into ~634 street segments (grouped by street + block)
- Real coordinates, real hours, real rates

Garages and lots are a curated set of well-known Boston parking facilities. In production, you'd plug in real-time availability via APIs like SpotHero or ParkWhiz.

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

Just open `index.html`, or serve it:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
# or
npx serve .
```

## Deploying to GitHub Pages

1. Push to a GitHub repo.
2. **Settings → Pages → Deploy from a branch → main / root**.
3. Live at `https://<user>.github.io/<repo>/` in about a minute.

No build step. No bundler. No backend.

## Updating the data

If the City of Boston releases a new `parking_meters.csv`, you can regenerate `data.js` with a Python script. The transformation:
1. Filter to active meters with valid lat/lng.
2. Group by `STREET + DIR + BLK_NO` (street segments).
3. Parse `PAY_POLICY` for hours and max-stay.
4. Estimate hourly rate as `BASE_RATE × 5` (since `BASE_RATE` is per ~12-min increment).
5. Combine with the garage/lot list.

## Notes

- Availability counts on street segments are simulated (the CSV doesn't include real-time occupancy). Real systems use sensor data — Boston's `HAS_SENSOR=YES` meters do report live status, marked with the "Pay-by-Plate sensor" feature in the detail view.
- The geocoder is a small offline lookup. For production, swap in Mapbox or Google Places.
- Map tiles: CartoDB Dark Matter (free, no API key).
