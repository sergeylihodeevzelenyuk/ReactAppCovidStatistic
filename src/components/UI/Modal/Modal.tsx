import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/index";

import Button from "../Button";

import { ModalProps } from "../../../models";

import classes from "./Modal.module.scss";

const Modal = (props: ModalProps) => {
  const selectedCountry = useSelector(
    (state: RootState) => state.data.selectedCountry
  );

  const animationTiming = {
    enter: 400,
    exit: 400,
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enterActive: classes.details_open,
        exitActive: classes.details_close,
      }}
    >
      <section className={classes.details}>
        <h5 className={classes.details_heading}>
          {selectedCountry.countryName}
        </h5>
        <p className={classes.details_confirmed}>
          Total Confirmed
          <span>{selectedCountry.totalConfirmed}</span>
        </p>
        <p className={classes.details_deaths}>
          Total Deaths
          <span>{selectedCountry.totalDeaths}</span>
        </p>
        <p className={classes.details_recovered}>
          Total Recovered
          <span>{selectedCountry.totalRecovered}</span>
        </p>
        <Button onClick={props.onModalClose} />
      </section>
    </CSSTransition>
  );
};

export default Modal;
