import countryList from "./countries.json";

interface ICountry {
  code: string;
  name: string;
  native: string;
  phone: number[];
  continent: string;
  capital: string;
  currency: string[];
  languages: string[];
}

const allCountries: any = { ...countryList };
const countries = Object.keys(countryList).map((country) => ({
  code: country,
  ...allCountries[country],
}));
const CountryList: ICountry[] = countries;

export { CountryList };
