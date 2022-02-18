import { CountryDetailedData } from "../models";

export const selectCountryById = (
  countries: CountryDetailedData[],
  id: string
) => {
  return countries.find((country) => country.id === id)!;
};

export const filtereByInputValue = (
  countries: CountryDetailedData[],
  value: string
) => {
  return countries.filter((country) =>
    country.countryName.toLowerCase().includes(value.toLowerCase())
  );
};

export const sortByAscending = (countries: CountryDetailedData[]) => {
  return countries.sort((a, b) => b.totalConfirmed - a.totalConfirmed);
};

export const sortByDescending = (countries: CountryDetailedData[]) => {
  return countries.sort((a, b) => a.totalConfirmed - b.totalConfirmed);
};

export const sortAlphabetically = (countries: CountryDetailedData[]) => {
  const compareNames = (
    countryA: CountryDetailedData,
    countruB: CountryDetailedData
  ) => {
    return countryA.countryName.localeCompare(countruB.countryName);
  };

  return countries.sort(compareNames);
};

export const sortInreverseOrder = (countries: CountryDetailedData[]) => {
  const compareNames = (
    countryA: CountryDetailedData,
    countruB: CountryDetailedData
  ) => {
    return countruB.countryName.localeCompare(countryA.countryName);
  };

  return countries.sort(compareNames);
};
