import React from 'react';
import './About.sass';

export const About: React.FC = () => {
    return (
        <section id="about" className="block about">
            <div className="container about-content">
                <div className="title about-title">
                    <span className="title-decor about-title__decor">
                        About
                    </span>
                    <h2 className="title-text about-title__text">About</h2>
                </div>
                <div className="about-wrap">
                    <div className="about-gallery">
                        <img
                            className="about-gallery__img"
                            src="https://media-cdn.tripadvisor.com/media/photo-s/13/56/2f/82/pizza-istria-mit-rucola.jpg"
                            alt="pizzeria"
                        />
                        <img
                            className="about-gallery__img"
                            src="https://media-cdn.tripadvisor.com/media/photo-s/18/90/66/83/pizzeria-astra.jpg"
                            alt="pizzeria"
                        />
                        <img
                            className="about-gallery__img"
                            src="https://pizzeriagema.com/app/uploads/sites/3/2019/08/mg_1722-640x860.jpg"
                            alt="pizzeria"
                        />
                    </div>
                    <div className="about-info">
                        <h4 className="about-info__title">Welcome to us!</h4>
                        <div className="about-info__desc">
                            <p>
                                Italy has many variations of pizza. The
                                Neapolitan pizza, or Naples-style pizza, is made
                                specifically with buffalo mozzarella (produced
                                from the milk of Italian Mediterranean buffalo)
                                or fior di latte (mozzarella produced from the
                                milk of prized Agerolese cows) and with San
                                Marzano tomatoes or pomodorino vesuviano (a
                                variety of grape tomato grown in Naples).
                            </p>
                            <p>
                                Roman pizza often omits tomatoes (an early
                                16th-century import) and uses onions and olives.
                                The Ligurian pizza resembles the pissaladière of
                                Provence in France, adding anchovies to olives
                                and onions.
                            </p>
                        </div>
                        <button className="btn btn-solid about-info__btn">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
