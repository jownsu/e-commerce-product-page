import "./cart.scss";
import CartList from "./cart_list";

const Cart = () => {
    return (
        <div className="cart">
            <h3>Cart</h3>
            <div className="cart_main">
                <CartList />
            </div>
        </div>
    )
}

export default Cart