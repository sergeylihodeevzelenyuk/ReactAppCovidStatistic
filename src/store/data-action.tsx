import { dataActions } from "./data-slice";
import { uiActions } from "./ui-slice";

import { notifications } from "../variables";

import { CountryDetailedData } from "../models";

const sortData = (unsortedData: any[]) => {
  const sortedData: CountryDetailedData[] = [];

  unsortedData.forEach((country, index) => {
    sortedData.push({
      countryName: country.Country,
      totalConfirmed: country.TotalConfirmed,
      totalDeaths: country.TotalDeaths,
      totalRecovered: country.TotalRecovered,
      id: country.ID,
      index: index + 1,
    });
  });

  return sortedData;
};

export const fetchCountriesData = () => {
  return async (dispatch: Function) => {
    const fetchData = async () => {
      const response = await fetch("https://api.covid19api.com/summary", {
        method: "GET",
        redirect: "follow",
      });
      let data = [];

      if (response.ok) {
        data = await response.json();
      } else {
        throw new Error(`${notifications.httpError} ${response.status}`);
      }

      return data.Countries;
    };

    try {
      const fetchedData = await fetchData();
      const sortedData = sortData(fetchedData);

      dispatch(dataActions.setCountries(sortedData));
    } catch (error: any) {
      dispatch(uiActions.showNotification(error!.message));
    } finally {
      dispatch(uiActions.toggleLoadingVisability());
    }
  };
};
