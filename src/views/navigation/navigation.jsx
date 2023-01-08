import CartIcon from "../../assets/images/icon-cart.svg";
import "./navigation.scss";

const Navigation = () => {
    return (
        <nav className="nav">
            <a href="/" className="nav_title">sneakers</a>
            <ul className="nav_links">
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="nav_side">
                <button className="nav_cart">
                    <img src={CartIcon} alt="cart icon" />
                </button>
                <button className="nav_user">
                    <img src={require("../../assets/images/image-avatar.png")} alt="avatar" />
                </button>
            </div>
        </nav>
    )
}

export default Navigation;