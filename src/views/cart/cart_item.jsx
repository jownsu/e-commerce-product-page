import { useContext } from "react";
import CartContext from "../../context/cart_context";
import DeleteIcon from "../../assets/images/icon-delete.svg";

const CartItem = ({item}) => {
    const { id, name, price, quantity, image } = item;
    const total_amount = price * quantity;

    const { deleteProduct } = useContext(CartContext);

    const onDeleteClick = () => {
        deleteProduct(id);
    }

    return (
        <div className="cart_item">
            <img src={require(`../../assets/images/${image}`)} alt={name} />
            <div>
                <p className="cart_item_name">{name}</p>
                <p className="cart_item_price">${price.toFixed(2)} x {quantity} <span>${total_amount.toFixed(2)}</span></p>
            </div>
            <button className="cart_delete" onClick={onDeleteClick}>
                <img src={DeleteIcon} alt="delete icon" />
            </button>
        </div>
    )
}

export default CartItem