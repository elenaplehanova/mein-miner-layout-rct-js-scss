import ButtonWhite from "../ButtonWhite/ButtonWhite";
import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <h2 className="footer-columns__logo">Mein Miner</h2>
                <p className="footer-columns__copyright">© Mein Miner, 2022</p>
                <h3 className="footer-columns__title">Покупателям</h3>
                <ul className="footer-columns__list">
                    <li>
                        <a className="footer-columns__list-link" href="#about">
                            О компании
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#price">
                            Цены
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#calculator">
                            Калькулятор
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#delivery">
                            Доставка
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#feedback">
                            Отзывы
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#contact">
                            Контакты
                        </a>
                    </li>
                </ul>

                <h3 className="footer-columns__title">Каталог Товаров</h3>
                <ul className="footer-columns__list">
                    <li>
                        <a className="footer-columns__list-link" href="#asic_miners">
                            Asic miners
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#gpu_farm">
                            GPU фермы
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#video_card">
                            Видеокарты
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#accessories">
                            Аксессуары
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#computer_components">
                            Компьютерные комплектующие
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#mining_accessories">
                            Комплектующие для майнинга
                        </a>
                    </li>
                </ul>

                <ButtonWhite className="footer-columns__button">Заказать звонок</ButtonWhite>
                <ul className="footer-columns__list footer-columns__list-bottom">
                    <li>
                        <a className="footer-columns__list-link" href="#public_offer">
                            Публичная оферта
                        </a>
                    </li>
                    <li>
                        <a className="footer-columns__list-link" href="#privacy_policy">
                            Политика конфиденциальности
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
