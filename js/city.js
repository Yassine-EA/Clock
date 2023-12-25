const data = [
	{
		city: "Baker Island",
		country: "USA",
		utc: -12,
		continent: "North America",
		coordinates: {
			latitude: 0.195833,
			longitude: -176.479167,
		},
	},
	{
		city: "Alofi",
		country: "Niue",
		utc: -11,
		continent: "Oceania",
		coordinates: {
			latitude: -19.0554,
			longitude: -169.9175,
		},
	},
	{
		city: "Tafuna",
		country: "American Samoa",
		utc: -11,
		continent: "Oceania",
		coordinates: {
			latitude: -14.3343,
			longitude: -170.718,
		},
	},
	{
		city: "Tahiti",
		country: "French Polynesia",
		utc: -10,
		continent: "Oceania",
		coordinates: {
			latitude: -17.6797,
			longitude: -149.4068,
		},
	},
	{
		city: "Honolulu",
		country: "USA",
		utc: -10,
		continent: "North America",
		coordinates: {
			latitude: 21.3069,
			longitude: -157.8583,
		},
	},
	{
		city: "Avarua",
		country: "Cook Islands",
		utc: -10,
		continent: "Oceania",
		coordinates: {
			latitude: -21.2075,
			longitude: -159.775,
		},
	},
	{
		city: "Anchorage",
		country: "USA",
		utc: -9,
		continent: "North America",
		coordinates: {
			latitude: 61.0169,
			longitude: -149.7375,
		},
	},
	{
		city: "Rikitea",
		country: "French Polynesia",
		utc: -9,
		continent: "Oceania",
		coordinates: {
			latitude: -23.1203,
			longitude: -134.9692,
		},
	},
	{
		city: "Los Angeles",
		country: "USA",
		utc: -8,
		continent: "North America",
		coordinates: {
			latitude: 34.0522,
			longitude: -118.2437,
		},
	},
	{
		city: "Seattle",
		country: "USA",
		utc: -8,
		continent: "North America",
		coordinates: {
			latitude: 47.6062,
			longitude: -122.3321,
		},
	},
	{
		city: "Phoenix",
		country: "USA",
		utc: -7,
		continent: "North America",
		coordinates: {
			latitude: 33.4484,
			longitude: -112.074,
		},
	},
	{
		city: "Juárez",
		country: "Mexico",
		utc: -7,
		continent: "North America",
		coordinates: {
			latitude: 31.7333,
			longitude: -106.4833,
		},
	},
	{
		city: "Mexico City",
		country: "Mexico",
		utc: -6,
		continent: "North America",
		coordinates: {
			latitude: 19.4326,
			longitude: -99.1332,
		},
	},
	{
		city: "Chicago",
		country: "USA",
		utc: -6,
		continent: "North America",
		coordinates: {
			latitude: 41.8781,
			longitude: -87.6298,
		},
	},
	{
		city: "New York City",
		country: "USA",
		utc: -5,
		continent: "North America",
		coordinates: {
			latitude: 40.7128,
			longitude: -74.006,
		},
	},
	{
		city: "Toronto",
		country: "Canada",
		utc: -5,
		continent: "North America",
		coordinates: {
			latitude: 43.6532,
			longitude: -79.3832,
		},
	},
	{
		city: "Montreal",
		country: "Canada",
		utc: -5,
		continent: "North America",
		coordinates: {
			latitude: 45.5017,
			longitude: -73.5673,
		},
	},
	{
		city: "Halifax",
		country: "Canada",
		utc: -4,
		continent: "North America",
		coordinates: {
			latitude: 44.6488,
			longitude: -63.5752,
		},
	},
	{
		city: "Buenos Aires",
		country: "Argentina",
		utc: -3,
		continent: "South America",
		coordinates: {
			latitude: -34.6118,
			longitude: -58.4173,
		},
	},
	{
		city: "Brasília",
		country: "Brazil",
		utc: -3,
		continent: "South America",
		coordinates: {
			latitude: -15.7801,
			longitude: -47.9292,
		},
	},
	{
		city: "São Paulo",
		country: "Brazil",
		utc: -3,
		continent: "South America",
		coordinates: {
			latitude: -23.5505,
			longitude: -46.6333,
		},
	},
	{
		city: "Praia",
		country: "Cape Verde",
		utc: -1,
		continent: "Africa",
		coordinates: {
			latitude: 14.9215,
			longitude: -23.5087,
		},
	},
	{
		city: "Azores islands",
		country: "Portugal",
		utc: -1,
		continent: "Europe",
		coordinates: {
			latitude: 37.7412,
			longitude: -25.6756,
		},
	},
	{
		city: "Las Palmas",
		country: "Spain",
		utc: 0,
		continent: "Europe",
		coordinates: {
			latitude: 28.1235,
			longitude: -15.4363,
		},
	},
	{
		city: "Lisbon",
		country: "Portugal",
		utc: 0,
		continent: "Europe",
		coordinates: {
			latitude: 38.7223,
			longitude: -9.1393,
		},
	},
	{
		city: "London",
		country: "United Kingdom",
		utc: 0,
		continent: "Europe",
		coordinates: {
			latitude: 51.5099,
			longitude: -0.118,
		},
	},
	{
		city: "Paris",
		country: "France",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 48.8566,
			longitude: 2.3522,
		},
	},
	{
		city: "Brussels",
		country: "Belgium",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 50.8503,
			longitude: 4.3517,
		},
	},
	{
		city: "Madrid",
		country: "Spain",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 40.4168,
			longitude: -3.7038,
		},
	},
	{
		city: "Berlin",
		country: "Germany",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 52.52,
			longitude: 13.405,
		},
	},
	{
		city: "Rome",
		country: "Italy",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 41.9028,
			longitude: 12.4964,
		},
	},
	{
		city: "Amsterdam",
		country: "Netherlands",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 52.3676,
			longitude: 4.9041,
		},
	},
	{
		city: "Prague",
		country: "Czech Republic",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 50.0755,
			longitude: 14.4378,
		},
	},
	{
		city: "Frankfurt",
		country: "Germany",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 50.1109,
			longitude: 8.6821,
		},
	},
	{
		city: "Casablanca",
		country: "Morocco",
		utc: 1,
		continent: "Africa",
		coordinates: {
			latitude: 33.5731,
			longitude: -7.5898,
		},
	},
	{
		city: "Copenhagen",
		country: "Denmark",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 55.6761,
			longitude: 12.5683,
		},
	},
	{
		city: "Stockholm",
		country: "Sweden",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 59.3293,
			longitude: 18.0686,
		},
	},
	{
		city: "Oslo",
		country: "Norway",
		utc: 1,
		continent: "Europe",
		coordinates: {
			latitude: 59.9139,
			longitude: 10.7522,
		},
	},
	{
		city: "Cape Town",
		country: "South Africa",
		utc: 2,
		continent: "Africa",
		coordinates: {
			latitude: -33.9249,
			longitude: 18.4241,
		},
	},
	{
		city: "Cairo",
		country: "Egypt",
		utc: 2,
		continent: "Africa",
		coordinates: {
			latitude: 30.0444,
			longitude: 31.2357,
		},
	},
	{
		city: "Athens",
		country: "Greece",
		utc: 2,
		continent: "Europe",
		coordinates: {
			latitude: 37.9838,
			longitude: 23.7275,
		},
	},
	{
		city: "Pretoria",
		country: "South Africa",
		utc: 2,
		continent: "Africa",
		coordinates: {
			latitude: -25.7461,
			longitude: 28.1881,
		},
	},
	{
		city: "Kaliningrad",
		country: "Russia",
		utc: 2,
		continent: "Europe",
		coordinates: {
			latitude: 54.7104,
			longitude: 20.51,
		},
	},
	{
		city: "Istanbul",
		country: "Turkey",
		utc: 3,
		continent: "Asia",
		coordinates: {
			latitude: 41.0082,
			longitude: 28.9784,
		},
	},
	{
		city: "Moscow",
		country: "Russia",
		utc: 3,
		continent: "Europe",
		coordinates: {
			latitude: 55.7558,
			longitude: 37.6176,
		},
	},
	{
		city: "Saint Petersburg",
		country: "Russia",
		utc: 3,
		continent: "Europe",
		coordinates: {
			latitude: 59.9343,
			longitude: 30.3351,
		},
	},
	{
		city: "Doha",
		country: "Qatar",
		utc: 3,
		continent: "Asia",
		coordinates: {
			latitude: 25.2769,
			longitude: 51.52,
		},
	},
	{
		city: "Riyadh",
		country: "Saudi Arabia",
		utc: 3,
		continent: "Asia",
		coordinates: {
			latitude: 24.7136,
			longitude: 46.6753,
		},
	},
	{
		city: "Baghdad",
		country: "Iraq",
		utc: 3,
		continent: "Asia",
		coordinates: {
			latitude: 33.3152,
			longitude: 44.3661,
		},
	},
	{
		city: "Nairobi",
		country: "Kenya",
		utc: 3,
		continent: "Africa",
		coordinates: {
			latitude: -1.286389,
			longitude: 36.817223,
		},
	},
	{
		city: "Tehran",
		country: "Iran",
		utc: 3.5,
		continent: "Asia",
		coordinates: {
			latitude: 35.6895,
			longitude: 51.594,
		},
	},
	{
		city: "Dubai",
		country: "United Arab Emirates",
		utc: 4,
		continent: "Asia",
		coordinates: {
			latitude: 25.276987,
			longitude: 55.296249,
		},
	},
	{
		city: "Baku",
		country: "Azerbaijan",
		utc: 4,
		continent: "Asia",
		coordinates: {
			latitude: 40.4093,
			longitude: 49.8671,
		},
	},
	{
		city: "Port Louis",
		country: "Mauritius",
		utc: 4,
		continent: "Africa",
		coordinates: {
			latitude: -20.1609,
			longitude: 57.5012,
		},
	},
	{
		city: "Kabul",
		country: "Afghanistan",
		utc: 4.5,
		continent: "Asia",
		coordinates: {
			latitude: 34.5553,
			longitude: 69.2075,
		},
	},
	{
		city: "Tashkent",
		country: "Uzbekistan",
		utc: 5,
		continent: "Asia",
		coordinates: {
			latitude: 41.2995,
			longitude: 69.2401,
		},
	},
	{
		city: "Malé",
		country: "Maldives",
		utc: 5,
		continent: "Asia",
		coordinates: {
			latitude: 4.1755,
			longitude: 73.5093,
		},
	},
	{
		city: "Port-aux-Français",
		country: "French Southern and Antarctic Lands",
		utc: 5,
		continent: "Antarctica",
		coordinates: {
			latitude: -49.3526,
			longitude: 70.217,
		},
	},
	{
		city: "Islamabad",
		country: "Pakistan",
		utc: 5,
		continent: "Asia",
		coordinates: {
			latitude: 33.6844,
			longitude: 73.0479,
		},
	},
	{
		city: "Kathmandu",
		country: "Nepal",
		utc: 5.75,
		continent: "Asia",
		coordinates: {
			latitude: 27.7172,
			longitude: 85.324,
		},
	},
	{
		city: "Dhaka",
		country: "Bangladesh",
		utc: 6,
		continent: "Asia",
		coordinates: {
			latitude: 23.8103,
			longitude: 90.4125,
		},
	},
	{
		city: "Astana",
		country: "Kazakhstan",
		utc: 6,
		continent: "Asia",
		coordinates: {
			latitude: 51.1694,
			longitude: 71.4491,
		},
	},
	{
		city: "Cocos Islands",
		country: "Australia",
		utc: 6.5,
		continent: "Australia",
		coordinates: {
			latitude: -12.165,
			longitude: 96.8709,
		},
	},
	{
		city: "Yangon",
		country: "Myanmar",
		utc: 6.5,
		continent: "Asia",
		coordinates: {
			latitude: 16.8661,
			longitude: 96.1951,
		},
	},
	{
		city: "Hanoi",
		country: "Vietnam",
		utc: 7,
		continent: "Asia",
		coordinates: {
			latitude: 21.0285,
			longitude: 105.8542,
		},
	},
	{
		city: "Bangkok",
		country: "Thailand",
		utc: 7,
		continent: "Asia",
		coordinates: {
			latitude: 13.7563,
			longitude: 100.5018,
		},
	},
	{
		city: "Jakarta",
		country: "Indonesia",
		utc: 7,
		continent: "Asia",
		coordinates: {
			latitude: -6.2088,
			longitude: 106.8456,
		},
	},
	{
		city: "Shanghai",
		country: "China",
		utc: 8,
		continent: "Asia",
		coordinates: {
			latitude: 31.2304,
			longitude: 121.4737,
		},
	},
	{
		city: "Beijing",
		country: "China",
		utc: 8,
		continent: "Asia",
		coordinates: {
			latitude: 39.9042,
			longitude: 116.4074,
		},
	},
	{
		city: "Taipei",
		country: "Taiwan",
		utc: 8,
		continent: "Asia",
		coordinates: {
			latitude: 25.032,
			longitude: 121.5654,
		},
	},
	{
		city: "Hong Kong",
		country: "China",
		utc: 8,
		continent: "Asia",
		coordinates: {
			latitude: 22.3964,
			longitude: 114.1095,
		},
	},
	{
		city: "Singapore",
		country: "Singapore",
		utc: 8,
		continent: "Asia",
		coordinates: {
			latitude: 1.3521,
			longitude: 103.8198,
		},
	},
	{
		city: "Perth",
		country: "Australia",
		utc: 8,
		continent: "Australia",
		coordinates: {
			latitude: -31.9505,
			longitude: 115.8605,
		},
	},
	{
		city: "Tokyo",
		country: "Japan",
		utc: 9,
		continent: "Asia",
		coordinates: {
			latitude: 35.6895,
			longitude: 139.6917,
		},
	},
	{
		city: "Seoul",
		country: "South Korea",
		utc: 9,
		continent: "Asia",
		coordinates: {
			latitude: 37.5665,
			longitude: 126.978,
		},
	},
	{
		city: "Pyeongyang",
		country: "North Korea",
		utc: 9,
		continent: "Asia",
		coordinates: {
			latitude: 39.0392,
			longitude: 125.7625,
		},
	},
	{
		city: "Darwin",
		country: "Australia",
		utc: 9.5,
		continent: "Australia",
		coordinates: {
			latitude: -12.4634,
			longitude: 130.8456,
		},
	},
	{
		city: "Vladivostok",
		country: "Russia",
		utc: 10,
		continent: "Asia",
		coordinates: {
			latitude: 43.1056,
			longitude: 131.8735,
		},
	},
	{
		city: "Saipan",
		country: "Northern Mariana Islands",
		utc: 10,
		continent: "Oceania",
		coordinates: {
			latitude: 15.1794,
			longitude: 145.75,
		},
	},
	{
		city: "Sydney",
		country: "Australia",
		utc: 11,
		continent: "Australia",
		coordinates: {
			latitude: -33.8688,
			longitude: 151.2093,
		},
	},
	{
		city: "Petropavlovsk-Kamchatsky",
		country: "Russia",
		utc: 12,
		continent: "Asia",
		coordinates: {
			latitude: 53.0238,
			longitude: 158.6483,
		},
	},
	{
		city: "Apia",
		country: "Samoa",
		utc: 13,
		continent: "Oceania",
		coordinates: {
			latitude: -13.8484,
			longitude: -171.7486,
		},
	},
	{
		city: "Auckland",
		country: "New Zealand",
		utc: 13,
		continent: "Oceania",
		coordinates: {
			latitude: -36.8485,
			longitude: 174.7633,
		},
	},
	{
		city: "Nukuʻalofa",
		country: "Tonga",
		utc: 13,
		continent: "Oceania",
		coordinates: {
			latitude: -21.1606,
			longitude: -175.1894,
		},
	},
	{
		city: "Kiritimati",
		country: "Kiribati",
		utc: 14,
		continent: "Oceania",
		coordinates: {
			latitude: 1.8709,
			longitude: -157.3631,
		},
	},
];

const updatedJsonData = data.map((item, index) => {

	return { id: index, ...item };
});

export default updatedJsonData;
