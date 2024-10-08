const currencies = [
	{
		code: "AED",
		name: "United Arab Emirates Dirham",
		country: "United Arab Emirates",
		countryCode: "AE",
	},
	{
		code: "AFN",
		name: "Afghan Afghani",
		country: "Afghanistan",
		countryCode: "AF",
	},
	{ code: "ALL", name: "Albanian Lek", country: "Albania", countryCode: "AL" },
	{ code: "AMD", name: "Armenian Dram", country: "Armenia", countryCode: "AM" },
	{
		code: "ANG",
		name: "Netherlands Antillean Guilder",
		country: "Netherlands Antilles",
		countryCode: "AN",
	},
	{ code: "AOA", name: "Angolan Kwanza", country: "Angola", countryCode: "AO" },
	{
		code: "ARS",
		name: "Argentine Peso",
		country: "Argentina",
		countryCode: "AR",
	},
	{
		code: "AUD",
		name: "Australian Dollar",
		country: "Australia",
		countryCode: "AU",
	},
	{
		code: "AZN",
		name: "Azerbaijani Manat",
		country: "Azerbaijan",
		countryCode: "AZ",
	},
	{
		code: "BAM",
		name: "Bosnia-Herzegovina Convertible Mark",
		country: "Bosnia and Herzegovina",
		countryCode: "BA",
	},
	{
		code: "BBD",
		name: "Barbadian Dollar",
		country: "Barbados",
		countryCode: "BB",
	},
	{
		code: "BDT",
		name: "Bangladeshi Taka",
		country: "Bangladesh",
		countryCode: "BD",
	},
	{
		code: "BGN",
		name: "Bulgarian Lev",
		country: "Bulgaria",
		countryCode: "BG",
	},
	{
		code: "BHD",
		name: "Bahraini Dinar",
		country: "Bahrain",
		countryCode: "BH",
	},
	{
		code: "BIF",
		name: "Burundian Franc",
		country: "Burundi",
		countryCode: "BI",
	},
	{
		code: "BMD",
		name: "Bermudian Dollar",
		country: "Bermuda",
		countryCode: "BM",
	},
	{ code: "BND", name: "Brunei Dollar", country: "Brunei", countryCode: "BN" },
	{
		code: "BOB",
		name: "Bolivian Boliviano",
		country: "Bolivia",
		countryCode: "BO",
	},
	{ code: "BRL", name: "Brazilian Real", country: "Brazil", countryCode: "BR" },
	{
		code: "BSD",
		name: "Bahamian Dollar",
		country: "Bahamas",
		countryCode: "BS",
	},
	{
		code: "BWP",
		name: "Botswana Pula",
		country: "Botswana",
		countryCode: "BW",
	},
	{
		code: "BYR",
		name: "Belarusian Ruble",
		country: "Belarus",
		countryCode: "BY",
	},
	{ code: "BZD", name: "Belize Dollar", country: "Belize", countryCode: "BZ" },
	{
		code: "CAD",
		name: "Canadian Dollar",
		country: "Canada",
		countryCode: "CA",
	},
	{
		code: "CDF",
		name: "Congolese Franc",
		country: "Democratic Republic of the Congo",
		countryCode: "CD",
	},
	{
		code: "CHF",
		name: "Swiss Franc",
		country: "Switzerland",
		countryCode: "CH",
	},
	{ code: "CLP", name: "Chilean Peso", country: "Chile", countryCode: "CL" },
	{ code: "CNY", name: "Chinese Yuan", country: "China", countryCode: "CN" },
	{
		code: "COP",
		name: "Colombian Peso",
		country: "Colombia",
		countryCode: "CO",
	},
	{
		code: "CRC",
		name: "Costa Rican Colón",
		country: "Costa Rica",
		countryCode: "CR",
	},
	{ code: "CUP", name: "Cuban Peso", country: "Cuba", countryCode: "CU" },
	{
		code: "CVE",
		name: "Cape Verdean Escudo",
		country: "Cape Verde",
		countryCode: "CV",
	},
	{
		code: "CZK",
		name: "Czech Koruna",
		country: "Czech Republic",
		countryCode: "CZ",
	},
	{
		code: "DJF",
		name: "Djiboutian Franc",
		country: "Djibouti",
		countryCode: "DJ",
	},
	{ code: "DKK", name: "Danish Krone", country: "Denmark", countryCode: "DK" },
	{
		code: "DOP",
		name: "Dominican Peso",
		country: "Dominican Republic",
		countryCode: "DO",
	},
	{
		code: "DZD",
		name: "Algerian Dinar",
		country: "Algeria",
		countryCode: "DZ",
	},
	{ code: "EGP", name: "Egyptian Pound", country: "Egypt", countryCode: "EG" },
	{
		code: "ETB",
		name: "Ethiopian Birr",
		country: "Ethiopia",
		countryCode: "ET",
	},
	{ code: "EUR", name: "Euro", country: "France", countryCode: "FR" },
	{ code: "FJD", name: "Fijian Dollar", country: "Fiji", countryCode: "FJ" },
	{
		code: "FKP",
		name: "Falkland Islands Pound",
		country: "Falkland Islands",
		countryCode: "FK",
	},
	{
		code: "GBP",
		name: "British Pound Sterling",
		country: "United Kingdom",
		countryCode: "GB",
	},
	{ code: "GEL", name: "Georgian Lari", country: "Georgia", countryCode: "GE" },
	{
		code: "GGP",
		name: "Guernsey Pound",
		country: "Guernsey",
		countryCode: "GG",
	},
	{ code: "GHS", name: "Ghanaian Cedi", country: "Ghana", countryCode: "GH" },
	{
		code: "GIP",
		name: "Gibraltar Pound",
		country: "Gibraltar",
		countryCode: "GI",
	},
	{ code: "GMD", name: "Gambian Dalasi", country: "Gambia", countryCode: "GM" },
	{ code: "GNF", name: "Guinean Franc", country: "Guinea", countryCode: "GN" },
	{
		code: "GTQ",
		name: "Guatemalan Quetzal",
		country: "Guatemala",
		countryCode: "GT",
	},
	{
		code: "GYD",
		name: "Guyanese Dollar",
		country: "Guyana",
		countryCode: "GY",
	},
	{
		code: "HKD",
		name: "Hong Kong Dollar",
		country: "Hong Kong",
		countryCode: "HK",
	},
	{
		code: "HNL",
		name: "Honduran Lempira",
		country: "Honduras",
		countryCode: "HN",
	},
	{ code: "HRK", name: "Croatian Kuna", country: "Croatia", countryCode: "HR" },
	{ code: "HTG", name: "Haitian Gourde", country: "Haiti", countryCode: "HT" },
	{
		code: "HUF",
		name: "Hungarian Forint",
		country: "Hungary",
		countryCode: "HU",
	},
	{
		code: "IDR",
		name: "Indonesian Rupiah",
		country: "Indonesia",
		countryCode: "ID",
	},
	{
		code: "ILS",
		name: "Israeli New Shekel",
		country: "Israel",
		countryCode: "IL",
	},
	{ code: "INR", name: "Indian Rupee", country: "India", countryCode: "IN" },
	{ code: "IQD", name: "Iraqi Dinar", country: "Iraq", countryCode: "IQ" },
	{ code: "IRR", name: "Iranian Rial", country: "Iran", countryCode: "IR" },
	{
		code: "ISK",
		name: "Icelandic Króna",
		country: "Iceland",
		countryCode: "IS",
	},
	{
		code: "JMD",
		name: "Jamaican Dollar",
		country: "Jamaica",
		countryCode: "JM",
	},
	{
		code: "JOD",
		name: "Jordanian Dinar",
		country: "Jordan",
		countryCode: "JO",
	},
	{ code: "JPY", name: "Japanese Yen", country: "Japan", countryCode: "JP" },
	{ code: "KES", name: "Kenyan Shilling", country: "Kenya", countryCode: "KE" },
	{
		code: "KGS",
		name: "Kyrgyzstani Som",
		country: "Kyrgyzstan",
		countryCode: "KG",
	},
	{
		code: "KHR",
		name: "Cambodian Riel",
		country: "Cambodia",
		countryCode: "KH",
	},
	{
		code: "KPW",
		name: "North Korean Won",
		country: "North Korea",
		countryCode: "KP",
	},
	{
		code: "KRW",
		name: "South Korean Won",
		country: "South Korea",
		countryCode: "KR",
	},
	{ code: "KWD", name: "Kuwaiti Dinar", country: "Kuwait", countryCode: "KW" },
	{
		code: "KYD",
		name: "Cayman Islands Dollar",
		country: "Cayman Islands",
		countryCode: "KY",
	},
	{
		code: "KZT",
		name: "Kazakhstani Tenge",
		country: "Kazakhstan",
		countryCode: "KZ",
	},
	{ code: "LAK", name: "Lao Kip", country: "Laos", countryCode: "LA" },
	{
		code: "LBP",
		name: "Lebanese Pound",
		country: "Lebanon",
		countryCode: "LB",
	},
	{
		code: "LKR",
		name: "Sri Lankan Rupee",
		country: "Sri Lanka",
		countryCode: "LK",
	},
	{
		code: "LRD",
		name: "Liberian Dollar",
		country: "Liberia",
		countryCode: "LR",
	},
	{ code: "LSL", name: "Lesotho Loti", country: "Lesotho", countryCode: "LS" },
	{
		code: "MAD",
		name: "Moroccan Dirham",
		country: "Morocco",
		countryCode: "MA",
	},
	{ code: "MDL", name: "Moldovan Leu", country: "Moldova", countryCode: "MD" },
	{
		code: "MGA",
		name: "Malagasy Ariary",
		country: "Madagascar",
		countryCode: "MG",
	},
	{
		code: "MKD",
		name: "Macedonian Denar",
		country: "Macedonia",
		countryCode: "MK",
	},
	{ code: "MMK", name: "Myanmar Kyat", country: "Myanmar", countryCode: "MM" },
	{
		code: "MNT",
		name: "Mongolian Tugrik",
		country: "Mongolia",
		countryCode: "MN",
	},
	{ code: "MOP", name: "Macanese Pataca", country: "Macau", countryCode: "MO" },
	{
		code: "MUR",
		name: "Mauritian Rupee",
		country: "Mauritius",
		countryCode: "MU",
	},
	{
		code: "MVR",
		name: "Maldivian Rufiyaa",
		country: "Maldives",
		countryCode: "MV",
	},
	{
		code: "MWK",
		name: "Malawian Kwacha",
		country: "Malawi",
		countryCode: "MW",
	},
	{ code: "MXN", name: "Mexican Peso", country: "Mexico", countryCode: "MX" },
	{
		code: "MYR",
		name: "Malaysian Ringgit",
		country: "Malaysia",
		countryCode: "MY",
	},
	{
		code: "MZN",
		name: "Mozambican Metical",
		country: "Mozambique",
		countryCode: "MZ",
	},
	{
		code: "NAD",
		name: "Namibian Dollar",
		country: "Namibia",
		countryCode: "NA",
	},
	{
		code: "NGN",
		name: "Nigerian Naira",
		country: "Nigeria",
		countryCode: "NG",
	},
	{
		code: "NOK",
		name: "Norwegian Krone",
		country: "Norway",
		countryCode: "NO",
	},
	{ code: "NPR", name: "Nepalese Rupee", country: "Nepal", countryCode: "NP" },
	{
		code: "NZD",
		name: "New Zealand Dollar",
		country: "New Zealand",
		countryCode: "NZ",
	},
	{ code: "OMR", name: "Omani Rial", country: "Oman", countryCode: "OM" },
	{
		code: "PAB",
		name: "Panamanian Balboa",
		country: "Panama",
		countryCode: "PA",
	},
	{ code: "PEN", name: "Peruvian Sol", country: "Peru", countryCode: "PE" },
	{
		code: "PHP",
		name: "Philippine Peso",
		country: "Philippines",
		countryCode: "PH",
	},
	{
		code: "PKR",
		name: "Pakistani Rupee",
		country: "Pakistan",
		countryCode: "PK",
	},
	{ code: "PLN", name: "Polish Zloty", country: "Poland", countryCode: "PL" },
	{
		code: "PYG",
		name: "Paraguayan Guarani",
		country: "Paraguay",
		countryCode: "PY",
	},
	{ code: "QAR", name: "Qatari Riyal", country: "Qatar", countryCode: "QA" },
	{ code: "RON", name: "Romanian Leu", country: "Romania", countryCode: "RO" },
	{ code: "RUB", name: "Russian Ruble", country: "Russia", countryCode: "RU" },
	{
		code: "SAR",
		name: "Saudi Riyal",
		country: "Saudi Arabia",
		countryCode: "SA",
	},
	{
		code: "SCR",
		name: "Seychellois Rupee",
		country: "Seychelles",
		countryCode: "SC",
	},
	{ code: "SDG", name: "Sudanese Pound", country: "Sudan", countryCode: "SD" },
	{ code: "SEK", name: "Swedish Krona", country: "Sweden", countryCode: "SE" },
	{
		code: "SGD",
		name: "Singapore Dollar",
		country: "Singapore",
		countryCode: "SG",
	},
	{ code: "SYP", name: "Syrian Pound", country: "Syria", countryCode: "SY" },
	{ code: "THB", name: "Thai Baht", country: "Thailand", countryCode: "TH" },
	{
		code: "TJS",
		name: "Tajikistani Somoni",
		country: "Tajikistan",
		countryCode: "TJ",
	},
	{
		code: "TND",
		name: "Tunisian Dinar",
		country: "Tunisia",
		countryCode: "TN",
	},
	{ code: "TRY", name: "Turkish Lira", country: "Turkey", countryCode: "TR" },
	{
		code: "TTD",
		name: "Trinidad and Tobago Dollar",
		country: "Trinidad and Tobago",
		countryCode: "TT",
	},
	{
		code: "TWD",
		name: "New Taiwan Dollar",
		country: "Taiwan",
		countryCode: "TW",
	},
	{
		code: "TZS",
		name: "Tanzanian Shilling",
		country: "Tanzania",
		countryCode: "TZ",
	},
	{
		code: "USD",
		name: "United States Dollar",
		country: "United States",
		countryCode: "US",
	},
	{
		code: "VND",
		name: "Vietnamese Dong",
		country: "Vietnam",
		countryCode: "VN",
	},
	{
		code: "ZAR",
		name: "South African Rand",
		country: "South Africa",
		countryCode: "ZA",
	},
];
