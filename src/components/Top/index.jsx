import './Top.sass';
import image from '../../assets/images/top.png';

const Top = () => {
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
                        <button className="btn btn-solid top-offer__btn">
                            <span>Menu</span>
                        </button>
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

export default Top;