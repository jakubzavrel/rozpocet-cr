// Skutečné výsledky státního rozpočtu a stav státního dluhu na konci roku.
// Rok 2025 záměrně není součástí historie: ve hře jej určuje hráč.
export const fiscalHistory = [
  { year: 2000, balance: -46.1, interest: 17.38, debt: 289.3 },
  { year: 2001, balance: -67.7, interest: 17.61, debt: 345.0 },
  { year: 2002, balance: -45.7, interest: 18.90, debt: 395.9 },
  { year: 2003, balance: -109.1, interest: 21.54, debt: 493.2 },
  { year: 2004, balance: -93.7, interest: 26.77, debt: 592.9 },
  { year: 2005, balance: -56.3, interest: 25.33, debt: 691.2 },
  { year: 2006, balance: -97.6, interest: 31.51, debt: 802.5 },
  { year: 2007, balance: -66.4, interest: 33.98, debt: 892.3 },
  { year: 2008, balance: -20.0, interest: 37.53, debt: 999.8 },
  { year: 2009, balance: -192.4, interest: 44.13, debt: 1178.2 },
  { year: 2010, balance: -156.4, interest: 35.62, debt: 1344.1 },
  { year: 2011, balance: -142.8, interest: 44.97, debt: 1499.4 },
  { year: 2012, balance: -101.0, interest: 41.06, debt: 1667.6 },
  { year: 2013, balance: -81.3, interest: 50.56, debt: 1683.3 },
  { year: 2014, balance: -77.8, interest: 48.29, debt: 1663.7 },
  { year: 2015, balance: -62.8, interest: 45.08, debt: 1673.0 },
  { year: 2016, balance: 61.8, interest: 40.38, debt: 1613.4 },
  { year: 2017, balance: -6.2, interest: 39.43, debt: 1624.7 },
  { year: 2018, balance: 2.9, interest: 40.62, debt: 1622.0 },
  { year: 2019, balance: -28.5, interest: 39.40, debt: 1640.2 },
  { year: 2020, balance: -367.4, interest: 39.97, debt: 2049.7 },
  { year: 2021, balance: -419.7, interest: 42.00, debt: 2465.7 },
  { year: 2022, balance: -360.4, interest: 49.46, debt: 2894.8 },
  { year: 2023, balance: -288.5, interest: 68.21, debt: 3110.9 },
  { year: 2024, balance: -271.4, interest: 88.31, debt: 3365.2 }
];

export const fiscalHistorySources = {
  balance: 'https://mf.gov.cz/cs/rozpoctova-politika/statni-rozpocet/plneni-statniho-rozpoctu',
  interest: 'https://mf.gov.cz/cs/rozpoctova-politika/rizeni-statniho-dluhu/statistiky/ciste-vydaje-na-obsluhu-statniho-dluhu',
  debt: 'https://mf.gov.cz/cs/rozpoctova-politika/rizeni-statniho-dluhu/statistiky/struktura-a-vyvoj-statniho-dluhu'
};
