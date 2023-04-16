import Button from "../Button/Button";
import React from "react";
import "./ButtonWhite.scss";

const ButtonWhite = ({ className, children }) => {
    return <Button className={`${className ? className : ""} white-button`}>{children}</Button>;
};

export default ButtonWhite;
