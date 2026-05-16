export const hospitalFilters = [
  { id: 1, label: "All Hospitals", slug: "all", isActive: true },
  { id: 2, label: "Government", slug: "government", isActive: false },
  { id: 3, label: "Private", slug: "private", isActive: false },
  { id: 4, label: "Clinics", slug: "clinics", isActive: false },
  { id: 5, label: "Dental", slug: "dental", isActive: false },
  { id: 6, label: "Diagnostic", slug: "diagnostic", isActive: false },
];

export const restaurantFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Family", slug: "family", isActive: false },
  { id: 3, label: "Fast Food", slug: "fastfood", isActive: false },
  { id: 4, label: "Cafe", slug: "cafe", isActive: false },
  { id: 5, label: "Traditional", slug: "traditional", isActive: false },
  { id: 6, label: "Pizza", slug: "pizza", isActive: false },
  { id: 7, label: "Veg", slug: "veg", isActive: false },
];

export const cafeFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Cafe", slug: "cafe", isActive: false },
  { id: 3, label: "Restaurant", slug: "restaurant", isActive: false },
  { id: 4, label: "Sweets", slug: "sweets", isActive: false },
];

export const schoolFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Colleges", slug: "college", isActive: false },
  { id: 3, label: "Schools", slug: "school", isActive: false },
  { id: 4, label: "Coaching", slug: "coaching", isActive: false },
];

export const hotelFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Hotels", slug: "hotel", isActive: false },
  { id: 3, label: "Heritage", slug: "heritage", isActive: false },
  { id: 4, label: "Budget", slug: "budget", isActive: false },
];

export const shopFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Textile", slug: "textile", isActive: false },
  { id: 3, label: "Electronics", slug: "electronics", isActive: false },
  { id: 4, label: "Jewellery", slug: "jewellery", isActive: false },
  { id: 5, label: "Books", slug: "books", isActive: false },
  { id: 6, label: "Grocery", slug: "grocery", isActive: false },
  { id: 7, label: "Mobile", slug: "mobile", isActive: false },
];

export const parkFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Gardens", slug: "garden", isActive: false },
  { id: 3, label: "Parks", slug: "park", isActive: false },
  { id: 4, label: "Eco-Park", slug: "eco-park", isActive: false },
  { id: 5, label: "Sports", slug: "sports", isActive: false },
];

export const gymFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Gyms", slug: "gym", isActive: false },
  { id: 3, label: "Yoga", slug: "yoga", isActive: false },
  { id: 4, label: "Ladies Gym", slug: "ladies-gym", isActive: false },
];

export const bankFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Government", slug: "government-bank", isActive: false },
  { id: 3, label: "Private", slug: "private-bank", isActive: false },
];

export const touristFilters = [
  { id: 1, label: "All", slug: "all", isActive: true },
  { id: 2, label: "Temples", slug: "temple", isActive: false },
  { id: 3, label: "Heritage", slug: "heritage", isActive: false },
  { id: 4, label: "Forts", slug: "fort", isActive: false },
  { id: 5, label: "Historical", slug: "historical", isActive: false },
];

