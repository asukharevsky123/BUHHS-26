// Boston parking data — combines curated garages/lots with real meter data
// from the City of Boston parking_meters.csv (6,955 active meters aggregated
// into ~600 street segments).

const PARKING_DATA = [
  {
    "id": "g1",
    "name": "Boston Common Garage",
    "type": "garage",
    "neighborhood": "Beacon Hill",
    "address": "0 Charles St, Boston, MA 02116",
    "lat": 42.3554,
    "lng": -71.068,
    "price": 18,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 142,
    "totalSpots": 1300,
    "hours": "24/7",
    "features": [
      "Covered",
      "EV Charging",
      "Accessible"
    ]
  },
  {
    "id": "g2",
    "name": "Post Office Square Garage",
    "type": "garage",
    "neighborhood": "Financial District",
    "address": "Zero Post Office Square, Boston, MA 02109",
    "lat": 42.3568,
    "lng": -71.0552,
    "price": 22,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 23,
    "totalSpots": 1400,
    "hours": "Mon\u2013Sun 6am\u201312am",
    "features": [
      "Covered",
      "Valet",
      "EV Charging"
    ]
  },
  {
    "id": "g3",
    "name": "Prudential Center Garage",
    "type": "garage",
    "neighborhood": "Back Bay",
    "address": "800 Boylston St, Boston, MA 02199",
    "lat": 42.3473,
    "lng": -71.0821,
    "price": 16,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 287,
    "totalSpots": 3500,
    "hours": "24/7",
    "features": [
      "Covered",
      "EV Charging",
      "Mall Access"
    ]
  },
  {
    "id": "g4",
    "name": "Government Center Garage",
    "type": "garage",
    "neighborhood": "Downtown",
    "address": "50 New Sudbury St, Boston, MA 02114",
    "lat": 42.3614,
    "lng": -71.0598,
    "price": 14,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 89,
    "totalSpots": 950,
    "hours": "24/7",
    "features": [
      "Covered",
      "Accessible"
    ]
  },
  {
    "id": "g5",
    "name": "Faneuil Hall Garage",
    "type": "garage",
    "neighborhood": "Downtown",
    "address": "75 State St, Boston, MA 02109",
    "lat": 42.3601,
    "lng": -71.0567,
    "price": 20,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 156,
    "totalSpots": 700,
    "hours": "24/7",
    "features": [
      "Covered",
      "Validation"
    ]
  },
  {
    "id": "g6",
    "name": "Copley Place Garage",
    "type": "garage",
    "neighborhood": "Back Bay",
    "address": "100 Huntington Ave, Boston, MA 02116",
    "lat": 42.3479,
    "lng": -71.0788,
    "price": 17,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 412,
    "totalSpots": 1400,
    "hours": "24/7",
    "features": [
      "Covered",
      "Mall Access",
      "EV Charging"
    ]
  },
  {
    "id": "g7",
    "name": "North End Garage",
    "type": "garage",
    "neighborhood": "North End",
    "address": "600 Commercial St, Boston, MA 02109",
    "lat": 42.3661,
    "lng": -71.0521,
    "price": 15,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 18,
    "totalSpots": 350,
    "hours": "24/7",
    "features": [
      "Covered",
      "Near Restaurants"
    ]
  },
  {
    "id": "l1",
    "name": "Hanover Street Lot",
    "type": "lot",
    "neighborhood": "North End",
    "address": "Hanover St, Boston, MA 02113",
    "lat": 42.3645,
    "lng": -71.054,
    "price": 12,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 27,
    "totalSpots": 65,
    "hours": "Daily 7am\u201311pm",
    "features": [
      "Outdoor",
      "Cash & Card"
    ]
  },
  {
    "id": "l2",
    "name": "Fenway Triangle Lot",
    "type": "lot",
    "neighborhood": "Fenway",
    "address": "180 Brookline Ave, Boston, MA 02215",
    "lat": 42.3434,
    "lng": -71.0997,
    "price": 25,
    "priceUnit": "event",
    "availability": "available",
    "spotsOpen": 78,
    "totalSpots": 200,
    "hours": "Event days only",
    "features": [
      "Outdoor",
      "Game Day",
      "Near Fenway Park"
    ]
  },
  {
    "id": "g8",
    "name": "Seaport Boulevard Garage",
    "type": "garage",
    "neighborhood": "Seaport",
    "address": "100 Seaport Blvd, Boston, MA 02210",
    "lat": 42.352,
    "lng": -71.0445,
    "price": 19,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 234,
    "totalSpots": 800,
    "hours": "24/7",
    "features": [
      "Covered",
      "EV Charging",
      "Waterfront"
    ]
  },
  {
    "id": "g9",
    "name": "South Station Garage",
    "type": "garage",
    "neighborhood": "Downtown",
    "address": "700 Atlantic Ave, Boston, MA 02110",
    "lat": 42.3519,
    "lng": -71.0552,
    "price": 21,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 31,
    "totalSpots": 950,
    "hours": "24/7",
    "features": [
      "Covered",
      "Train Access"
    ]
  },
  {
    "id": "l3",
    "name": "Chinatown Lot",
    "type": "lot",
    "neighborhood": "Chinatown",
    "address": "100 Kneeland St, Boston, MA 02111",
    "lat": 42.3504,
    "lng": -71.061,
    "price": 10,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 45,
    "totalSpots": 120,
    "hours": "Daily 6am\u20132am",
    "features": [
      "Outdoor",
      "Cash & Card"
    ]
  },
  {
    "id": "g10",
    "name": "MGH Yawkey Garage",
    "type": "garage",
    "neighborhood": "West End",
    "address": "55 Fruit St, Boston, MA 02114",
    "lat": 42.3631,
    "lng": -71.07,
    "price": 15,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 198,
    "totalSpots": 1100,
    "hours": "24/7",
    "features": [
      "Covered",
      "Hospital Validation"
    ]
  },
  {
    "id": "g11",
    "name": "Harvard Square Garage",
    "type": "garage",
    "neighborhood": "Cambridge",
    "address": "65 JFK St, Cambridge, MA 02138",
    "lat": 42.3736,
    "lng": -71.119,
    "price": 13,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 142,
    "totalSpots": 600,
    "hours": "24/7",
    "features": [
      "Covered",
      "Validation"
    ]
  },
  {
    "id": "s1",
    "name": "Newbury St Ext \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St Ext, Boston, MA",
    "lat": 42.348013,
    "lng": -71.095282,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 58,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s2",
    "name": "Charles St \u00b7 BOYL",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.354407,
    "lng": -71.06856,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 19,
    "totalSpots": 51,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s3",
    "name": "Summer St \u00b7 WTC",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "Summer St, Boston, MA",
    "lat": 42.348318,
    "lng": -71.045921,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 7,
    "totalSpots": 49,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s4",
    "name": "Commonwealth Ave \u00b7 GORH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349702,
    "lng": -71.13199,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 48,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s5",
    "name": "Albany St \u00b7 E NE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.3375,
    "lng": -71.067751,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 20,
    "totalSpots": 44,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s6",
    "name": "Beacon St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.348152,
    "lng": -71.099999,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 15,
    "totalSpots": 41,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s7",
    "name": "Beacon St \u00b7 MAIT",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.348062,
    "lng": -71.099542,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 41,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s8",
    "name": "Commonwealth Ave \u00b7 BU B",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.35102,
    "lng": -71.113342,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 22,
    "totalSpots": 41,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s9",
    "name": "Newbury Ext \u00b7 MASS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury Ext, Boston, MA",
    "lat": 42.348035,
    "lng": -71.089907,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 15,
    "totalSpots": 41,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s10",
    "name": "Bay State Rd \u00b7 GRAN",
    "type": "street",
    "neighborhood": "Fenway / Kenmore",
    "address": "Bay State Rd, Boston, MA",
    "lat": 42.350389,
    "lng": -71.101929,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 6,
    "totalSpots": 38,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s11",
    "name": "Chestnut Hill Ave \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Chestnut Hill Ave, Boston, MA",
    "lat": 42.33704,
    "lng": -71.152214,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 23,
    "totalSpots": 38,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s12",
    "name": "Bay State Rd \u00b7 GRAN",
    "type": "street",
    "neighborhood": "Fenway / Kenmore",
    "address": "Bay State Rd, Boston, MA",
    "lat": 42.350516,
    "lng": -71.101878,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 35,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s13",
    "name": "D Street \u00b7 FARG",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.342543,
    "lng": -71.046584,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 22,
    "totalSpots": 33,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s14",
    "name": "Bay State Rd \u00b7 DEER",
    "type": "street",
    "neighborhood": "Fenway / Kenmore",
    "address": "Bay State Rd, Boston, MA",
    "lat": 42.350166,
    "lng": -71.099102,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 32,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s15",
    "name": "Ipswich St \u00b7 BOYL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ipswich St, Boston, MA",
    "lat": 42.347407,
    "lng": -71.093243,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 20,
    "totalSpots": 32,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s16",
    "name": "Newbury Ext \u00b7 MASS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury Ext, Boston, MA",
    "lat": 42.348119,
    "lng": -71.090006,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 5,
    "totalSpots": 31,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s17",
    "name": "Beacon St \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.355771,
    "lng": -71.070921,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 30,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s18",
    "name": "Palace Rd \u00b7 LONG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Palace Rd, Boston, MA",
    "lat": 42.337826,
    "lng": -71.099853,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 30,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s19",
    "name": "A Street \u00b7 IRON",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "A Street, Boston, MA",
    "lat": 42.345806,
    "lng": -71.051962,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 15,
    "totalSpots": 29,
    "hours": "10am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s20",
    "name": "Bay State Rd \u00b7 SILB",
    "type": "street",
    "neighborhood": "Fenway / Kenmore",
    "address": "Bay State Rd, Boston, MA",
    "lat": 42.350286,
    "lng": -71.099004,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 4,
    "totalSpots": 29,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s21",
    "name": "Beacon St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.3505,
    "lng": -71.090593,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 28,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s22",
    "name": "Parker St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Parker St, Boston, MA",
    "lat": 42.337769,
    "lng": -71.093213,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 4,
    "totalSpots": 28,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s23",
    "name": "Beacon St \u00b7 AYR/",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.336319,
    "lng": -71.149525,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 27,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s24",
    "name": "Commonwealth Ave \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.348795,
    "lng": -71.090309,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 27,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s25",
    "name": "East Newton \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "East Newton, Boston, MA",
    "lat": 42.336665,
    "lng": -71.071057,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 27,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s26",
    "name": "Marginal Rd \u00b7 SHAW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marginal Rd, Boston, MA",
    "lat": 42.347816,
    "lng": -71.066858,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 14,
    "totalSpots": 27,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s27",
    "name": "Summer St \u00b7 MELC",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "Summer St, Boston, MA",
    "lat": 42.349801,
    "lng": -71.049599,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 27,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s28",
    "name": "Chestnut Hill Ave \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Chestnut Hill Ave, Boston, MA",
    "lat": 42.335505,
    "lng": -71.15041,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 26,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s29",
    "name": "Providence St \u00b7 BERK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Providence St, Boston, MA",
    "lat": 42.351032,
    "lng": -71.07161,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 26,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s30",
    "name": "Beacon St \u00b7 BERK",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.355033,
    "lng": -71.073764,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 25,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s31",
    "name": "Columbus Ave \u00b7 CLAR",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.347845,
    "lng": -71.072599,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 14,
    "totalSpots": 25,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s32",
    "name": "D Street \u00b7 CYPH",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.342073,
    "lng": -71.046917,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 11,
    "totalSpots": 25,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s33",
    "name": "Massachusetts Ave \u00b7 HAVI",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Massachusetts Ave, Boston, MA",
    "lat": 42.34521,
    "lng": -71.08681,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 25,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s34",
    "name": "Bay State Rd \u00b7 DEER",
    "type": "street",
    "neighborhood": "Fenway / Kenmore",
    "address": "Bay State Rd, Boston, MA",
    "lat": 42.350083,
    "lng": -71.096499,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 24,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s35",
    "name": "Beacon St \u00b7 DART",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.353404,
    "lng": -71.080228,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 4,
    "totalSpots": 24,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s36",
    "name": "Commonwealth Ave \u00b7 SILB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349646,
    "lng": -71.102148,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 24,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s37",
    "name": "Commonwealth Ave \u00b7 HARV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.35019,
    "lng": -71.131848,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 24,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s38",
    "name": "Huntington Ave \u00b7 GAIN",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.340911,
    "lng": -71.087941,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 24,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s39",
    "name": "New Chardon St \u00b7 MERR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "New Chardon St, Boston, MA",
    "lat": 42.362407,
    "lng": -71.06184,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 24,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s40",
    "name": "Seaport Blvd \u00b7 NORT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Seaport Blvd, Boston, MA",
    "lat": 42.351701,
    "lng": -71.045052,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 24,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s41",
    "name": "Ashford St \u00b7 MALV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ashford St, Boston, MA",
    "lat": 42.354111,
    "lng": -71.123771,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s42",
    "name": "Brookline Ave \u00b7 KILM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.345843,
    "lng": -71.099871,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 15,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s43",
    "name": "Commonwealth Ave \u00b7 THORN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350413,
    "lng": -71.129137,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s44",
    "name": "Commonwealth Ave \u00b7 DEER",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349267,
    "lng": -71.099037,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s45",
    "name": "Commonwealth Ave \u00b7 BRIG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351384,
    "lng": -71.126073,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s46",
    "name": "E Canton St \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "E Canton St, Boston, MA",
    "lat": 42.33787,
    "lng": -71.06911,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s47",
    "name": "Evans Wy \u00b7 LOUI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Evans Wy, Boston, MA",
    "lat": 42.337882,
    "lng": -71.097883,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s48",
    "name": "Hemenway St \u00b7 FORS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hemenway St, Boston, MA",
    "lat": 42.340173,
    "lng": -71.091791,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s49",
    "name": "Summer St \u00b7 WTCE",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "Summer St, Boston, MA",
    "lat": 42.350024,
    "lng": -71.049603,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 23,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s50",
    "name": "Beacon St \u00b7 AYR/",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.336221,
    "lng": -71.149401,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s51",
    "name": "Beacon St \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.354459,
    "lng": -71.075817,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s52",
    "name": "Boylston St \u00b7 IPSW",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.34494,
    "lng": -71.096664,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 22,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s53",
    "name": "Boylston St \u00b7 JERS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.344929,
    "lng": -71.096257,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 15,
    "totalSpots": 22,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s54",
    "name": "Commonwealth Ave \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.353578,
    "lng": -71.072848,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 15,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s55",
    "name": "Commonwealth Ave \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.34921,
    "lng": -71.093863,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s56",
    "name": "Commonwealth Ave \u00b7 GRIG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.348937,
    "lng": -71.133591,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s57",
    "name": "Evans Wy \u00b7 TETL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Evans Wy, Boston, MA",
    "lat": 42.338048,
    "lng": -71.098552,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s58",
    "name": "Northern Ave \u00b7 SLEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Northern Ave, Boston, MA",
    "lat": 42.352726,
    "lng": -71.045461,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 22,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s59",
    "name": "Parker St \u00b7 RUGG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Parker St, Boston, MA",
    "lat": 42.337773,
    "lng": -71.093053,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 22,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s60",
    "name": "Beacon St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.35061,
    "lng": -71.090553,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 14,
    "totalSpots": 21,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s61",
    "name": "Commonwealth Ave \u00b7 PLEA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351106,
    "lng": -71.116918,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 21,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s62",
    "name": "Commonwealth Ave \u00b7 OPP",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350387,
    "lng": -71.13041,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 21,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s63",
    "name": "D Street \u00b7 CLAF",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.344924,
    "lng": -71.043824,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 13,
    "totalSpots": 21,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s64",
    "name": "E Dedham St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "E Dedham St, Boston, MA",
    "lat": 42.338468,
    "lng": -71.068745,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 21,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s65",
    "name": "Harrison Ave \u00b7 TRAV",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.345453,
    "lng": -71.063379,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 11,
    "totalSpots": 21,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s66",
    "name": "Tremont St \u00b7 OAK",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.349516,
    "lng": -71.065271,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 21,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s67",
    "name": "Beacon St \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.356453,
    "lng": -71.068402,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 20,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s68",
    "name": "Commonwealth Ave \u00b7 FULL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351837,
    "lng": -71.124315,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 20,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s69",
    "name": "E Concord St \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "E Concord St, Boston, MA",
    "lat": 42.335914,
    "lng": -71.072448,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 20,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s70",
    "name": "St Botolph St \u00b7 W NE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St Botolph St, Boston, MA",
    "lat": 42.344279,
    "lng": -71.08163,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 13,
    "totalSpots": 20,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s71",
    "name": "Stuart St \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.349891,
    "lng": -71.071099,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 20,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s72",
    "name": "Stuart St \u00b7 BERK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.349759,
    "lng": -71.071158,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 20,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s73",
    "name": "Tremont St \u00b7 E BE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.346248,
    "lng": -71.069209,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 13,
    "totalSpots": 20,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s74",
    "name": "Washington St \u00b7 PERR",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.343292,
    "lng": -71.066426,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 20,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s75",
    "name": "Washington St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.349817,
    "lng": -71.063732,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 20,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s76",
    "name": "Beacon St \u00b7 DAVI",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.355075,
    "lng": -71.073994,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 11,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s77",
    "name": "Columbus Ave \u00b7 CHAN",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.346592,
    "lng": -71.074174,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s78",
    "name": "Commonwealth Ave \u00b7 HARV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350286,
    "lng": -71.130366,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s79",
    "name": "Commonwealth Ave \u00b7 MASS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349299,
    "lng": -71.090039,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s80",
    "name": "Commonwealth Ave \u00b7 KENM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.348762,
    "lng": -71.093897,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s81",
    "name": "Deerfield St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Deerfield St, Boston, MA",
    "lat": 42.349593,
    "lng": -71.097325,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 11,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s82",
    "name": "Devonshire St \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Devonshire St, Boston, MA",
    "lat": 42.356096,
    "lng": -71.057274,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 19,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s83",
    "name": "East Newton \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "East Newton, Boston, MA",
    "lat": 42.336825,
    "lng": -71.071053,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 19,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s84",
    "name": "Beacon St \u00b7 GLOU",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.351778,
    "lng": -71.08625,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s85",
    "name": "Beacon St \u00b7 PARK",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.347076,
    "lng": -71.104872,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s86",
    "name": "Berkeley St \u00b7 CHAN",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.347898,
    "lng": -71.071503,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s87",
    "name": "Commonwealth Ave \u00b7 AMOR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350582,
    "lng": -71.112497,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s88",
    "name": "D Street \u00b7 CLAFL",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.343984,
    "lng": -71.04488,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 18,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s89",
    "name": "Evans Wy \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Evans Wy, Boston, MA",
    "lat": 42.337832,
    "lng": -71.097758,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s90",
    "name": "Forsyth Wy \u00b7 FENW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Forsyth Wy, Boston, MA",
    "lat": 42.339824,
    "lng": -71.092866,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s91",
    "name": "Gardner St \u00b7 BABC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gardner St, Boston, MA",
    "lat": 42.353063,
    "lng": -71.122006,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s92",
    "name": "Harrison Ave \u00b7 E CO",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.33693,
    "lng": -71.072554,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s93",
    "name": "Huntington Ave \u00b7 CUMB",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.344738,
    "lng": -71.082216,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 18,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s94",
    "name": "Huntington Ave \u00b7 LONG",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.335295,
    "lng": -71.102183,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 12,
    "totalSpots": 18,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s95",
    "name": "St James Ave \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St James Ave, Boston, MA",
    "lat": 42.350758,
    "lng": -71.071695,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 18,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s96",
    "name": "Surface Rd \u00b7 ESSE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Surface Rd, Boston, MA",
    "lat": 42.351785,
    "lng": -71.059077,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 18,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s97",
    "name": "Tremont St \u00b7 BERK",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.344476,
    "lng": -71.070932,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 18,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s98",
    "name": "A Street \u00b7 MT W",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "A Street, Boston, MA",
    "lat": 42.345833,
    "lng": -71.052138,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 17,
    "hours": "10am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s99",
    "name": "Beacon St \u00b7 SPRU",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.356818,
    "lng": -71.066848,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s100",
    "name": "Bowdoin St \u00b7 ASHB",
    "type": "street",
    "neighborhood": "West End",
    "address": "Bowdoin St, Boston, MA",
    "lat": 42.360335,
    "lng": -71.062781,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 17,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s101",
    "name": "Commonwealth Ave \u00b7 BUI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351649,
    "lng": -71.117427,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s102",
    "name": "Commonwealth Ave \u00b7 GLOU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350175,
    "lng": -71.085472,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s103",
    "name": "Forsyth Wy \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Forsyth Wy, Boston, MA",
    "lat": 42.339908,
    "lng": -71.092775,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s104",
    "name": "Harrison Ave \u00b7 MASS",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.335983,
    "lng": -71.073737,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s105",
    "name": "Marginal Rd \u00b7 TREM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marginal Rd, Boston, MA",
    "lat": 42.347868,
    "lng": -71.06661,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s106",
    "name": "Summer St \u00b7 SUMM",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "Summer St, Boston, MA",
    "lat": 42.348732,
    "lng": -71.047198,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 17,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s107",
    "name": "Tremont St \u00b7 APPL",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.345972,
    "lng": -71.069541,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 17,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s108",
    "name": "Wareham St \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Wareham St, Boston, MA",
    "lat": 42.339442,
    "lng": -71.067588,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 17,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s109",
    "name": "Bay State Rd \u00b7 RALE",
    "type": "street",
    "neighborhood": "Fenway / Kenmore",
    "address": "Bay State Rd, Boston, MA",
    "lat": 42.349975,
    "lng": -71.094555,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s110",
    "name": "Beacon St \u00b7 RALE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.349661,
    "lng": -71.093587,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 3,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s111",
    "name": "Berkeley St \u00b7 CHAN",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.347691,
    "lng": -71.071211,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s112",
    "name": "Bowdoin St \u00b7 CAMB",
    "type": "street",
    "neighborhood": "West End",
    "address": "Bowdoin St, Boston, MA",
    "lat": 42.360536,
    "lng": -71.062945,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s113",
    "name": "Cambridge St \u00b7 SOME",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.360398,
    "lng": -71.060662,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 16,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s114",
    "name": "East Berkeley St \u00b7 HARR",
    "type": "street",
    "neighborhood": "South End",
    "address": "East Berkeley St, Boston, MA",
    "lat": 42.343681,
    "lng": -71.065238,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 16,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s115",
    "name": "Harrison Ave \u00b7 E BR",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.337979,
    "lng": -71.071474,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 11,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s116",
    "name": "Harvard Ave \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Harvard Ave, Boston, MA",
    "lat": 42.349666,
    "lng": -71.130375,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s117",
    "name": "Malden St \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Malden St, Boston, MA",
    "lat": 42.339767,
    "lng": -71.067145,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s118",
    "name": "Massachusetts Ave \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Massachusetts Ave, Boston, MA",
    "lat": 42.334299,
    "lng": -71.074117,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s119",
    "name": "Tremont St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.349498,
    "lng": -71.065416,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 16,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s120",
    "name": "Van Ness St \u00b7 YAWK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Van Ness St, Boston, MA",
    "lat": 42.345625,
    "lng": -71.097191,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 16,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s121",
    "name": "Beacon St \u00b7 BRIM",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.355984,
    "lng": -71.070444,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s122",
    "name": "Beacon St \u00b7 MOUN",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.347363,
    "lng": -71.102801,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s123",
    "name": "Blossom St \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blossom St, Boston, MA",
    "lat": 42.362878,
    "lng": -71.067091,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 15,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s124",
    "name": "Boylston St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.347142,
    "lng": -71.088538,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s125",
    "name": "Columbus Ave \u00b7 CLAR",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.346752,
    "lng": -71.074316,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 15,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s126",
    "name": "Commonwealth Ave \u00b7 AGGA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351841,
    "lng": -71.119212,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s127",
    "name": "Commonwealth Ave \u00b7 ALCO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.352246,
    "lng": -71.124306,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 10,
    "totalSpots": 15,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s128",
    "name": "Commonwealth Ave \u00b7 BABC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.352011,
    "lng": -71.122236,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s129",
    "name": "Commonwealth Ave \u00b7 GRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350022,
    "lng": -71.104997,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s130",
    "name": "Commonwealth Ave \u00b7 ST P",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350839,
    "lng": -71.114749,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s131",
    "name": "Congress St \u00b7 EAST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.349414,
    "lng": -71.046214,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s132",
    "name": "Congress St \u00b7 DORC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.350823,
    "lng": -71.049313,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s133",
    "name": "D Street \u00b7 BULL",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.344811,
    "lng": -71.043706,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s134",
    "name": "E Dedham St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "E Dedham St, Boston, MA",
    "lat": 42.338394,
    "lng": -71.068502,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s135",
    "name": "Harrison Ave \u00b7 E NE",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.337042,
    "lng": -71.072619,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s136",
    "name": "Marlborough St \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marlborough St, Boston, MA",
    "lat": 42.353695,
    "lng": -71.075475,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s137",
    "name": "Museum Rd \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Museum Rd, Boston, MA",
    "lat": 42.338657,
    "lng": -71.095785,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s138",
    "name": "Summer St \u00b7 D ST",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "Summer St, Boston, MA",
    "lat": 42.346779,
    "lng": -71.042879,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 15,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s139",
    "name": "Washington St \u00b7 E CO",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.338277,
    "lng": -71.074348,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 15,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s140",
    "name": "Beacon St \u00b7 CHES",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.335979,
    "lng": -71.149969,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s141",
    "name": "Charles St \u00b7 PINC",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.358245,
    "lng": -71.070461,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s142",
    "name": "Charles St \u00b7 MT V",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.358278,
    "lng": -71.070646,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s143",
    "name": "Commonwealth Ave \u00b7 REXF",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.348369,
    "lng": -71.134513,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s144",
    "name": "Commonwealth Ave \u00b7 HERE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349315,
    "lng": -71.087168,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s145",
    "name": "Commonwealth Ave \u00b7 BROO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.348714,
    "lng": -71.096237,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s146",
    "name": "Congress St \u00b7 BOST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.349212,
    "lng": -71.046342,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s147",
    "name": "First Avenue \u00b7 EIGH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "First Avenue, Boston, MA",
    "lat": 42.375822,
    "lng": -71.052881,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s148",
    "name": "Forsyth St \u00b7 HEME",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Forsyth St, Boston, MA",
    "lat": 42.340303,
    "lng": -71.090998,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s149",
    "name": "Huntington Ave \u00b7 BLAG",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.348743,
    "lng": -71.077899,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s150",
    "name": "Huntington Ave \u00b7 MASS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.342025,
    "lng": -71.086065,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s151",
    "name": "Huntington Ave \u00b7 FORS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.340889,
    "lng": -71.087232,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s152",
    "name": "Malvern St \u00b7 GARD",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Malvern St, Boston, MA",
    "lat": 42.35382,
    "lng": -71.124776,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s153",
    "name": "Marginal Rd \u00b7 WASH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marginal Rd, Boston, MA",
    "lat": 42.347457,
    "lng": -71.065074,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s154",
    "name": "Marginal Rd \u00b7 HARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marginal Rd, Boston, MA",
    "lat": 42.347249,
    "lng": -71.06366,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 14,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s155",
    "name": "Pearl St \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Pearl St, Boston, MA",
    "lat": 42.35562,
    "lng": -71.05454,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 14,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s156",
    "name": "Scotia St \u00b7 ST C",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Scotia St, Boston, MA",
    "lat": 42.346936,
    "lng": -71.085889,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s157",
    "name": "South St \u00b7 EAST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "South St, Boston, MA",
    "lat": 42.351052,
    "lng": -71.057268,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s158",
    "name": "Van Ness St \u00b7 KILM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Van Ness St, Boston, MA",
    "lat": 42.344952,
    "lng": -71.099776,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 9,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s159",
    "name": "Washington St \u00b7 W DE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.34005,
    "lng": -71.071942,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 14,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s160",
    "name": "Ashford St \u00b7 ALCO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ashford St, Boston, MA",
    "lat": 42.353867,
    "lng": -71.121649,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s161",
    "name": "Atlantic Ave \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.362895,
    "lng": -71.051122,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s162",
    "name": "Belvidere St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Belvidere St, Boston, MA",
    "lat": 42.346232,
    "lng": -71.085924,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s163",
    "name": "Blagden St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blagden St, Boston, MA",
    "lat": 42.348871,
    "lng": -71.078262,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s164",
    "name": "Cambridge St \u00b7 LYND",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361304,
    "lng": -71.065445,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s165",
    "name": "Charles St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.356588,
    "lng": -71.069714,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s166",
    "name": "Charles St \u00b7 REVE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.360169,
    "lng": -71.070905,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s167",
    "name": "Chestnut Hill Ave \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Chestnut Hill Ave, Boston, MA",
    "lat": 42.336569,
    "lng": -71.151455,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s168",
    "name": "Clarendon St \u00b7 COLU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.347772,
    "lng": -71.073709,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s169",
    "name": "Columbus Ave \u00b7 ARLI",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.349362,
    "lng": -71.071031,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s170",
    "name": "Harrison Ave \u00b7 NASS",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.349179,
    "lng": -71.062022,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s171",
    "name": "Harvard Ave \u00b7 BROO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Harvard Ave, Boston, MA",
    "lat": 42.34953,
    "lng": -71.130453,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s172",
    "name": "High St \u00b7 OLIV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "High St, Boston, MA",
    "lat": 42.356412,
    "lng": -71.052442,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s173",
    "name": "Huntington Ave \u00b7 GAIN",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.341818,
    "lng": -71.086016,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s174",
    "name": "N Washington \u00b7 CAUS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "N Washington, Boston, MA",
    "lat": 42.366105,
    "lng": -71.058522,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s175",
    "name": "Oliver St \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Oliver St, Boston, MA",
    "lat": 42.356982,
    "lng": -71.054342,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s176",
    "name": "Overland St \u00b7 END/",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Overland St, Boston, MA",
    "lat": 42.346329,
    "lng": -71.100309,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s177",
    "name": "St Botolph St \u00b7 GARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St Botolph St, Boston, MA",
    "lat": 42.345108,
    "lng": -71.08062,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 13,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s178",
    "name": "Stuart St \u00b7 DART",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.348511,
    "lng": -71.075912,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s179",
    "name": "Union St \u00b7 HANO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Union St, Boston, MA",
    "lat": 42.361166,
    "lng": -71.057124,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s180",
    "name": "Washington St \u00b7 NASS",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.350265,
    "lng": -71.063264,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s181",
    "name": "Washington St \u00b7 SAVO",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.342403,
    "lng": -71.067478,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 13,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s182",
    "name": "Belvidere St \u00b7 DALT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Belvidere St, Boston, MA",
    "lat": 42.346326,
    "lng": -71.085925,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s183",
    "name": "Brookline Ave \u00b7 PARK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.34453,
    "lng": -71.101289,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s184",
    "name": "Cambridge St \u00b7 COUR",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.360253,
    "lng": -71.060058,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s185",
    "name": "Cambridge St \u00b7 SUDB",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361301,
    "lng": -71.062132,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s186",
    "name": "Charles St South \u00b7 TREM",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St South, Boston, MA",
    "lat": 42.349307,
    "lng": -71.066442,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 12,
    "hours": "9am\u20135pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s187",
    "name": "Charles St \u00b7 CAMB",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.360128,
    "lng": -71.070718,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s188",
    "name": "Charles St \u00b7 CHES",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.357376,
    "lng": -71.070155,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s189",
    "name": "Clarendon St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.353796,
    "lng": -71.07685,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s190",
    "name": "Columbus Ave \u00b7 CHAN",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.347748,
    "lng": -71.073073,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s191",
    "name": "Commonwealth Ave \u00b7 LIND",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350725,
    "lng": -71.130564,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s192",
    "name": "D Street \u00b7 PRIV",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.343089,
    "lng": -71.045722,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s193",
    "name": "Dartmouth St \u00b7 COLU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.34659,
    "lng": -71.075523,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s194",
    "name": "Exeter St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Exeter St, Boston, MA",
    "lat": 42.351886,
    "lng": -71.080587,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s195",
    "name": "Exeter St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Exeter St, Boston, MA",
    "lat": 42.352646,
    "lng": -71.081137,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s196",
    "name": "Exeter St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Exeter St, Boston, MA",
    "lat": 42.351865,
    "lng": -71.080731,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s197",
    "name": "Fairfield St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Fairfield St, Boston, MA",
    "lat": 42.351236,
    "lng": -71.083021,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s198",
    "name": "Granby St \u00b7 BAY",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Granby St, Boston, MA",
    "lat": 42.350183,
    "lng": -71.103599,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 8,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s199",
    "name": "Harrison Ave \u00b7 HARV",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.350159,
    "lng": -71.061634,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s200",
    "name": "Hemenway St \u00b7 BURB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hemenway St, Boston, MA",
    "lat": 42.344365,
    "lng": -71.089729,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s201",
    "name": "Hereford St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hereford St, Boston, MA",
    "lat": 42.351124,
    "lng": -71.086741,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s202",
    "name": "Hereford St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hereford St, Boston, MA",
    "lat": 42.351086,
    "lng": -71.086878,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s203",
    "name": "India St \u00b7 SURF",
    "type": "street",
    "neighborhood": "Boston",
    "address": "India St, Boston, MA",
    "lat": 42.358296,
    "lng": -71.05273,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s204",
    "name": "N Anderson St \u00b7 PARK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "N Anderson St, Boston, MA",
    "lat": 42.361709,
    "lng": -71.067939,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s205",
    "name": "Pearl St \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Pearl St, Boston, MA",
    "lat": 42.356526,
    "lng": -71.055268,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s206",
    "name": "Shawmut Ave \u00b7 MARG",
    "type": "street",
    "neighborhood": "South End",
    "address": "Shawmut Ave, Boston, MA",
    "lat": 42.348142,
    "lng": -71.065572,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s207",
    "name": "South St \u00b7 KNEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "South St, Boston, MA",
    "lat": 42.350119,
    "lng": -71.057612,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s208",
    "name": "Stuart St \u00b7 TREM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.350917,
    "lng": -71.064137,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s209",
    "name": "Tremont St \u00b7 ST A",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.333257,
    "lng": -71.101975,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s210",
    "name": "Tremont St \u00b7 UNIO",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.343285,
    "lng": -71.073044,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s211",
    "name": "W Newton St \u00b7 ST B",
    "type": "street",
    "neighborhood": "Boston",
    "address": "W Newton St, Boston, MA",
    "lat": 42.344434,
    "lng": -71.080458,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s212",
    "name": "Washington St \u00b7 UNIO",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.341147,
    "lng": -71.070195,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 12,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s213",
    "name": "Yawkey Wy \u00b7 BOYL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Yawkey Wy, Boston, MA",
    "lat": 42.345014,
    "lng": -71.097974,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 12,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s214",
    "name": "Atlantic Ave \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.363047,
    "lng": -71.050968,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s215",
    "name": "Ave De Lafayette \u00b7 KING",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ave De Lafayette, Boston, MA",
    "lat": 42.352796,
    "lng": -71.060122,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s216",
    "name": "Batterymarch St \u00b7 MILK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.357361,
    "lng": -71.053882,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s217",
    "name": "Berkeley St \u00b7 STUA",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.349983,
    "lng": -71.072344,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s218",
    "name": "Berkeley St \u00b7 COMM",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.353606,
    "lng": -71.074287,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 11,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s219",
    "name": "Berkeley St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.352431,
    "lng": -71.073728,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s220",
    "name": "Boston Wharf Rd \u00b7 CONG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Boston Wharf Rd, Boston, MA",
    "lat": 42.350618,
    "lng": -71.046295,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s221",
    "name": "Charles St \u00b7 MT V",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.357398,
    "lng": -71.070018,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s222",
    "name": "Clarendon St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.353063,
    "lng": -71.076276,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s223",
    "name": "Clarendon St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.353019,
    "lng": -71.076427,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s224",
    "name": "Clarendon St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.351847,
    "lng": -71.075855,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s225",
    "name": "Columbus Ave \u00b7 BERK",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.348356,
    "lng": -71.072313,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s226",
    "name": "Commonwealth Ave \u00b7 ROYC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349932,
    "lng": -71.131228,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s227",
    "name": "Commonwealth Ave \u00b7 NAPL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351429,
    "lng": -71.122966,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s228",
    "name": "Commonwealth Ave \u00b7 WINS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351694,
    "lng": -71.121855,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s229",
    "name": "E Concord St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "E Concord St, Boston, MA",
    "lat": 42.336102,
    "lng": -71.072872,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s230",
    "name": "Exeter St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Exeter St, Boston, MA",
    "lat": 42.352669,
    "lng": -71.081005,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s231",
    "name": "Gardner St \u00b7 ALCO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gardner St, Boston, MA",
    "lat": 42.353349,
    "lng": -71.124469,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s232",
    "name": "Gardner St \u00b7 ALCO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gardner St, Boston, MA",
    "lat": 42.352929,
    "lng": -71.121702,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s233",
    "name": "Gloucester St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gloucester St, Boston, MA",
    "lat": 42.350742,
    "lng": -71.084837,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s234",
    "name": "Harrison Ave \u00b7 HUDS",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.347619,
    "lng": -71.06264,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s235",
    "name": "Hereford St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hereford St, Boston, MA",
    "lat": 42.349145,
    "lng": -71.085903,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s236",
    "name": "Malvern St \u00b7 BRIG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Malvern St, Boston, MA",
    "lat": 42.352768,
    "lng": -71.125004,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s237",
    "name": "Milk St \u00b7 INDI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.358599,
    "lng": -71.0528,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s238",
    "name": "Oliver St \u00b7 PURC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Oliver St, Boston, MA",
    "lat": 42.355747,
    "lng": -71.052712,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s239",
    "name": "Overland St \u00b7 BROO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Overland St, Boston, MA",
    "lat": 42.346396,
    "lng": -71.100222,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s240",
    "name": "Pearl St \u00b7 HIGH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Pearl St, Boston, MA",
    "lat": 42.354828,
    "lng": -71.053746,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 7,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s241",
    "name": "Plympton St \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Plympton St, Boston, MA",
    "lat": 42.338761,
    "lng": -71.068054,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 11,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s242",
    "name": "Tyler St \u00b7 KNEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Tyler St, Boston, MA",
    "lat": 42.350831,
    "lng": -71.060674,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 2,
    "totalSpots": 11,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s243",
    "name": "Albany St \u00b7 MALD",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.338832,
    "lng": -71.066125,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s244",
    "name": "Arch St \u00b7 SUMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arch St, Boston, MA",
    "lat": 42.355027,
    "lng": -71.058523,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s245",
    "name": "Berkeley St \u00b7 COMM",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.353647,
    "lng": -71.074156,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s246",
    "name": "Berkeley St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.352508,
    "lng": -71.07359,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s247",
    "name": "Berkeley St \u00b7 MARL",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.354377,
    "lng": -71.074666,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 10,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s248",
    "name": "Boylston St \u00b7 KILM",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.343854,
    "lng": -71.100642,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s249",
    "name": "Boylston St \u00b7 PARK",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.343767,
    "lng": -71.10057,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s250",
    "name": "Cambridge St \u00b7 BOWD",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.360985,
    "lng": -71.061886,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s251",
    "name": "Charles St \u00b7 PINC",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.359129,
    "lng": -71.070821,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s252",
    "name": "Columbus Ave \u00b7 ISAB",
    "type": "street",
    "neighborhood": "South End",
    "address": "Columbus Ave, Boston, MA",
    "lat": 42.349327,
    "lng": -71.070851,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s253",
    "name": "Commonwealth Ave \u00b7 BUIC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351342,
    "lng": -71.116444,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s254",
    "name": "Commonwealth Ave \u00b7 BU B",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350009,
    "lng": -71.107919,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s255",
    "name": "Commonwealth Ave \u00b7 CROW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351053,
    "lng": -71.119291,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s256",
    "name": "D Street \u00b7 ANCH",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.343853,
    "lng": -71.044824,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s257",
    "name": "Dartmouth St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.353234,
    "lng": -71.078961,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s258",
    "name": "Dartmouth St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.351274,
    "lng": -71.077997,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s259",
    "name": "Dartmouth St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.352441,
    "lng": -71.078572,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s260",
    "name": "Dartmouth St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.346992,
    "lng": -71.075942,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s261",
    "name": "Evans Wy \u00b7 FENW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Evans Wy, Boston, MA",
    "lat": 42.33798,
    "lng": -71.098761,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s262",
    "name": "Fairfield St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Fairfield St, Boston, MA",
    "lat": 42.35207,
    "lng": -71.083271,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s263",
    "name": "Federal St \u00b7 HIGH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Federal St, Boston, MA",
    "lat": 42.354052,
    "lng": -71.056337,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s264",
    "name": "First Avenue \u00b7 NINT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "First Avenue, Boston, MA",
    "lat": 42.375797,
    "lng": -71.053101,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s265",
    "name": "Gloucester St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gloucester St, Boston, MA",
    "lat": 42.35154,
    "lng": -71.085243,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s266",
    "name": "Gloucester St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gloucester St, Boston, MA",
    "lat": 42.350718,
    "lng": -71.084961,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s267",
    "name": "Gloucester St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gloucester St, Boston, MA",
    "lat": 42.351488,
    "lng": -71.085354,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s268",
    "name": "Granby St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Granby St, Boston, MA",
    "lat": 42.350203,
    "lng": -71.103454,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s269",
    "name": "Harrison Ave \u00b7 E CA",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.339016,
    "lng": -71.069951,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s270",
    "name": "Hereford St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hereford St, Boston, MA",
    "lat": 42.350319,
    "lng": -71.08636,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s271",
    "name": "Hereford St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hereford St, Boston, MA",
    "lat": 42.350291,
    "lng": -71.086494,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s272",
    "name": "High St \u00b7 SURF",
    "type": "street",
    "neighborhood": "Boston",
    "address": "High St, Boston, MA",
    "lat": 42.356583,
    "lng": -71.05235,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s273",
    "name": "High St \u00b7 PEAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "High St, Boston, MA",
    "lat": 42.355538,
    "lng": -71.053611,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s274",
    "name": "Hudson St \u00b7 KNEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hudson St, Boston, MA",
    "lat": 42.350767,
    "lng": -71.059982,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s275",
    "name": "Kingston St \u00b7 ESSE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Kingston St, Boston, MA",
    "lat": 42.352106,
    "lng": -71.059388,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s276",
    "name": "Lincoln St \u00b7 KNEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Lincoln St, Boston, MA",
    "lat": 42.350368,
    "lng": -71.05868,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s277",
    "name": "Lincoln St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Lincoln St, Boston, MA",
    "lat": 42.350429,
    "lng": -71.058826,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s278",
    "name": "Lincoln St \u00b7 ESSE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Lincoln St, Boston, MA",
    "lat": 42.351241,
    "lng": -71.058497,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s279",
    "name": "Museum Rd \u00b7 FENW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Museum Rd, Boston, MA",
    "lat": 42.338817,
    "lng": -71.096421,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s280",
    "name": "Oliver St \u00b7 HIGH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Oliver St, Boston, MA",
    "lat": 42.356347,
    "lng": -71.05351,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s281",
    "name": "Silber Wy \u00b7 BAY",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Silber Wy, Boston, MA",
    "lat": 42.349876,
    "lng": -71.10053,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s282",
    "name": "St James Ave \u00b7 BERK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St James Ave, Boston, MA",
    "lat": 42.350571,
    "lng": -71.071922,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s283",
    "name": "Stuart St \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.349138,
    "lng": -71.073411,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s284",
    "name": "Traveler St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Traveler St, Boston, MA",
    "lat": 42.344713,
    "lng": -71.064762,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s285",
    "name": "Van Ness St \u00b7 YAWK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Van Ness St, Boston, MA",
    "lat": 42.345018,
    "lng": -71.099787,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s286",
    "name": "Van Ness St \u00b7 RICH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Van Ness St, Boston, MA",
    "lat": 42.345223,
    "lng": -71.098719,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s287",
    "name": "Warrenton St \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Warrenton St, Boston, MA",
    "lat": 42.350361,
    "lng": -71.066064,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 10,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s288",
    "name": "Albany St \u00b7 FRON",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.33997,
    "lng": -71.064587,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s289",
    "name": "Alcorn St \u00b7 ASHF",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Alcorn St, Boston, MA",
    "lat": 42.353521,
    "lng": -71.122947,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s290",
    "name": "Arlington St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arlington St, Boston, MA",
    "lat": 42.354977,
    "lng": -71.072303,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s291",
    "name": "Babcock St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Babcock St, Boston, MA",
    "lat": 42.35349,
    "lng": -71.12085,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s292",
    "name": "Beach St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Beach St, Boston, MA",
    "lat": 42.35152,
    "lng": -71.062018,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s293",
    "name": "Berkeley St \u00b7 APPL",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.346566,
    "lng": -71.070673,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s294",
    "name": "Berkeley St \u00b7 MARL",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.354395,
    "lng": -71.074508,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s295",
    "name": "Berkeley St \u00b7 STUA",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.349959,
    "lng": -71.072522,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s296",
    "name": "Blagden St \u00b7 EXET",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blagden St, Boston, MA",
    "lat": 42.348957,
    "lng": -71.07832,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s297",
    "name": "Blossom St \u00b7 CAMB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blossom St, Boston, MA",
    "lat": 42.362322,
    "lng": -71.066804,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s298",
    "name": "Blossom St \u00b7 O",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blossom St, Boston, MA",
    "lat": 42.363771,
    "lng": -71.06698,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s299",
    "name": "Blossom St \u00b7 PARK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blossom St, Boston, MA",
    "lat": 42.361756,
    "lng": -71.067051,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s300",
    "name": "Brookline Ave \u00b7 DEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.33759,
    "lng": -71.108804,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s301",
    "name": "Charles St South \u00b7 STUA",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St South, Boston, MA",
    "lat": 42.350058,
    "lng": -71.066728,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "9am\u20135pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s302",
    "name": "Clarendon St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.351881,
    "lng": -71.075716,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s303",
    "name": "Commonwealth Ave \u00b7 LIND",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.35027,
    "lng": -71.129096,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s304",
    "name": "Commonwealth Ave \u00b7 ST M",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349783,
    "lng": -71.105992,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s305",
    "name": "Commonwealth Ave \u00b7 ST L",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350745,
    "lng": -71.127677,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s306",
    "name": "Cumberland St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Cumberland St, Boston, MA",
    "lat": 42.343991,
    "lng": -71.082607,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s307",
    "name": "D Street \u00b7 SUMM",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "D Street, Boston, MA",
    "lat": 42.345924,
    "lng": -71.042726,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s308",
    "name": "Dartmouth St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.35327,
    "lng": -71.078826,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s309",
    "name": "Devonshire St \u00b7 SUMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Devonshire St, Boston, MA",
    "lat": 42.354176,
    "lng": -71.05763,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s310",
    "name": "Edgerly Rd \u00b7 NORW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Edgerly Rd, Boston, MA",
    "lat": 42.344709,
    "lng": -71.087437,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s311",
    "name": "Fairfield St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Fairfield St, Boston, MA",
    "lat": 42.351337,
    "lng": -71.082909,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s312",
    "name": "First Avenue \u00b7 TERR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "First Avenue, Boston, MA",
    "lat": 42.375051,
    "lng": -71.054068,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s313",
    "name": "Gainsborough St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gainsborough St, Boston, MA",
    "lat": 42.341779,
    "lng": -71.086922,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s314",
    "name": "Gainsborough St \u00b7 ST S",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gainsborough St, Boston, MA",
    "lat": 42.341744,
    "lng": -71.087003,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s315",
    "name": "Harrison Ave \u00b7 ESSE",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.351803,
    "lng": -71.061149,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s316",
    "name": "Huntington Ave \u00b7 TREM",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.334437,
    "lng": -71.103741,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s317",
    "name": "Ipswich St \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ipswich St, Boston, MA",
    "lat": 42.347303,
    "lng": -71.08957,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s318",
    "name": "Milk St \u00b7 PEAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.357038,
    "lng": -71.055223,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s319",
    "name": "Ninth Street \u00b7 THIR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ninth Street, Boston, MA",
    "lat": 42.376438,
    "lng": -71.052714,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s320",
    "name": "Northern Ave \u00b7 FAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Northern Ave, Boston, MA",
    "lat": 42.353311,
    "lng": -71.04642,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s321",
    "name": "Palace Rd \u00b7 TETL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Palace Rd, Boston, MA",
    "lat": 42.338418,
    "lng": -71.09931,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s322",
    "name": "Seventh Street \u00b7 FIRS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Seventh Street, Boston, MA",
    "lat": 42.375563,
    "lng": -71.054284,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s323",
    "name": "Silber Wy \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Silber Wy, Boston, MA",
    "lat": 42.349804,
    "lng": -71.100406,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s324",
    "name": "Sixth Street \u00b7 FIRS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Sixth Street, Boston, MA",
    "lat": 42.375277,
    "lng": -71.055123,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s325",
    "name": "St Botolph St \u00b7 HARC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St Botolph St, Boston, MA",
    "lat": 42.346124,
    "lng": -71.079241,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s326",
    "name": "Stuart St \u00b7 BERK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.349478,
    "lng": -71.072641,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 6,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s327",
    "name": "Tremont St \u00b7 UPTO",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.343346,
    "lng": -71.07267,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s328",
    "name": "Tremont St \u00b7 W SP",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.339831,
    "lng": -71.079127,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s329",
    "name": "Tremont St \u00b7 DART",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.342665,
    "lng": -71.074199,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s330",
    "name": "Washington St \u00b7 E SP",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.337176,
    "lng": -71.075901,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s331",
    "name": "Washington St \u00b7 E BE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.341989,
    "lng": -71.068292,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 9,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s332",
    "name": "Atlantic Ave \u00b7 MILK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.358356,
    "lng": -71.051369,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "11am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s333",
    "name": "Atlantic Ave \u00b7 ROWE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.357576,
    "lng": -71.050999,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s334",
    "name": "Berkeley St \u00b7 COLU",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.349149,
    "lng": -71.071945,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s335",
    "name": "Blossom St \u00b7 BLOS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blossom St, Boston, MA",
    "lat": 42.364072,
    "lng": -71.067908,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s336",
    "name": "Boston Wharf Rd \u00b7 SEAP",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Boston Wharf Rd, Boston, MA",
    "lat": 42.351403,
    "lng": -71.045868,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s337",
    "name": "Boylston St \u00b7 HEME",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.347004,
    "lng": -71.088476,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s338",
    "name": "Brookline Ave \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.346499,
    "lng": -71.099346,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s339",
    "name": "Brookline Ave \u00b7 OVER",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.345799,
    "lng": -71.10013,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s340",
    "name": "Charles St South \u00b7 FAYE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St South, Boston, MA",
    "lat": 42.34909,
    "lng": -71.066549,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "9am\u20135pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s341",
    "name": "Charles St \u00b7 CHES",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.356539,
    "lng": -71.069562,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "30 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s342",
    "name": "Clarendon St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.348522,
    "lng": -71.074233,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s343",
    "name": "Commonwealth Ave \u00b7 THOR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350375,
    "lng": -71.128113,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s344",
    "name": "Congress St \u00b7 B ST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.349502,
    "lng": -71.044388,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s345",
    "name": "Congress St \u00b7 FARN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.351091,
    "lng": -71.049485,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s346",
    "name": "Dartmouth St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.352478,
    "lng": -71.078438,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s347",
    "name": "E Canton St \u00b7 ANDR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "E Canton St, Boston, MA",
    "lat": 42.338604,
    "lng": -71.069976,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s348",
    "name": "East Berkeley St \u00b7 WASH",
    "type": "street",
    "neighborhood": "South End",
    "address": "East Berkeley St, Boston, MA",
    "lat": 42.344079,
    "lng": -71.066576,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s349",
    "name": "East Service Rd \u00b7 SEAP",
    "type": "street",
    "neighborhood": "Boston",
    "address": "East Service Rd, Boston, MA",
    "lat": 42.349852,
    "lng": -71.044914,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s350",
    "name": "Franklin St \u00b7 OLIV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Franklin St, Boston, MA",
    "lat": 42.356766,
    "lng": -71.05351,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s351",
    "name": "Harcourt St \u00b7 END/",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Harcourt St, Boston, MA",
    "lat": 42.346148,
    "lng": -71.078567,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s352",
    "name": "Harrison Ave \u00b7 E BR",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.338538,
    "lng": -71.070577,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s353",
    "name": "Harrison Ave \u00b7 W NE",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.337855,
    "lng": -71.071418,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s354",
    "name": "Harrison Ave \u00b7 E CO",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.336255,
    "lng": -71.073598,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s355",
    "name": "Harry Agganis Wy \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Harry Agganis Wy, Boston, MA",
    "lat": 42.351914,
    "lng": -71.118511,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s356",
    "name": "Hemenway St \u00b7 WEST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hemenway St, Boston, MA",
    "lat": 42.344291,
    "lng": -71.089889,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s357",
    "name": "Joslin Pl \u00b7 BROO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Joslin Pl, Boston, MA",
    "lat": 42.3385,
    "lng": -71.108607,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s358",
    "name": "Kingston St \u00b7 SUMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Kingston St, Boston, MA",
    "lat": 42.353716,
    "lng": -71.059052,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 5,
    "totalSpots": 8,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s359",
    "name": "Marlborough St \u00b7 BERK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marlborough St, Boston, MA",
    "lat": 42.354101,
    "lng": -71.073935,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s360",
    "name": "Massachusetts Ave \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Massachusetts Ave, Boston, MA",
    "lat": 42.350428,
    "lng": -71.089361,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s361",
    "name": "Milk St \u00b7 BROA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.3582,
    "lng": -71.053726,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s362",
    "name": "Milk St \u00b7 BROA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.358221,
    "lng": -71.053565,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s363",
    "name": "N Washington \u00b7 THAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "N Washington, Boston, MA",
    "lat": 42.365572,
    "lng": -71.058315,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s364",
    "name": "Nashua St \u00b7 MART",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Nashua St, Boston, MA",
    "lat": 42.366939,
    "lng": -71.064594,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s365",
    "name": "Nashua St \u00b7 SCIE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Nashua St, Boston, MA",
    "lat": 42.366773,
    "lng": -71.064697,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s366",
    "name": "Seaport Blvd \u00b7 SLEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Seaport Blvd, Boston, MA",
    "lat": 42.352787,
    "lng": -71.047946,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s367",
    "name": "Shawmut Ave \u00b7 TREM",
    "type": "street",
    "neighborhood": "South End",
    "address": "Shawmut Ave, Boston, MA",
    "lat": 42.348206,
    "lng": -71.065695,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s368",
    "name": "South St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "South St, Boston, MA",
    "lat": 42.350092,
    "lng": -71.057484,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s369",
    "name": "St Cecilia St \u00b7 BELV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St Cecilia St, Boston, MA",
    "lat": 42.346741,
    "lng": -71.086658,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s370",
    "name": "Stuart St \u00b7 WASH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.351118,
    "lng": -71.06413,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s371",
    "name": "Traveler St \u00b7 ALBA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Traveler St, Boston, MA",
    "lat": 42.344392,
    "lng": -71.063399,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s372",
    "name": "Tremont St \u00b7 W BR",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.342125,
    "lng": -71.074939,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s373",
    "name": "Tremont St \u00b7 SOME",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.358706,
    "lng": -71.060095,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s374",
    "name": "Tremont St \u00b7 WORC",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.33999,
    "lng": -71.079322,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s375",
    "name": "W Newton St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "W Newton St, Boston, MA",
    "lat": 42.344977,
    "lng": -71.081247,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s376",
    "name": "Washington St \u00b7 E BE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.344577,
    "lng": -71.065525,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s377",
    "name": "Washington St \u00b7 W CO",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.337756,
    "lng": -71.075341,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s378",
    "name": "Water St \u00b7 BROA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Water St, Boston, MA",
    "lat": 42.358199,
    "lng": -71.054703,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 8,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s379",
    "name": "Yawkey Wy \u00b7 VAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Yawkey Wy, Boston, MA",
    "lat": 42.34505,
    "lng": -71.098147,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 8,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s380",
    "name": "Albany St \u00b7 E BR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.336974,
    "lng": -71.06873,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s381",
    "name": "Beacon St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.336173,
    "lng": -71.150668,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s382",
    "name": "Beacon St \u00b7 MINE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.34713,
    "lng": -71.102923,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s383",
    "name": "Beacon St \u00b7 MUNS",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.347344,
    "lng": -71.102135,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s384",
    "name": "Boylston St \u00b7 RICH",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.344203,
    "lng": -71.099411,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s385",
    "name": "Boylston St \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.350731,
    "lng": -71.07456,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "720 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s386",
    "name": "Boylston St \u00b7 KILMA",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.344364,
    "lng": -71.098351,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s387",
    "name": "Brookline Ave \u00b7 FENW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.336674,
    "lng": -71.109459,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 7,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s388",
    "name": "Charles St \u00b7 REVE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.359141,
    "lng": -71.070678,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s389",
    "name": "Commonwealth Ave \u00b7 BU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.350966,
    "lng": -71.11193,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s390",
    "name": "Cumberland St \u00b7 ST B",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Cumberland St, Boston, MA",
    "lat": 42.344028,
    "lng": -71.082505,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s391",
    "name": "East Berkeley St \u00b7 HARR",
    "type": "street",
    "neighborhood": "South End",
    "address": "East Berkeley St, Boston, MA",
    "lat": 42.343766,
    "lng": -71.065142,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s392",
    "name": "Fairfield St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Fairfield St, Boston, MA",
    "lat": 42.352037,
    "lng": -71.083405,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s393",
    "name": "Forsyth St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Forsyth St, Boston, MA",
    "lat": 42.340168,
    "lng": -71.090755,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s394",
    "name": "Franklin St \u00b7 BROA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Franklin St, Boston, MA",
    "lat": 42.35719,
    "lng": -71.052979,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s395",
    "name": "Gainsborough St \u00b7 DEAD",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gainsborough St, Boston, MA",
    "lat": 42.340729,
    "lng": -71.085315,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s396",
    "name": "Hemenway St \u00b7 FORS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hemenway St, Boston, MA",
    "lat": 42.34117,
    "lng": -71.090947,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s397",
    "name": "High St \u00b7 OLIV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "High St, Boston, MA",
    "lat": 42.355803,
    "lng": -71.053505,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "11am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s398",
    "name": "Huntington Ave \u00b7 FENW",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.333562,
    "lng": -71.106172,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s399",
    "name": "Medford St \u00b7 N WA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Medford St, Boston, MA",
    "lat": 42.365717,
    "lng": -71.058773,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s400",
    "name": "Milk St \u00b7 INDI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.358505,
    "lng": -71.052802,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s401",
    "name": "New Chardon St \u00b7 HAWK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "New Chardon St, Boston, MA",
    "lat": 42.362553,
    "lng": -71.061228,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s402",
    "name": "Northern Ave \u00b7 PIER",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Northern Ave, Boston, MA",
    "lat": 42.352102,
    "lng": -71.0437,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s403",
    "name": "Park Plaza \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Park Plaza, Boston, MA",
    "lat": 42.351688,
    "lng": -71.068661,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s404",
    "name": "Seaport Blvd \u00b7 BOST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Seaport Blvd, Boston, MA",
    "lat": 42.351501,
    "lng": -71.04521,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s405",
    "name": "Seaport Blvd \u00b7 THOM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Seaport Blvd, Boston, MA",
    "lat": 42.351828,
    "lng": -71.045936,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s406",
    "name": "Seventh Street \u00b7 FIRS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Seventh Street, Boston, MA",
    "lat": 42.375656,
    "lng": -71.054278,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s407",
    "name": "Stanhope St \u00b7 CAHN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stanhope St, Boston, MA",
    "lat": 42.348276,
    "lng": -71.073644,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s408",
    "name": "Tremont St \u00b7 MARG",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.348515,
    "lng": -71.066976,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 7,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s409",
    "name": "Washington St \u00b7 W SP",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.336819,
    "lng": -71.076639,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 7,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s410",
    "name": "A Street \u00b7 NECC",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "A Street, Boston, MA",
    "lat": 42.348498,
    "lng": -71.049993,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "10am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s411",
    "name": "Albany St \u00b7 PLYM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.337899,
    "lng": -71.067409,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s412",
    "name": "Albany St \u00b7 UNIO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.339408,
    "lng": -71.065316,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s413",
    "name": "Atlantic Ave \u00b7 KNEE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.349799,
    "lng": -71.056826,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s414",
    "name": "Ave De Lafayette \u00b7 KING",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ave De Lafayette, Boston, MA",
    "lat": 42.352779,
    "lng": -71.059826,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s415",
    "name": "Ave De Lafayette \u00b7 CHAU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ave De Lafayette, Boston, MA",
    "lat": 42.353276,
    "lng": -71.061077,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s416",
    "name": "Batterymarch St \u00b7 BATT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.357576,
    "lng": -71.054046,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s417",
    "name": "Batterymarch St \u00b7 WATE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.357798,
    "lng": -71.054902,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s418",
    "name": "Beacon St \u00b7 WALN",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.357137,
    "lng": -71.065453,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s419",
    "name": "Belvidere St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Belvidere St, Boston, MA",
    "lat": 42.345829,
    "lng": -71.08317,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s420",
    "name": "Church St \u00b7 COLU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Church St, Boston, MA",
    "lat": 42.350804,
    "lng": -71.068688,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s421",
    "name": "Clarendon St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.354034,
    "lng": -71.076785,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s422",
    "name": "Commonwealth Ave \u00b7 RALE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349038,
    "lng": -71.096625,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s423",
    "name": "Commonwealth Ave \u00b7 BLAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.349066,
    "lng": -71.099925,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s424",
    "name": "Dartmouth St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.351309,
    "lng": -71.07786,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s425",
    "name": "East Service Rd \u00b7 CONG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "East Service Rd, Boston, MA",
    "lat": 42.349908,
    "lng": -71.044734,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s426",
    "name": "Exeter St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Exeter St, Boston, MA",
    "lat": 42.34853,
    "lng": -71.079108,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s427",
    "name": "Fairfield St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Fairfield St, Boston, MA",
    "lat": 42.349897,
    "lng": -71.082214,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s428",
    "name": "Franklin St \u00b7 OLIV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Franklin St, Boston, MA",
    "lat": 42.356504,
    "lng": -71.054214,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s429",
    "name": "Harrison Ave \u00b7 E BE",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.34386,
    "lng": -71.064002,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s430",
    "name": "Harrison Ave \u00b7 OAK",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.348394,
    "lng": -71.062341,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s431",
    "name": "Harrison Ave \u00b7 NASS",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.34843,
    "lng": -71.062466,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s432",
    "name": "Harrison Ave \u00b7 NORT",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.334639,
    "lng": -71.075413,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s433",
    "name": "Harrison Ave \u00b7 TRAV",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.344145,
    "lng": -71.064231,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 4,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s434",
    "name": "Harrison Ave \u00b7 WORC",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.33586,
    "lng": -71.074097,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20134pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s435",
    "name": "Harvard Ave \u00b7 BRAI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Harvard Ave, Boston, MA",
    "lat": 42.348968,
    "lng": -71.129919,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s436",
    "name": "India St \u00b7 CUST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "India St, Boston, MA",
    "lat": 42.358113,
    "lng": -71.052576,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s437",
    "name": "India St \u00b7 STAT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "India St, Boston, MA",
    "lat": 42.359024,
    "lng": -71.054035,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s438",
    "name": "Kneeland St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350758,
    "lng": -71.061837,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s439",
    "name": "Kneeland St \u00b7 TYLE",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350295,
    "lng": -71.060453,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s440",
    "name": "Marlborough St \u00b7 HERE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Marlborough St, Boston, MA",
    "lat": 42.351042,
    "lng": -71.08562,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s441",
    "name": "Milk St \u00b7 KILB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.357087,
    "lng": -71.055423,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s442",
    "name": "Nassau St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Nassau St, Boston, MA",
    "lat": 42.34878,
    "lng": -71.062625,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s443",
    "name": "Opera Pl \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Opera Pl, Boston, MA",
    "lat": 42.34077,
    "lng": -71.089112,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s444",
    "name": "Park St \u00b7 TREM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Park St, Boston, MA",
    "lat": 42.357229,
    "lng": -71.06265,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s445",
    "name": "Park St \u00b7 TREM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Park St, Boston, MA",
    "lat": 42.357348,
    "lng": -71.06299,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s446",
    "name": "Pearl St \u00b7 HIGH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Pearl St, Boston, MA",
    "lat": 42.355759,
    "lng": -71.054449,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s447",
    "name": "Pearl St \u00b7 SURF",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Pearl St, Boston, MA",
    "lat": 42.354898,
    "lng": -71.053613,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "720 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s448",
    "name": "Raleigh St \u00b7 BACK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Raleigh St, Boston, MA",
    "lat": 42.35018,
    "lng": -71.095222,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s449",
    "name": "Raleigh St \u00b7 BAY",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Raleigh St, Boston, MA",
    "lat": 42.350198,
    "lng": -71.095352,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s450",
    "name": "Silber Wy \u00b7 BAY",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Silber Wy, Boston, MA",
    "lat": 42.350505,
    "lng": -71.100263,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s451",
    "name": "Silber Wy \u00b7 BACK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Silber Wy, Boston, MA",
    "lat": 42.350532,
    "lng": -71.100373,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s452",
    "name": "St Botolph St \u00b7 CUMB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St Botolph St, Boston, MA",
    "lat": 42.343606,
    "lng": -71.082442,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s453",
    "name": "Tremont St \u00b7 W DE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.342938,
    "lng": -71.073416,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s454",
    "name": "Tremont St \u00b7 W NE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.34146,
    "lng": -71.076169,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s455",
    "name": "Tremont St \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.347172,
    "lng": -71.068872,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s456",
    "name": "Washington St \u00b7 MYST",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.340206,
    "lng": -71.07149,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s457",
    "name": "Washington St \u00b7 NEWC",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.334792,
    "lng": -71.079021,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s458",
    "name": "Washington St \u00b7 RUTL",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.338192,
    "lng": -71.074692,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 6,
    "hours": "11am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s459",
    "name": "Water St \u00b7 BATT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Water St, Boston, MA",
    "lat": 42.358149,
    "lng": -71.05457,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 6,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s460",
    "name": "Albany St \u00b7 STOU",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.335274,
    "lng": -71.071119,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s461",
    "name": "Albany St \u00b7 WARE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.338272,
    "lng": -71.066892,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s462",
    "name": "Arch St \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arch St, Boston, MA",
    "lat": 42.355261,
    "lng": -71.058126,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s463",
    "name": "Arlington St \u00b7 MARL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arlington St, Boston, MA",
    "lat": 42.354439,
    "lng": -71.072044,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s464",
    "name": "Batterymarch Short Arm \u00b7 BROA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch Short Arm, Boston, MA",
    "lat": 42.357592,
    "lng": -71.053639,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s465",
    "name": "Batterymarch St \u00b7 HIGH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.356612,
    "lng": -71.052923,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s466",
    "name": "Batterymarch St \u00b7 WATE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.357888,
    "lng": -71.054853,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s467",
    "name": "Batterymarch St \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.35666,
    "lng": -71.053124,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s468",
    "name": "Beach St \u00b7 SURF",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Beach St, Boston, MA",
    "lat": 42.350969,
    "lng": -71.058957,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s469",
    "name": "Beacon St \u00b7 BEAV",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.355677,
    "lng": -71.071762,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s470",
    "name": "Berkeley St \u00b7 ST J",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.351021,
    "lng": -71.072875,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s471",
    "name": "Brookline Ave \u00b7 DAVI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.347102,
    "lng": -71.098729,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s472",
    "name": "Cambria St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Cambria St, Boston, MA",
    "lat": 42.347286,
    "lng": -71.086927,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s473",
    "name": "Charles St South \u00b7 BOYL",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St South, Boston, MA",
    "lat": 42.352029,
    "lng": -71.067412,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s474",
    "name": "Clarendon St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.34871,
    "lng": -71.074138,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s475",
    "name": "Commonwealth Ave \u00b7 BABC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Commonwealth Ave, Boston, MA",
    "lat": 42.351295,
    "lng": -71.120863,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s476",
    "name": "Congress St \u00b7 THOM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.350513,
    "lng": -71.048577,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s477",
    "name": "Congress St \u00b7 A ST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Congress St, Boston, MA",
    "lat": 42.349671,
    "lng": -71.047574,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s478",
    "name": "Deerfield St \u00b7 BACK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Deerfield St, Boston, MA",
    "lat": 42.350304,
    "lng": -71.097672,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s479",
    "name": "Edgerly Rd \u00b7 WEST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Edgerly Rd, Boston, MA",
    "lat": 42.344058,
    "lng": -71.087111,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s480",
    "name": "Forsyth St \u00b7 SPEA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Forsyth St, Boston, MA",
    "lat": 42.340681,
    "lng": -71.091036,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s481",
    "name": "Garrison St \u00b7 ST B",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Garrison St, Boston, MA",
    "lat": 42.346064,
    "lng": -71.079745,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s482",
    "name": "Garrison St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Garrison St, Boston, MA",
    "lat": 42.346005,
    "lng": -71.079798,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s483",
    "name": "Gloucester St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gloucester St, Boston, MA",
    "lat": 42.349364,
    "lng": -71.084163,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s484",
    "name": "Harrison Ave \u00b7 JOHN",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.348064,
    "lng": -71.062673,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s485",
    "name": "Hemenway St \u00b7 FENC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Hemenway St, Boston, MA",
    "lat": 42.339655,
    "lng": -71.092078,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s486",
    "name": "High St \u00b7 BATT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "High St, Boston, MA",
    "lat": 42.356301,
    "lng": -71.053074,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "11am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s487",
    "name": "Huntington Ave \u00b7 FRAN",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.333961,
    "lng": -71.105425,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s488",
    "name": "Kneeland St \u00b7 HARR",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350492,
    "lng": -71.061209,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s489",
    "name": "Melcher St \u00b7 A ST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Melcher St, Boston, MA",
    "lat": 42.349336,
    "lng": -71.049775,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s490",
    "name": "Merrimac St \u00b7 LANC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Merrimac St, Boston, MA",
    "lat": 42.363827,
    "lng": -71.062492,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s491",
    "name": "Milk St \u00b7 BATT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.357805,
    "lng": -71.054157,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s492",
    "name": "Milk St \u00b7 KILBY ST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.357535,
    "lng": -71.054717,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s493",
    "name": "N Washington \u00b7 COOP",
    "type": "street",
    "neighborhood": "Boston",
    "address": "N Washington, Boston, MA",
    "lat": 42.364608,
    "lng": -71.058204,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s494",
    "name": "Northern Ave \u00b7 HARB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Northern Ave, Boston, MA",
    "lat": 42.352655,
    "lng": -71.045046,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s495",
    "name": "Northern Ave \u00b7 MARI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Northern Ave, Boston, MA",
    "lat": 42.352981,
    "lng": -71.045717,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20135pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s496",
    "name": "Park Plaza \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Park Plaza, Boston, MA",
    "lat": 42.351684,
    "lng": -71.068033,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s497",
    "name": "Raleigh St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Raleigh St, Boston, MA",
    "lat": 42.349656,
    "lng": -71.095168,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 5,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s498",
    "name": "Scotia St \u00b7 ST C",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Scotia St, Boston, MA",
    "lat": 42.346895,
    "lng": -71.086275,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s499",
    "name": "Stuart St \u00b7 CHUR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.350348,
    "lng": -71.068977,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s500",
    "name": "Surface Rd \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Surface Rd, Boston, MA",
    "lat": 42.350572,
    "lng": -71.059659,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s501",
    "name": "Tremont St \u00b7 AQUA",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.342529,
    "lng": -71.074177,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s502",
    "name": "Tremont St \u00b7 W CA",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.342261,
    "lng": -71.074959,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s503",
    "name": "Trinity Pl \u00b7 GARA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Trinity Pl, Boston, MA",
    "lat": 42.348452,
    "lng": -71.07524,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s504",
    "name": "Union St \u00b7 MARS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Union St, Boston, MA",
    "lat": 42.361521,
    "lng": -71.057128,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s505",
    "name": "Washington St \u00b7 E BR",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.339782,
    "lng": -71.072136,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s506",
    "name": "Washington St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.336708,
    "lng": -71.076545,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s507",
    "name": "Washington St \u00b7 ROLL",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.341951,
    "lng": -71.068086,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s508",
    "name": "Washington St \u00b7 WALT",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.341715,
    "lng": -71.068494,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s509",
    "name": "Washington St \u00b7 WORC",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.337662,
    "lng": -71.075196,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s510",
    "name": "Washington St \u00b7 W NE",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.338581,
    "lng": -71.074152,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 3,
    "totalSpots": 5,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s511",
    "name": "A Street \u00b7 MELC",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "A Street, Boston, MA",
    "lat": 42.348936,
    "lng": -71.049654,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u201312am MON\u2013FRI",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s512",
    "name": "Albany St \u00b7 E NE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Albany St, Boston, MA",
    "lat": 42.336391,
    "lng": -71.069654,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s513",
    "name": "Arlington St \u00b7 ISAB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arlington St, Boston, MA",
    "lat": 42.348566,
    "lng": -71.069448,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s514",
    "name": "Arlington St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arlington St, Boston, MA",
    "lat": 42.352463,
    "lng": -71.071033,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s515",
    "name": "Atlantic Ave \u00b7 EAST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.351521,
    "lng": -71.056109,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s516",
    "name": "Ave De Lafayette \u00b7 CHAUN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Ave De Lafayette, Boston, MA",
    "lat": 42.353021,
    "lng": -71.060321,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s517",
    "name": "Beach St \u00b7 LINC",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Beach St, Boston, MA",
    "lat": 42.351031,
    "lng": -71.058847,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s518",
    "name": "Beach St \u00b7 UTIC",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Beach St, Boston, MA",
    "lat": 42.350804,
    "lng": -71.058303,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s519",
    "name": "Beacon St \u00b7 SUTH",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.336274,
    "lng": -71.150802,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s520",
    "name": "Beacon St \u00b7 RALE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.349365,
    "lng": -71.095148,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s521",
    "name": "Beacon St \u00b7 HERE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.351081,
    "lng": -71.088317,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s522",
    "name": "Bedford St \u00b7 KING",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Bedford St, Boston, MA",
    "lat": 42.353366,
    "lng": -71.059592,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s523",
    "name": "Belvidere St \u00b7 ST C",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Belvidere St, Boston, MA",
    "lat": 42.346488,
    "lng": -71.087087,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s524",
    "name": "Berkeley St \u00b7 APPL",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.346435,
    "lng": -71.070773,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s525",
    "name": "Berkeley St \u00b7 STAN",
    "type": "street",
    "neighborhood": "South End",
    "address": "Berkeley St, Boston, MA",
    "lat": 42.348815,
    "lng": -71.071955,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s526",
    "name": "Blossom St \u00b7 EMER",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Blossom St, Boston, MA",
    "lat": 42.364358,
    "lng": -71.069461,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s527",
    "name": "Boylston St A-C St So \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St A-C St So, Boston, MA",
    "lat": 42.352378,
    "lng": -71.069103,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s528",
    "name": "Boylston St \u00b7 FAIR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.349226,
    "lng": -71.080819,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "720 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s529",
    "name": "Boylston St \u00b7 GLOU",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.348857,
    "lng": -71.08215,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "720 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s530",
    "name": "Boylston St \u00b7 YAWK",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.344527,
    "lng": -71.098189,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s531",
    "name": "Boylston St \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.352059,
    "lng": -71.069556,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s532",
    "name": "Boylston St \u00b7 HADD",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St, Boston, MA",
    "lat": 42.352317,
    "lng": -71.068229,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s533",
    "name": "Cambridge St \u00b7 N AN",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361257,
    "lng": -71.068282,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s534",
    "name": "Cambridge St \u00b7 N GR",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361248,
    "lng": -71.068995,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s535",
    "name": "Cambridge St \u00b7 GROVE",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361009,
    "lng": -71.069234,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s536",
    "name": "Cross St \u00b7 FULT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Cross St, Boston, MA",
    "lat": 42.361871,
    "lng": -71.054393,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s537",
    "name": "Deerfield St \u00b7 BAY",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Deerfield St, Boston, MA",
    "lat": 42.350336,
    "lng": -71.097835,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s538",
    "name": "Dorchester Ave \u00b7 CONG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dorchester Ave, Boston, MA",
    "lat": 42.351786,
    "lng": -71.052582,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s539",
    "name": "Edgerly Rd \u00b7 WEST",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Edgerly Rd, Boston, MA",
    "lat": 42.343682,
    "lng": -71.086779,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s540",
    "name": "Franklin St \u00b7 BATT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Franklin St, Boston, MA",
    "lat": 42.356818,
    "lng": -71.053629,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s541",
    "name": "Franklin St \u00b7 PEAR",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Franklin St, Boston, MA",
    "lat": 42.356128,
    "lng": -71.054632,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s542",
    "name": "Gloucester St \u00b7 NEWB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Gloucester St, Boston, MA",
    "lat": 42.349284,
    "lng": -71.08426,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s543",
    "name": "Granby St \u00b7 BAY",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Granby St, Boston, MA",
    "lat": 42.350772,
    "lng": -71.103335,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s544",
    "name": "Granby St \u00b7 BACK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Granby St, Boston, MA",
    "lat": 42.350774,
    "lng": -71.103481,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s545",
    "name": "Harrison Ave \u00b7 KNEE",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.348903,
    "lng": -71.06228,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s546",
    "name": "High St \u00b7 CONG",
    "type": "street",
    "neighborhood": "Boston",
    "address": "High St, Boston, MA",
    "lat": 42.354809,
    "lng": -71.054554,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20134pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s547",
    "name": "Huntington Ave \u00b7 MASS",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.344083,
    "lng": -71.083103,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s548",
    "name": "Huntington Ave \u00b7 SMIT",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.335088,
    "lng": -71.101951,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s549",
    "name": "Huntington Ave \u00b7 WAIT",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.333725,
    "lng": -71.105565,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s550",
    "name": "India St \u00b7 CENT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "India St, Boston, MA",
    "lat": 42.358638,
    "lng": -71.053671,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s551",
    "name": "India St \u00b7 MILK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "India St, Boston, MA",
    "lat": 42.358317,
    "lng": -71.053072,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s552",
    "name": "Kilby St \u00b7 MILK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Kilby St, Boston, MA",
    "lat": 42.357496,
    "lng": -71.055037,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s553",
    "name": "Kilby St \u00b7 WATE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Kilby St, Boston, MA",
    "lat": 42.357402,
    "lng": -71.055256,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s554",
    "name": "Kingston St \u00b7 ESSE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Kingston St, Boston, MA",
    "lat": 42.352234,
    "lng": -71.059285,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s555",
    "name": "Kneeland St \u00b7 KNAP",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350929,
    "lng": -71.062348,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s556",
    "name": "Kneeland St \u00b7 TYLE",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350604,
    "lng": -71.061147,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s557",
    "name": "Lancaster St \u00b7 CAUS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Lancaster St, Boston, MA",
    "lat": 42.364182,
    "lng": -71.062435,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s558",
    "name": "Merrimac St \u00b7 VALE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Merrimac St, Boston, MA",
    "lat": 42.363605,
    "lng": -71.061644,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s559",
    "name": "Merrimac St \u00b7 STAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Merrimac St, Boston, MA",
    "lat": 42.363743,
    "lng": -71.063051,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s560",
    "name": "Milk St \u00b7 OLIV",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Milk St, Boston, MA",
    "lat": 42.357438,
    "lng": -71.054676,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s561",
    "name": "Nassau St \u00b7 WASH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Nassau St, Boston, MA",
    "lat": 42.348798,
    "lng": -71.063057,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s562",
    "name": "New Chardon St \u00b7 BULF",
    "type": "street",
    "neighborhood": "Boston",
    "address": "New Chardon St, Boston, MA",
    "lat": 42.362289,
    "lng": -71.061838,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s563",
    "name": "New Chardon St \u00b7 CAMB",
    "type": "street",
    "neighborhood": "Boston",
    "address": "New Chardon St, Boston, MA",
    "lat": 42.361994,
    "lng": -71.06229,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s564",
    "name": "Newbury St \u00b7 DART",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St, Boston, MA",
    "lat": 42.350882,
    "lng": -71.077965,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "720 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s565",
    "name": "Park St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Park St, Boston, MA",
    "lat": 42.35687,
    "lng": -71.062282,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s566",
    "name": "Sixth Street \u00b7 FIRS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Sixth Street, Boston, MA",
    "lat": 42.374992,
    "lng": -71.054853,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s567",
    "name": "South St \u00b7 BEAC",
    "type": "street",
    "neighborhood": "Boston",
    "address": "South St, Boston, MA",
    "lat": 42.35108,
    "lng": -71.057424,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s568",
    "name": "South St \u00b7 TUFT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "South St, Boston, MA",
    "lat": 42.351715,
    "lng": -71.057301,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s569",
    "name": "Stuart St \u00b7 TREM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Stuart St, Boston, MA",
    "lat": 42.351207,
    "lng": -71.065871,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s570",
    "name": "Summer St \u00b7 MELC",
    "type": "street",
    "neighborhood": "Seaport / South Boston",
    "address": "Summer St, Boston, MA",
    "lat": 42.349086,
    "lng": -71.048011,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "240 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s571",
    "name": "Tremont St \u00b7 HANS",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.344378,
    "lng": -71.070722,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s572",
    "name": "Tremont St \u00b7 MILF",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.344677,
    "lng": -71.070324,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s573",
    "name": "Tremont St \u00b7 WALT",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.34407,
    "lng": -71.071247,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s574",
    "name": "Tremont St \u00b7 CHUR",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.348244,
    "lng": -71.067714,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s575",
    "name": "Tremont St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.339464,
    "lng": -71.079839,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s576",
    "name": "Tremont St \u00b7 PEMB",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.341539,
    "lng": -71.076279,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s577",
    "name": "Tremont St \u00b7 W SP",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.339569,
    "lng": -71.080076,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 2,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s578",
    "name": "Washington St \u00b7 OAK/",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.348718,
    "lng": -71.063915,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s579",
    "name": "Washington St \u00b7 WALT",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.3416,
    "lng": -71.069117,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 4,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s580",
    "name": "Arlington St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Arlington St, Boston, MA",
    "lat": 42.349895,
    "lng": -71.069726,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s581",
    "name": "Atlantic Ave \u00b7 ESSE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Atlantic Ave, Boston, MA",
    "lat": 42.352209,
    "lng": -71.055792,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s582",
    "name": "Batterymarch St \u00b7 WEND",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Batterymarch St, Boston, MA",
    "lat": 42.357191,
    "lng": -71.053421,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "720 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s583",
    "name": "Beacon St \u00b7 RIVE",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Beacon St, Boston, MA",
    "lat": 42.356195,
    "lng": -71.069701,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s584",
    "name": "Beverly St C-V \u00b7 CAUS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Beverly St C-V, Boston, MA",
    "lat": 42.365341,
    "lng": -71.059591,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s585",
    "name": "Boylston St C-B \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St C-B, Boston, MA",
    "lat": 42.351047,
    "lng": -71.074029,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s586",
    "name": "Boylston St C-B \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Boylston St C-B, Boston, MA",
    "lat": 42.350896,
    "lng": -71.074123,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s587",
    "name": "Brookline Ave \u00b7 BURL",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Brookline Ave, Boston, MA",
    "lat": 42.345325,
    "lng": -71.100604,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s588",
    "name": "Cambridge St \u00b7 BLOS",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361287,
    "lng": -71.067353,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s589",
    "name": "Cambridge St \u00b7 ANDE",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361054,
    "lng": -71.067271,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s590",
    "name": "Cambridge St \u00b7 STRON",
    "type": "street",
    "neighborhood": "West End",
    "address": "Cambridge St, Boston, MA",
    "lat": 42.361033,
    "lng": -71.068058,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s591",
    "name": "Canal St V-C \u00b7 VALE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Canal St V-C, Boston, MA",
    "lat": 42.364922,
    "lng": -71.060448,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s592",
    "name": "Central St \u00b7 INDI",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Central St, Boston, MA",
    "lat": 42.35883,
    "lng": -71.052693,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s593",
    "name": "Charles St South \u00b7 MELR",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St South, Boston, MA",
    "lat": 42.349517,
    "lng": -71.066608,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 3,
    "hours": "9am\u20135pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s594",
    "name": "Charles St \u00b7 CHAR",
    "type": "street",
    "neighborhood": "Beacon Hill",
    "address": "Charles St, Boston, MA",
    "lat": 42.355452,
    "lng": -71.068898,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s595",
    "name": "Chauncy St \u00b7 AV D",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Chauncy St, Boston, MA",
    "lat": 42.35338,
    "lng": -71.060384,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s596",
    "name": "Clarendon St \u00b7 STAN",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Clarendon St, Boston, MA",
    "lat": 42.348324,
    "lng": -71.073978,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s597",
    "name": "Dartmouth St \u00b7 STUA",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Dartmouth St, Boston, MA",
    "lat": 42.347914,
    "lng": -71.076117,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s598",
    "name": "Devonshire St \u00b7 MILK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Devonshire St, Boston, MA",
    "lat": 42.356588,
    "lng": -71.057394,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s599",
    "name": "Exeter St \u00b7 HUNT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Exeter St, Boston, MA",
    "lat": 42.348112,
    "lng": -71.078764,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s600",
    "name": "Fairfield St \u00b7 COMM",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Fairfield St, Boston, MA",
    "lat": 42.349919,
    "lng": -71.082372,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s601",
    "name": "Friend St \u00b7 NEW",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Friend St, Boston, MA",
    "lat": 42.363488,
    "lng": -71.059877,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s602",
    "name": "Harrison Ave \u00b7 MASS",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.334847,
    "lng": -71.07537,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s603",
    "name": "Harrison Ave \u00b7 TRAS",
    "type": "street",
    "neighborhood": "South End",
    "address": "Harrison Ave, Boston, MA",
    "lat": 42.334603,
    "lng": -71.075672,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s604",
    "name": "Huntington Ave \u00b7 WORT",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Huntington Ave, Boston, MA",
    "lat": 42.335437,
    "lng": -71.100967,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s605",
    "name": "India St \u00b7 MILK",
    "type": "street",
    "neighborhood": "Boston",
    "address": "India St, Boston, MA",
    "lat": 42.358634,
    "lng": -71.05345,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s606",
    "name": "Kneeland St \u00b7 HUDS",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350416,
    "lng": -71.060477,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s607",
    "name": "Kneeland St \u00b7 MONS",
    "type": "street",
    "neighborhood": "Chinatown",
    "address": "Kneeland St, Boston, MA",
    "lat": 42.350607,
    "lng": -71.061645,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s608",
    "name": "Massachusetts Ave \u00b7 COMM",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Massachusetts Ave, Boston, MA",
    "lat": 42.348263,
    "lng": -71.088269,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s609",
    "name": "Massachusetts Ave \u00b7 MARL",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Massachusetts Ave, Boston, MA",
    "lat": 42.349468,
    "lng": -71.088888,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20135pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s610",
    "name": "Newbury St A-B \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St A-B, Boston, MA",
    "lat": 42.352231,
    "lng": -71.072993,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s611",
    "name": "Newbury St A-B \u00b7 ARLI",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St A-B, Boston, MA",
    "lat": 42.352317,
    "lng": -71.072229,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s612",
    "name": "Newbury St B-C \u00b7 BERK",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St B-C, Boston, MA",
    "lat": 42.351897,
    "lng": -71.074451,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "full",
    "spotsOpen": 0,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s613",
    "name": "Newbury St B-C \u00b7 BERK",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St B-C, Boston, MA",
    "lat": 42.35166,
    "lng": -71.074481,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s614",
    "name": "Newbury St C-D \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St C-D, Boston, MA",
    "lat": 42.351254,
    "lng": -71.076809,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s615",
    "name": "Newbury St C-D \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St C-D, Boston, MA",
    "lat": 42.351109,
    "lng": -71.076646,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s616",
    "name": "Newbury St D-E \u00b7 DART",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St D-E, Boston, MA",
    "lat": 42.350542,
    "lng": -71.078801,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s617",
    "name": "Newbury St E-F \u00b7 EXET",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St E-F, Boston, MA",
    "lat": 42.350003,
    "lng": -71.081237,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s618",
    "name": "Newbury St E-F \u00b7 EXET",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St E-F, Boston, MA",
    "lat": 42.349933,
    "lng": -71.08104,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s619",
    "name": "Newbury St F-G \u00b7 FAIR",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St F-G, Boston, MA",
    "lat": 42.349372,
    "lng": -71.083117,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s620",
    "name": "Newbury St H-M \u00b7 HERE",
    "type": "street",
    "neighborhood": "Back Bay",
    "address": "Newbury St H-M, Boston, MA",
    "lat": 42.348552,
    "lng": -71.086595,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s621",
    "name": "Opera Pl \u00b7 ST S",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Opera Pl, Boston, MA",
    "lat": 42.340877,
    "lng": -71.089318,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s622",
    "name": "Otis St \u00b7 DEVO",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Otis St, Boston, MA",
    "lat": 42.354697,
    "lng": -71.058112,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s623",
    "name": "Park Plaza \u00b7 HADD",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Park Plaza, Boston, MA",
    "lat": 42.351533,
    "lng": -71.069589,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s624",
    "name": "Pelham St \u00b7 WASH",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Pelham St, Boston, MA",
    "lat": 42.341036,
    "lng": -71.07103,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s625",
    "name": "Portland St V-C \u00b7 VALE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Portland St V-C, Boston, MA",
    "lat": 42.364243,
    "lng": -71.061573,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s626",
    "name": "Portland St V-C \u00b7 VALE",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Portland St V-C, Boston, MA",
    "lat": 42.364201,
    "lng": -71.061699,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s627",
    "name": "St Botolph St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Boston",
    "address": "St Botolph St, Boston, MA",
    "lat": 42.3418,
    "lng": -71.084633,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20136pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s628",
    "name": "Tremont St \u00b7 PEMB",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.341767,
    "lng": -71.0756,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s629",
    "name": "Tremont St \u00b7 CLAR",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.34377,
    "lng": -71.072133,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s630",
    "name": "Tremont St \u00b7 W BR",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Tremont St, Boston, MA",
    "lat": 42.341905,
    "lng": -71.075594,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s631",
    "name": "Union St \u00b7 NORT",
    "type": "street",
    "neighborhood": "Boston",
    "address": "Union St, Boston, MA",
    "lat": 42.360911,
    "lng": -71.056847,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s632",
    "name": "Washington St \u00b7 MONS",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.340615,
    "lng": -71.070856,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s633",
    "name": "Washington St \u00b7 NORT",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.336076,
    "lng": -71.077405,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "limited",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  },
  {
    "id": "s634",
    "name": "Washington St \u00b7 MASS",
    "type": "street",
    "neighborhood": "Downtown",
    "address": "Washington St, Boston, MA",
    "lat": 42.336174,
    "lng": -71.077512,
    "price": 1.25,
    "priceUnit": "hour",
    "availability": "available",
    "spotsOpen": 1,
    "totalSpots": 3,
    "hours": "8am\u20138pm MON\u2013SAT",
    "features": [
      "120 min max",
      "Metered",
      "Single Space"
    ]
  }
];
