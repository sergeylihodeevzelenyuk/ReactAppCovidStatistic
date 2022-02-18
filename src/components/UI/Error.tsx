import classes from "./Error.module.scss";

const Error: React.FC<{
  message: string;
}> = (props) => {
  return <p className={classes.error}>{props.message}</p>;
};

export default Error;