export const hospitalsData = [
  {
    id: 1,
    name: "SK Hospital Sikar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNE9zbRuYGFLgvwNCE7Kld-RxtLauWMwihNgkOa4HFgy8mi_rTYO8twxaLFs9knu9HopxoeXjLxy_-mVgQpBqXP46wLdtKcLMoETWUZshEAQreqbIYqwtoMfJhqdb1ND576Ebnrml5EpUl1qfBUwu7PF1jU1FGk_ZSQ-uFhHF8-WP_0f3qGuJUZPmK-FK2ARaq7HgKhBpbw1wJX7oZkt-eSe81T8aUbTfDfoyM_FxVZjkyr9ksgSXZThS1cTq1DF_WoaiC6uB2B-g",
    tag: "Verified",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.5,
    location: "Kalyan Circle, Sikar, RJ",
    phone: "+91 1572 250001",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "government",
  },
  {
    id: 2,
    name: "Prince Medical Centre",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvITwA0wCUOz8W04qas4hMuyCd4EdmQDRxAwzBcDhcWyg9jK_bgWQhkuBb8Du8KsZPLbP_j6EMHBAiVjvTgGCcegRX0scUxaDHnywomiyHecc1fhFm8MwaZjKRXYgKxnMJWnHmkMfklgiKuaGRHnGVem_zcWoPJWPVqUG45n8h-cQ9yh7WFQXJEC2C08OSB83Ho64_9LaRhSEZtG6WDXXB0nxOeZUFULeJ1oY9cm2XdrGIgxqRqysW5YMDNM1Om7Ku8HrSIQOE_iM",
    tag: "Private",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.8,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 1572 255400",
    timing: "09:00 AM - 08:00 PM",
    is24Hours: false,
    type: "private",
  },
  {
    id: 3,
    name: "Sikar Multi-Speciality",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpl3jL0nNU8m6h_quVGvppZGAZdCdQTSDS7Kyhx3xUsi91_-kTaY2KgJbeD6pLYdfRxjvlr-fLztmoMUZNg52035lsI4JoB7FkJS4R9LvDq26kD0_UhLm6hxHurrQ9ksBVufxukgsDvucHWt80WsBIkUUVBTNjjgd_TBfm5CeyyoA8ZvGrWYIO2tc3mT6CEDk-3yPOss3MWn3yjrmNXD-99FgEPd0XRFnxqYR82pCxs-gTy4NVcu6Uem6dI9MMPhQvlJq0RClNYqU",
    tag: null,
    rating: 4.2,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 1572 244111",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "private",
  },
  {
    id: 4,
    name: "Kalyan Diagnostics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM7-OmfGcyp4bpRMIf2GRa3G6MKPO5CHvd9H0xHHZ-5zaGvvp_jkF1aBm-mU1i6LqS6eBf6qInZr6Ij8N1wsX3Vxio7LriiOzetkZAJZJHUJAy3uWlfpD2ai_dF_eA7im3QYY85qN7RjUJDat7EXwRNd_JANyES7e5hSjR2o3my0sU1oxs86Y117ufXaqEtMPCgI7pnOAl_pHRR-BBK15BCdKB26ZL24RZI1K-lAl2lezMrHHcIE5sU_TyDR_hBZP78x0WxmvXED8",
    tag: null,
    rating: 4.9,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 1572 260022",
    timing: "08:00 AM - 09:00 PM",
    is24Hours: false,
    type: "diagnostic",
  },
  {
    id: 5,
    name: "Global Heart Institute",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSb7Gk9FiLYIpGUwywdwah3FgsB-K4mYgMgwxntF5v4WZr53IPmmFBdZt-q1hykFKNth-_eQbr84QAdvCJnopDXBWMmjxBaR5R7-1H-1I92w8dCbjLPCjJ5rT4V7UhILi3FY_hTz585ktCKg7m9NClRs-qCDuws-kFABmuMEiTwROJZGNPiXSG5sBkgvoGqjN60APgyiiQXBUgT5ZB3_-45dDw1Gs599apxef_OcFrZGkv7aOgTODcmYF2iwb9IHuR1vbz02IVM3A",
    tag: null,
    rating: 4.6,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 1572 233344",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "private",
  },
  {
    id: 6,
    name: "Heritage City Clinic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfXkTUezTjm_UEwDdksS8mVqoP9YCEW0WHP1u-SQt7ynHx7AtAbRhsffKvltDYH6N4p0LTU7lYMnQCWCzr0C7k0egV3ae3KS9Ryl_PRV4qJi7o6ZhcvUfu4-L0BzPB3s6eaXbETCr4wJ3eg8m-yRpNpzo2XNOcBtVD0hJHnTaa_-qMZ23-Saq5wxSPpxQiKR8AkPHah2cNDeGNKeWHRwSehln6k9P5QpZeh1Hc2AHHjoooXl672BM-OJ2WpWxPNugGSR-BLHn3C6c",
    tag: null,
    rating: 4.4,
    location: "Court Road, Sikar, RJ",
    phone: "+91 1572 221199",
    timing: "10:00 AM - 07:00 PM",
    is24Hours: false,
    type: "clinics",
  },
];

