import React, { useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoopingCart from '@icons/icon_shopping_cart.svg';
import '@style/Header.scss';

const Header = () => {
    const {state, toggleOrder, toggleMenu} = useContext(AppContext);

    return (
        <>
            <nav>
                <img src={menu} alt="menu" className="menu" />
                <div className="navbar-left">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <ul>
                        <li>
                            <a href="/">All</a>
                        </li>
                        <li>
                            <a href="/">Clothes</a>
                        </li>
                        <li>
                            <a href="/">Electronics</a>
                        </li>
                        <li>
                            <a href="/">Furniture</a>
                        </li>
                        <li>
                            <a href="/">Toys</a>
                        </li>
                        <li>
                            <a href="/">Others</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li className="more-clickable-area navbar-email poiner" onClick={() => toggleMenu()}>
                            edithbalbouze@example.com
                        </li>
                        <li className="navbar-shooping-cart" onClick={() => toggleOrder}>
                            <img className='more-clickable-area pointer' src={shoopingCart} alt="shooping cart" />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
                        </li>
                    </ul>
                </div>
                {state.menuIsOpen && <Menu />}
            </nav>
            {state.orderIsOpen && <MyOrder />}
        </> 
    );
}

export default Header;