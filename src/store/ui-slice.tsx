import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoadingVisible: true,
    isModalVisible: false,
    isSearchActiv: false,
    httpNotification: "",
  },
  reducers: {
    toggleLoadingVisability(state) {
      state.isLoadingVisible = !state.isLoadingVisible;
    },
    toggleIsModalVisible(state) {
      state.isModalVisible = !state.isModalVisible;
    },
    showNotification(state, action) {
      state.httpNotification = action.payload;
    },
    toggleIsSearchActiv(state) {
      state.isSearchActiv = !state.isSearchActiv;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
