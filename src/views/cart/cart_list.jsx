import { useContext } from "react";
import CartContext from "../../context/cart_context";
import CartItem from "./cart_item"
import Button from "../button/button";
import "./cart.scss";

const CartList = () => {

    const { products, checkout } = useContext(CartContext);

    if(products.length < 1){
        return <p className="cart_empty">Your Cart is empty</p>
    }

    const onCheckOutClick = () => {
        checkout();
    }

    return (
        <>
            <ul>
                {products.map(item => <CartItem key={item.id} item={item} />)}
            </ul>
            <Button className="cart_checkout" onClick={onCheckOutClick}>Checkout</Button>
        </>
    )
}

export default CartList