import Button from "../../button/button"
import CartIcon from "./cart_icon";
import "./add_to_cart.scss";

const AddToCart = () => {
    return (
        <Button className="add_to_cart">
            <CartIcon />
            Add to cart
        </Button>
    )
}

export default AddToCart