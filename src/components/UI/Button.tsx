import { ButtonProps } from "../../models";

import classes from "./Button.module.scss";

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      OK
    </button>
  );
};

export default Button;
