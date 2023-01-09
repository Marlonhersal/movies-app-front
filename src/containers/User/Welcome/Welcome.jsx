import React from 'react';
import {Link } from "react-router-dom";
import Style from './Welcome.module.scss'

function Welcome(props) {
    return (
        <section id="welcome" className={Style.main_welcome_container}>
            <div className={Style.welcome_title}> 
                <h2>Movies App</h2>
                <p>Miles de titulos al alcance de un click desde 99 peso</p>
            </div>
            <section className={Style.welcome_container__slider}>
                <article className={Style.welcome_container__card}>
                    <div className={Style.message_info_container}>
                        <h3 className={Style.message_card__title}>Bienvenido a Movies App</h3>
                        <p className={Style.message_card_price}><span>$</span> 99</p>
                        <p className={Style.message_card_saving}>The best movie streaming app of the country to make your days greatfull</p>
                        
                    </div>
                </article>
                <article className={Style.welcome_container__card}>
                    <div className={Style.message_info_container}>
                        <h3 className={Style.message_card__title}>Enjoy Your Movies </h3>
                        <p className={Style.message_card_price}><span>$</span> 99</p>
                        <p className={Style.message_card_saving}>The best movie streaming app of the country to make your days greatfull</p>
                    </div>
                </article>
                <article className={Style.welcome_container__card}>
                    <div className={Style.message_info_container}>
                        <h3 className={Style.message_card__title}>Enjoy Your Movies </h3>
                        <p className={Style.message_card_price}><span>$</span> 99</p>
                        <p className={Style.message_card_saving}>The best movie streaming app of the country to make your days greatfull</p>
                    </div>
                </article>
            </section>
            <button className={Style.start_button}><Link to="/login">Comenzar</Link></button>
        </section>
    );
}

export default Welcome;