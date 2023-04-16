import Button from "../Button/Button";
import ButtonNotification from "../ButtonNotification/ButtonNotification";
import ButtonRound from "../ButtonRound/ButtonRound";
import "./Header.scss";
import React from "react";

const Header = () => {
    return (
        <>
            <header className="header-first">
                <div className="header-first-elements">
                    <div className="header-first-elements__contacts">
                        <img src="/assets/icons/email.svg" alt="email" />
                        <p>mein@miner.com</p>
                        <img
                            className="contacts__phone"
                            src="/assets/icons/phone.svg"
                            alt="phone"
                        />
                        <p>+7 (999) 999-99-99</p>
                    </div>
                    <div className="header-first-elements__socialmedia">
                        <img src="/assets/icons/telegram.svg" alt="telegram" />
                        <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
                    </div>
                </div>
            </header>
            <header className="header-second">
                <div className="header-second-elements">
                    <p className="header-second-elements__logo">Mein Miner</p>
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__list-item">
                                <a
                                    href="#catalog"
                                    className="navigation__list-link button-dropdown"
                                    role="button"
                                >
                                    Каталог товаров
                                </a>
                            </li>
                            <li className="navigation__list-item">
                                <a className="navigation__list-link" href="#price">
                                    Цены
                                </a>
                            </li>
                            <li className="navigation__list-item">
                                <a className="navigation__list-link" href="#calculator">
                                    Калькулятор
                                </a>
                            </li>
                            <li className="navigation__list-item">
                                <a className="navigation__list-link" href="#delivery">
                                    Доставка
                                </a>
                            </li>
                            <li className="navigation__list-item">
                                <a className="navigation__list-link" href="#feedback">
                                    Отзывы
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Button>Заказать звонок</Button>
                    <nav className="navbar">
                        <ButtonRound></ButtonRound>
                        <ButtonNotification></ButtonNotification>
                        <ButtonNotification></ButtonNotification>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
