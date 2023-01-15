import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}><img src={mealsImage} alt = "img header" /></div>
    </React.Fragment>
}

export default Header;