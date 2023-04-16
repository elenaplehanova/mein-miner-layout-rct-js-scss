import "./Button.scss";
import React from "react";

const Button = ({ className, children }) => {
    return <button className={`button-base ${className ? className : ""}`}>{children}</button>;
};

export default Button;
