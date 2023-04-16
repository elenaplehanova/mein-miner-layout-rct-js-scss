import ButtonArrow from "../ButtonArrow/ButtonArrow";
import ButtonWhite from "../ButtonWhite/ButtonWhite";
import React from "react";
import "./Main.scss";

const Main = () => {
    return (
        <main className="main">
            <section className="banners">
                <div className="banner banner-first">
                    <h1 className="banner-first__title">оборудование для майнинга оптом</h1>
                    <p className="banner-first__text">с гарантией 12 месяцев</p>
                    <ButtonWhite className="banner-first__button">Перейти в каталог</ButtonWhite>
                    <img
                        className="banner-first__image"
                        src="/assets/banners/image-mining-equipment.png"
                        alt="оборудование для майнинга"
                    />

                    <ul className="dot-list">
                        <a href="#pageone">
                            <li className="dot dot-active"></li>
                        </a>
                        <a href="#pagetwo">
                            <li className="dot "></li>
                        </a>
                        <a href="#pagethree">
                            <li className="dot "></li>
                        </a>
                        <a href="#pagethree">
                            <li className="dot "></li>
                        </a>
                    </ul>
                </div>
                <div className="banner banner-second">
                    <h1 className="banner-second__title">выгодное предложение</h1>
                    <p className="banner-second__text-large">-20%</p>
                    <p className="banner-second__text">на все товары Antminer</p>
                    <img
                        className="banner-second__image"
                        src="/assets/banners/background-image-vector_banner-second.svg"
                        alt="bitcoin chart"
                    />
                    <ButtonArrow className="banner-second__button">В каталог</ButtonArrow>
                </div>
            </section>
            <section className="categories"></section>

            <section className="advantages"></section>

            <section className="bestsellers"></section>

            <section className="about"></section>

            <section className="help"></section>

            <section className="contacts"></section>
        </main>
    );
};

export default Main;
