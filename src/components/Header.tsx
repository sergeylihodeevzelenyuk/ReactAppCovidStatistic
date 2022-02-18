import Search from "./UI/Search";

import classes from "./Header.module.scss";

import MainLogo from "../assets/icons/MainLogo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          src={MainLogo}
          alt="Covid Statistic Logo"
          className={classes.logo_item}
        />
        <span className={classes.logo_content}>STATISTIC</span>
      </div>
      <div className={classes.search_wrap}>
        <Search />
      </div>
    </header>
  );
};

export default Header;
