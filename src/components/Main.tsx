import { useDispatch, useSelector } from "react-redux";

import InfoLine from "./UI/InfoLine";
import Modal from "./UI/Modal/Modal";
import ModalBackdrop from "./UI/Modal/ModalBackdrop";
import LoadingIndicator from "./UI/LoadingIndicator";
import Error from "./UI/Error";

import { uiActions } from "../store/ui-slice";
import { RootState } from "../store";

import { CountryRenderData } from "../models";

import { headingContent, notifications } from "../variables";

const Main = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: RootState) => state.data.countries);
  const filteredCoutries = useSelector(
    (state: RootState) => state.data.filteredCoutries
  );
  const isLoadingVisible = useSelector(
    (state: RootState) => state.ui.isLoadingVisible
  );
  const isModalVisible = useSelector(
    (state: RootState) => state.ui.isModalVisible
  );
  const isInputActive = useSelector(
    (state: RootState) => state.ui.isSearchActiv
  );
  const httpError = useSelector(
    (state: RootState) => state.ui.httpNotification
  );

  const onModalCloseHandler = () => {
    dispatch(uiActions.toggleIsModalVisible());
  };

  let countriesForRender = countries;

  if (filteredCoutries.length !== 0 && isInputActive) {
    countriesForRender = filteredCoutries;
  }

  const wrongUserRequest = filteredCoutries.length === 0 && isInputActive;

  return (
    <main>
      <InfoLine headingRole={true} data={headingContent} />
      {isLoadingVisible && <LoadingIndicator />}
      {httpError && <Error message={httpError} />}
      {!httpError && wrongUserRequest ? (
        <Error message={notifications.searchError} />
      ) : (
        <div>
          {countriesForRender.map((country: CountryRenderData) => (
            <InfoLine
              headingRole={false}
              key={country.id}
              data={{
                index: country.index,
                id: country.id,
                name: country.countryName,
                quantity: country.totalConfirmed,
              }}
            />
          ))}
        </div>
      )}
      <Modal show={isModalVisible} onModalClose={onModalCloseHandler} />
      <ModalBackdrop show={isModalVisible} onModalClose={onModalCloseHandler} />
    </main>
  );
};

export default Main;
