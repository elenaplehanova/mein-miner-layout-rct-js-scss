import React from "react";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import "./ButtonArrow.scss";

const ButtonArrow = ({ className, children }) => {
    return (
        <button className={`button-arrow ${className ? className : ""}`}>
            <a className="button-arrow__link" href="#catalog">
                {children}
                <ArrowIcon className="button-arrow__icon" />
            </a>
        </button>
    );
};

export default ButtonArrow;
