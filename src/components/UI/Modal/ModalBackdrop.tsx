import React from "react";
import { CSSTransition } from "react-transition-group";

import { ModalProps } from "../../../models";

import classes from "./ModalBackdrop.module.scss";

const ModalBackdrop = (props: ModalProps) => {
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
        enterActive: classes.modalBackdrop_open,
        exitActive: classes.modalBackdrop_close,
      }}
    >
      <div className={classes.modalBackdrop} onClick={props.onModalClose}></div>
    </CSSTransition>
  );
};

export default ModalBackdrop;
