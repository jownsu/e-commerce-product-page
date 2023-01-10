import CartItem from "./cart_item"
import Button from "../button/button";
import "./cart.scss";

const CartList = () => {
    const testData = [
        {
            id: "1",
            name: "Fall Limited Edition Sneakers",
            price: 125,
            quantity: 3,
            image: "image-product-1-thumbnail.jpg"
        }
    ];

    if(testData.length < 1){
        return <p className="cart_empty">Your Cart is empty</p>
    }

    return (
        <>
            <ul>
                {testData.map(item => <CartItem key={item.id} item={item} />)}
            </ul>
            <Button className="cart_checkout">Checkout</Button>
        </>
    )
}

export default CartList