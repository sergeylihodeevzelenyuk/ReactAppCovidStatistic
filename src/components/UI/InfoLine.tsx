import useInfoLineEventsHandler from "../../hooks/use-infoLine-handler";

import { Country } from "../../models";

import classes from "./InfoLine.module.scss";

const InfoLine: React.FC<{ headingRole: boolean; data: Country }> = (props) => {
  const {
    onInfoLineClickHandler,
    onCountryNameClickHandler,
    onQuantityClickHandler,
  } = useInfoLineEventsHandler(props);

  const { headingRole, data } = props;

  const infoLineClasses = headingRole
    ? `${classes.info} ${classes.heading}`
    : classes.info;

  return (
    <div className={infoLineClasses} onClick={onInfoLineClickHandler}>
      <span className={classes.index}>{data.index}</span>
      <span className={classes.country} onClick={onCountryNameClickHandler}>
        {data.name}
      </span>
      <span className={classes.quantity} onClick={onQuantityClickHandler}>
        {data.quantity}
      </span>
    </div>
  );
};

export default InfoLine;
