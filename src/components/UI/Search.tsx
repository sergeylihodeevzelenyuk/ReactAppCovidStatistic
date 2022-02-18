import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { dataActions } from "../../store/data-slice";
import { uiActions } from "../../store/ui-slice";

import classes from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const isInputActive = useSelector(
    (state: RootState) => state.ui.isSearchActiv
  );

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isInputActive) {
      dispatch(uiActions.toggleIsSearchActiv());
    }

    if (e.target.value.trim() === "") {
      dispatch(uiActions.toggleIsSearchActiv());
    }

    dispatch(dataActions.setFilteredByInputValue(e.target.value));
  };

  return (
    <div className={classes.search}>
      <input
        type="search"
        placeholder="Search..."
        onChange={inputChangeHandler}
        className={classes.search_item}
      />
      <span className={classes.search_icon}></span>
    </div>
  );
};

export default Search;
