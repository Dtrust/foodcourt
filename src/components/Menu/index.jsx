import { Categories, Product, Sort } from '../index';

import './Menu.sass';

import products from '../../assets/db.json';

const Menu = () => {
    return (
        <section className="block menu">
            <div className="container menu-content">
                <div className="title menu-title">
                    <span className="title-decor menu-title__decor">Menu</span>
                    <h2 className="title-text menu-title__text">Menu</h2>
                </div>
                <div className="menu-categories categories">
                    <Categories />
                </div>
                <div className="menu-sort">
                    <Sort />
                </div>
                <div className="menu-products">
                    {products.map(obj => (
                        <Product key={obj.id} {...obj} />
                    ))}
                </div>
                <div className="menu-showmore">
                    <button className="btn btn-transparent menu-showmore__btn">
                        Show more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;
