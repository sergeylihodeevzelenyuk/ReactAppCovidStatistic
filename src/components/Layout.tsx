import { LayoutChildren } from "../models";

import classes from "./Layout.module.scss";

const Layout = (props: LayoutChildren) => {
  return <div className={classes.layout}>{props.children}</div>;
};

export default Layout;