// ── RESTAURANTS ──────────────────────────────────
export const restaurantsData = [
  {
    id: 1,
    name: "Royal Spice Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    tag: "Family",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.5,
    location: "Station Road, Sikar, RJ",
    phone: "+91 9876543210",
    timing: "11:00 AM - 11:00 PM",
    is24Hours: false,
    type: "family",
  },
  {
    id: 2,
    name: "Burger Hub",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    tag: "Fast Food",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.7,
    location: "Piprali Road, Sikar, RJ",
    phone: "+91 9988776655",
    timing: "10:00 AM - 12:00 AM",
    is24Hours: false,
    type: "fastfood",
  },
  {
    id: 3,
    name: "Italian Delight Cafe",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80",
    tag: "Cafe",
    tagClass: "bg-tertiary-container text-on-tertiary-container",
    rating: 4.3,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 9123456780",
    timing: "09:00 AM - 10:00 PM",
    is24Hours: false,
    type: "cafe",
  },
  {
    id: 4,
    name: "Rajdhani Thali House",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tag: "Traditional",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.8,
    location: "Kalyan Circle, Sikar, RJ",
    phone: "+91 9011223344",
    timing: "12:00 PM - 11:00 PM",
    is24Hours: false,
    type: "traditional",
  },
  {
    id: 5,
    name: "Pizza World",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    tag: "Pizza",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.6,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 9090909090",
    timing: "11:00 AM - 01:00 AM",
    is24Hours: false,
    type: "pizza",
  },
  {
    id: 6,
    name: "Green Leaf Restaurant",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",
    tag: "Veg",
    tagClass: "bg-tertiary-container text-on-tertiary-container",
    rating: 4.4,
    location: "Court Road, Sikar, RJ",
    phone: "+91 9345678901",
    timing: "08:00 AM - 10:30 PM",
    is24Hours: false,
    type: "veg",
  },
];
``;

// ── CAFES & RESTAURANTS ────────────────────────
export const cafesData = [
  {
    id: 1,
    name: "Café Haveli",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    tag: "Trending",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.7,
    location: "Subhash Chowk, Sikar, RJ",
    phone: "+91 98291 11234",
    timing: "08:00 AM - 11:00 PM",
    is24Hours: false,
    type: "cafe",
  },
  {
    id: 2,
    name: "The Royal Dhani",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    tag: "Popular",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.8,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 98292 22345",
    timing: "11:00 AM - 11:00 PM",
    is24Hours: false,
    type: "restaurant",
  },
  {
    id: 3,
    name: "Brew & Beans Coffee House",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80",
    tag: null,
    rating: 4.5,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 98293 33456",
    timing: "07:30 AM - 10:00 PM",
    is24Hours: false,
    type: "cafe",
  },
  {
    id: 4,
    name: "Spice Garden Restaurant",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
    tag: null,
    rating: 4.3,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 98294 44567",
    timing: "12:00 PM - 11:00 PM",
    is24Hours: false,
    type: "restaurant",
  },
  {
    id: 5,
    name: "Mango Shake Corner",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=600&q=80",
    tag: null,
    rating: 4.6,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 98295 55678",
    timing: "09:00 AM - 10:30 PM",
    is24Hours: false,
    type: "cafe",
  },
  {
    id: 6,
    name: "Rajwada Sweets & Snacks",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    tag: null,
    rating: 4.4,
    location: "Court Road, Sikar, RJ",
    phone: "+91 98296 66789",
    timing: "07:00 AM - 09:00 PM",
    is24Hours: false,
    type: "sweets",
  },
];

