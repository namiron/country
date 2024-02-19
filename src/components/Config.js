

const baseURL = 'https://restcountries.com/v3.1/'

export const ALL_COUNTRIES = baseURL + 'all?=name,capital,flags,population,region'

export const searchByCountry = (name) => baseURL + "name/" + name;

export const filterByCode = (codes) => baseURL + 'alpha?codes=' + codes.join(',')