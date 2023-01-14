import { useState, useContext } from "react";
import CartContext from "../../context/cart_context";
import Cart from "../cart/cart";
import CartIcon from "../../assets/images/icon-cart.svg";
import MenuIcon from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-close.svg";
import "./navigation.scss";

const Navigation = () => {
    const { products } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);
    const [activeNavLink, setActiveNavLink] = useState(false);

    const onCartClick = () => {
        setShowCart(prevState => !prevState);
    }

    const onMenuClick = () => {
        setActiveNavLink(true);
    }

    const onCloseClick = () => {
        setActiveNavLink(false);
    }

    return (
        <nav className="nav">
            <a href="/" className="nav_title">sneakers</a>
            <button className="nav_menu" onClick={onMenuClick}><img src={MenuIcon} alt="menu-icon" /></button>
            <ul className={`nav_links ${activeNavLink ? "active" : ""}`}>
                <li className="nav_close">
                    <button onClick={onCloseClick}><img src={CloseIcon} alt="close icon" /></button>
                </li>
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="nav_side">
                <div className="nav_cart">
                    <button className="nav_btn_cart" onClick={onCartClick}>
                        <img src={CartIcon} alt="cart icon" />
                        { 
                            products.length > 0
                            ? <span>{products.reduce((total, product) => total + product.quantity, 0)}</span>
                            : null
                        }
                    </button>
                    { showCart && <Cart /> }
                </div>
                <button className="nav_user">
                    <img src={require("../../assets/images/image-avatar.png")} alt="avatar" />
                </button>
            </div>
            <div className={`nav_backdrop ${activeNavLink ? "active" : ""}`} onClick={onCloseClick}></div>
        </nav>
    )
}

export default Navigation;