// ── SCHOOLS & COLLEGES ─────────────────────────
export const schoolsData = [
  {
    id: 1,
    name: "Seth Gyaniram Bansidhar Podar College",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    tag: "Govt. Aided",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.6,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 1572 270101",
    timing: "07:30 AM - 02:00 PM",
    is24Hours: false,
    type: "college",
  },
  {
    id: 2,
    name: "Tagore Public School",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    tag: "CBSE",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.8,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 1572 255500",
    timing: "07:00 AM - 01:30 PM",
    is24Hours: false,
    type: "school",
  },
  {
    id: 3,
    name: "Government Senior Secondary School",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    tag: null,
    rating: 4.1,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 1572 244200",
    timing: "07:30 AM - 01:30 PM",
    is24Hours: false,
    type: "school",
  },
  {
    id: 4,
    name: "Apex International School",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    tag: null,
    rating: 4.7,
    location: "Jaipur Bypass, Sikar, RJ",
    phone: "+91 1572 280300",
    timing: "08:00 AM - 02:30 PM",
    is24Hours: false,
    type: "school",
  },
  {
    id: 5,
    name: "Sri Ram Coaching Institute",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
    tag: null,
    rating: 4.5,
    location: "Kalyan Circle, Sikar, RJ",
    phone: "+91 98291 77000",
    timing: "06:00 AM - 09:00 PM",
    is24Hours: false,
    type: "coaching",
  },
  {
    id: 6,
    name: "Sikar Commerce College",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&q=80",
    tag: null,
    rating: 4.2,
    location: "Court Road, Sikar, RJ",
    phone: "+91 1572 221300",
    timing: "09:00 AM - 04:00 PM",
    is24Hours: false,
    type: "college",
  },
];

// ── HOTELS ─────────────────────────────────────
export const hotelsData = [
  {
    id: 1,
    name: "Hotel Shree Ram Palace",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tag: "3 Star",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.5,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 1572 250100",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "hotel",
  },
  {
    id: 2,
    name: "The Haveli Heritage Hotel",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    tag: "Premium",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.8,
    location: "Subhash Chowk, Sikar, RJ",
    phone: "+91 1572 255600",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "heritage",
  },
  {
    id: 3,
    name: "Hotel City Grand",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    tag: null,
    rating: 4.3,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 1572 244500",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "hotel",
  },
  {
    id: 4,
    name: "Royal Stay Inn",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe2e2?w=600&q=80",
    tag: null,
    rating: 4.1,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 1572 260100",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "hotel",
  },
  {
    id: 5,
    name: "Hotel Kalyan Residency",
    image:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&q=80",
    tag: null,
    rating: 4.4,
    location: "Kalyan Circle, Sikar, RJ",
    phone: "+91 1572 233600",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "hotel",
  },
  {
    id: 6,
    name: "OYO Rooms Sikar Central",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80",
    tag: null,
    rating: 3.9,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 93100 99199",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "budget",
  },
];

// ── SHOPS & MARKETS ────────────────────────────
export const shopsData = [
  {
    id: 1,
    name: "Sikar Cloth Market",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    tag: "Wholesale",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.4,
    location: "Purani Mandi, Sikar, RJ",
    phone: "+91 98291 88001",
    timing: "09:00 AM - 08:00 PM",
    is24Hours: false,
    type: "textile",
  },
  {
    id: 2,
    name: "Ganpati Electronics",
    image:
      "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=600&q=80",
    tag: "Verified",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.6,
    location: "Subhash Chowk, Sikar, RJ",
    phone: "+91 98292 88002",
    timing: "10:00 AM - 09:00 PM",
    is24Hours: false,
    type: "electronics",
  },
  {
    id: 3,
    name: "Rajputana Jewellers",
    image:
      "https://images.unsplash.com/photo-1573408301185-9519f94816f6?w=600&q=80",
    tag: null,
    rating: 4.9,
    location: "Court Road, Sikar, RJ",
    phone: "+91 98293 88003",
    timing: "10:30 AM - 08:30 PM",
    is24Hours: false,
    type: "jewellery",
  },
  {
    id: 4,
    name: "Sikar Book Depot",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    tag: null,
    rating: 4.3,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 98294 88004",
    timing: "09:00 AM - 07:30 PM",
    is24Hours: false,
    type: "books",
  },
  {
    id: 5,
    name: "Fresh Mart Grocery",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    tag: null,
    rating: 4.5,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 98295 88005",
    timing: "07:00 AM - 10:00 PM",
    is24Hours: false,
    type: "grocery",
  },
  {
    id: 6,
    name: "Pawan Mobile & Accessories",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
    tag: null,
    rating: 4.2,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 98296 88006",
    timing: "10:00 AM - 09:00 PM",
    is24Hours: false,
    type: "mobile",
  },
];

