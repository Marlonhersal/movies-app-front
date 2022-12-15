import React from 'react';

import '../styles/welcome.css'

function Welcome(props) {
    return (
        <section id="welcome" className="main-welcome-container">
            <div className="welcome--title"> 
                <h2>Movies App</h2>
                <p>Miles de titulos al alcance de un click desde 99 peso</p>
            </div>
            <section className="welcome-container--slider">
                <article className="welcome-container--card">
                    <div className="message-info-container">
                        <h3 className="message-card--title">Bienvenido a Movies App</h3>
                        <p className="message-card-price"><span>$</span> 99</p>
                        <p className="message-card-saving">*Ahorras $129 comparado al message mensual.</p>
                        <button className="message-card--ca">Escoger este<span></span></button>
                    </div>
                </article>
                <article className="welcome-container--card">
                    <div className="message-info-container">
                        <h3 className="message-card--title">Pago Anual</h3>
                        <p className="message-card-price"><span>$</span> 99</p>
                        <p className="message-card-saving">*Ahorras $129 comparado al message mensual.</p>
                        <button className="message-card--ca">Escoger este<span></span></button>
                    </div>
                </article>
                <article className="welcome-container--card">
                    <div className="message-info-container">
                        <h3 className="message-card--title">Pago Anual</h3>
                        <p className="message-card-price"><span>$</span> 99</p>
                        <p className="message-card-saving">*Ahorras $129 comparado al message mensual.</p>
                        <button className="message-card--ca">Escoger este<span></span></button>
                    </div>
                </article>
            </section>

        </section>
    );
}

export default Welcome;