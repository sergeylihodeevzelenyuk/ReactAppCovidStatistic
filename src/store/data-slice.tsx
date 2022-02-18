import { createSlice } from "@reduxjs/toolkit";

import { DataSlice } from "../models";

import {
  selectCountryById,
  filtereByInputValue,
  sortByAscending,
  sortByDescending,
  sortAlphabetically,
  sortInreverseOrder,
} from "./data-workers";

const initialState: DataSlice = {
  countries: [],
  filteredCoutries: [],
  selectedCountry: {
    id: "",
    index: 0,
    countryName: "",
    totalConfirmed: 0,
    totalDeaths: 0,
    totalRecovered: 0,
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = state.countries.concat(action.payload);
    },
    setSelectedCountry(state, action) {
      state.selectedCountry = selectCountryById(
        state.countries,
        action.payload
      );
    },
    setFilteredByInputValue(state, action) {
      state.filteredCoutries = filtereByInputValue(
        state.countries,
        action.payload
      );
    },
    setSortedByAscending(state, action) {
      if (action.payload) {
        state.filteredCoutries = sortByAscending(state.filteredCoutries);

        return;
      }
      state.countries = sortByAscending(state.countries);
    },
    setSortedByDescending(state, action) {
      if (action.payload) {
        state.filteredCoutries = sortByDescending(state.filteredCoutries);

        return;
      }
      state.countries = sortByDescending(state.countries);
    },
    setSortedByAlphabetical(state, action) {
      if (action.payload) {
        state.filteredCoutries = sortAlphabetically(state.filteredCoutries);

        return;
      }
      state.countries = sortAlphabetically(state.countries);
    },
    setSortedByReversOrder(state, action) {
      if (action.payload) {
        state.filteredCoutries = sortInreverseOrder(state.filteredCoutries);

        return;
      }

      state.countries = sortInreverseOrder(state.countries);
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