// ── PARKS & GARDENS ────────────────────────────
export const parkData = [
  {
    id: 1,
    name: "Rani Sati Garden",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    tag: "Public",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.4,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 1572 250200",
    timing: "05:30 AM - 09:00 PM",
    is24Hours: false,
    type: "garden",
  },
  {
    id: 2,
    name: "Sikar Central Park",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Kids Zone",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.6,
    location: "Kalyan Circle, Sikar, RJ",
    phone: "+91 1572 255700",
    timing: "06:00 AM - 09:30 PM",
    is24Hours: false,
    type: "park",
  },
  {
    id: 3,
    name: "Nehru Bal Udyan",
    image:
      "https://images.unsplash.com/photo-1587402092301-725e37c364f9?w=600&q=80",
    tag: null,
    rating: 4.1,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 1572 244600",
    timing: "06:00 AM - 08:00 PM",
    is24Hours: false,
    type: "park",
  },
  {
    id: 4,
    name: "Green Valley Eco Park",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&q=80",
    tag: null,
    rating: 4.3,
    location: "Jaipur Bypass, Sikar, RJ",
    phone: "+91 98291 99001",
    timing: "07:00 AM - 07:00 PM",
    is24Hours: false,
    type: "eco-park",
  },
  {
    id: 5,
    name: "Rose Garden Sikar",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    tag: null,
    rating: 4.5,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 98292 99002",
    timing: "06:30 AM - 08:30 PM",
    is24Hours: false,
    type: "garden",
  },
  {
    id: 6,
    name: "Sports Complex Ground",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80",
    tag: null,
    rating: 4.2,
    location: "Court Road, Sikar, RJ",
    phone: "+91 1572 221500",
    timing: "05:00 AM - 09:00 PM",
    is24Hours: false,
    type: "sports",
  },
];

// ── GYMS & FITNESS ─────────────────────────────
export const gymsData = [
  {
    id: 1,
    name: "Iron Body Gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    tag: "Premium",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.7,
    location: "Subhash Chowk, Sikar, RJ",
    phone: "+91 98291 55001",
    timing: "05:00 AM - 10:00 PM",
    is24Hours: false,
    type: "gym",
  },
  {
    id: 2,
    name: "Fitness First Sikar",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    tag: "Certified",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.8,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 98292 55002",
    timing: "05:30 AM - 09:30 PM",
    is24Hours: false,
    type: "gym",
  },
  {
    id: 3,
    name: "PowerZone Fitness Hub",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    tag: null,
    rating: 4.4,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 98293 55003",
    timing: "06:00 AM - 10:00 PM",
    is24Hours: false,
    type: "gym",
  },
  {
    id: 4,
    name: "Yoga Sadhna Centre",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80",
    tag: null,
    rating: 4.9,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 98294 55004",
    timing: "06:00 AM - 08:00 AM, 05:00 PM - 07:00 PM",
    is24Hours: false,
    type: "yoga",
  },
  {
    id: 5,
    name: "Champion's Gym & Spa",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    tag: null,
    rating: 4.5,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 98295 55005",
    timing: "05:30 AM - 10:30 PM",
    is24Hours: false,
    type: "gym",
  },
  {
    id: 6,
    name: "Slim & Fit Ladies Gym",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    tag: null,
    rating: 4.6,
    location: "Court Road, Sikar, RJ",
    phone: "+91 98296 55006",
    timing: "06:00 AM - 09:00 PM",
    is24Hours: false,
    type: "ladies-gym",
  },
];

