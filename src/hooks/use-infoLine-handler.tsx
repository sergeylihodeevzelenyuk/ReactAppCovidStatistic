import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../store/ui-slice";
import { dataActions } from "../store/data-slice";

import { RootState } from "../store";
import { SortingMode } from "../variables";

import { Country } from "../models";

const useInfoLineEventsHandler = (props: {
  headingRole: boolean;
  data: Country;
}) => {
  const dispatch = useDispatch();

  const [quantitySortingMode, setQuantitySortingMode] = useState(
    SortingMode.default
  );
  const [countryNameSortingMode, setCountryNameSortingMode] = useState(
    SortingMode.alphabetical
  );
  const isInputActive = useSelector(
    (state: RootState) => state.ui.isSearchActiv
  );
  const { headingRole, data } = props;

  const onInfoLineClickHandler = headingRole
    ? () => {}
    : () => {
        dispatch(uiActions.toggleIsModalVisible());
        dispatch(dataActions.setSelectedCountry(data.id));
      };

  const onCountryNameClickHandler = !headingRole
    ? () => {}
    : () => {
        if (countryNameSortingMode === SortingMode.alphabetical) {
          dispatch(dataActions.setSortedByReversOrder(isInputActive));
          setCountryNameSortingMode(SortingMode.reverseOrder);
        } else {
          dispatch(dataActions.setSortedByAlphabetical(isInputActive));
          setCountryNameSortingMode(SortingMode.alphabetical);
        }
      };

  const onQuantityClickHandler = !headingRole
    ? () => {}
    : () => {
        if (quantitySortingMode === SortingMode.default) {
          dispatch(dataActions.setSortedByAscending(isInputActive));
          setQuantitySortingMode(SortingMode.ascending);
        }

        if (quantitySortingMode === SortingMode.ascending) {
          dispatch(dataActions.setSortedByDescending(isInputActive));
          setQuantitySortingMode(SortingMode.descending);
        }

        if (quantitySortingMode === SortingMode.descending) {
          setQuantitySortingMode(SortingMode.ascending);
          dispatch(dataActions.setSortedByAscending(isInputActive));
        }
      };

  return {
    onInfoLineClickHandler,
    onCountryNameClickHandler,
    onQuantityClickHandler,
  };
};

export default useInfoLineEventsHandler;
