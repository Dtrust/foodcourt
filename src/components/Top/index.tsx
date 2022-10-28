import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Top.sass';
import image from '../../assets/images/top.png';

export const Top: React.FC = () => {
    return (
        <section className="block-top top">
            <h1 className="visually-hidden">Pizza delivery service</h1>
            <div className="container top-content">
                <div className="top-offer">
                    <div className="top-offer__wrap">
                        <p className="top-offer__title">
                            Enjoy the&nbsp;taste&nbsp;of
                            <br />
                            <span>Italian&nbsp;pizza</span>
                            <br />
                            in&nbsp;our restaurant
                        </p>
                        <HashLink
                            to={'/#menu'}
                            smooth
                            title={'Menu'}
                            className="btn btn-solid top-offer__btn"
                        >
                            <span>Menu</span>
                        </HashLink>
                        <ul className="top-offer__features features">
                            <li className="features-item">
                                <p className="features-item__text">
                                    Italian
                                    <br />
                                    recipes
                                </p>
                            </li>
                            <li className="features-item">
                                <p className="features-item__text">
                                    Only fresh
                                    <br />
                                    ingredients
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="top-offer__wrap">
                        <img
                            className="top-offer__img"
                            src={image}
                            alt="pizza"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