// ── BANKS & ATMs ───────────────────────────────
export const banksData = [
  {
    id: 1,
    name: "State Bank of India — Sikar",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&q=80",
    tag: "Govt. Bank",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.2,
    location: "Kalyan Circle, Sikar, RJ",
    phone: "+91 1572 250300",
    timing: "10:00 AM - 04:00 PM",
    is24Hours: false,
    type: "government-bank",
  },
  {
    id: 2,
    name: "HDFC Bank Sikar Branch",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80",
    tag: "Private",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.6,
    location: "Piparali Road, Sikar, RJ",
    phone: "+91 1572 255800",
    timing: "09:30 AM - 04:30 PM",
    is24Hours: false,
    type: "private-bank",
  },
  {
    id: 3,
    name: "Bank of Baroda — Sikar",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tag: null,
    rating: 4.0,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 1572 244700",
    timing: "10:00 AM - 04:00 PM",
    is24Hours: false,
    type: "government-bank",
  },
  {
    id: 4,
    name: "ICICI Bank Sikar",
    image:
      "https://images.unsplash.com/photo-1608023136037-626dad6bagf?w=600&q=80&crop=faces&fit=crop",
    tag: null,
    rating: 4.5,
    location: "Fatehpur Road, Sikar, RJ",
    phone: "+91 1572 260300",
    timing: "09:30 AM - 04:30 PM",
    is24Hours: false,
    type: "private-bank",
  },
  {
    id: 5,
    name: "Punjab National Bank",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80",
    tag: null,
    rating: 3.9,
    location: "Jaipur Road, Sikar, RJ",
    phone: "+91 1572 233700",
    timing: "10:00 AM - 04:00 PM",
    is24Hours: false,
    type: "government-bank",
  },
  {
    id: 6,
    name: "Axis Bank ATM & Branch",
    image:
      "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=600&q=80",
    tag: null,
    rating: 4.3,
    location: "Court Road, Sikar, RJ",
    phone: "+91 1572 221700",
    timing: "09:30 AM - 05:00 PM",
    is24Hours: false,
    type: "private-bank",
  },
];

// ── TOURIST PLACES ─────────────────────────────
export const touristPlacesData = [
  {
    id: 1,
    name: "Rani Sati Temple",
    image:
      "https://temple.yatradham.org/public/Product/temple/temple_Cb60WymZ_202506301531240.jpg",
    tag: "Famous",
    tagClass: "bg-secondary-container text-on-secondary-container",
    rating: 4.9,
    location: "Jhunjhunu Road, Sikar, RJ",
    phone: "+91 1572 250400",
    timing: "05:00 AM - 09:00 PM",
    is24Hours: false,
    type: "temple",
  },
  {
    id: 2,
    name: "Harshnath Temple",
    image: "https://pbs.twimg.com/media/Fa5lIFgXgAA9jSI.jpg",
    tag: "Heritage",
    tagClass: "bg-primary-container text-on-primary-container",
    rating: 4.7,
    location: "Harshgiri Hills, Sikar, RJ",
    phone: "+91 98291 44001",
    timing: "Open 24 Hours",
    is24Hours: true,
    type: "temple",
  },
  {
    id: 3,
    name: "Jeenmata Temple",
    image:
      "https://images.bhaskarassets.com/web2images/521/2022/09/26/orig_untitled4_1664137205.jpg",
    tag: null,
    rating: 4.8,
    location: "Reengus, Sikar, RJ",
    phone: "+91 98292 44002",
    timing: "05:30 AM - 09:00 PM",
    is24Hours: false,
    type: "temple",
  },
  {
    id: 4,
    name: "Fatehpur Shekhawati Havelis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcjYTHqkvzkIfQdHAYUxvEFyWekVt4esLUw&s",
    tag: null,
    rating: 4.6,
    location: "Fatehpur, Sikar, RJ",
    phone: "+91 98293 44003",
    timing: "09:00 AM - 06:00 PM",
    is24Hours: false,
    type: "heritage",
  },
  {
    id: 5,
    name: "Laxmangarh Fort",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXI2BsV7KPlFGTHRfBuCFWaWWq-sbrWoRtyQ&s",
    tag: null,
    rating: 4.5,
    location: "Laxmangarh, Sikar, RJ",
    phone: "+91 98294 44004",
    timing: "08:00 AM - 06:00 PM",
    is24Hours: false,
    type: "fort",
  },
  {
    id: 6,
    name: "Devyani Kund",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDIMp5NNmNV8SRhV5R_cb2H8E7Okznzxb5w&s",
    tag: null,
    rating: 4.3,
    location: "Nawalgarh Road, Sikar, RJ",
    phone: "+91 98295 44005",
    timing: "06:00 AM - 08:00 PM",
    is24Hours: false,
    type: "historical",
  },
];
