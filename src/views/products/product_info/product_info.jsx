import { useState, useContext } from "react";
import CartContext from "../../../context/cart_context";
import Quantity from "../quantity/quantity";
import AddToCart from "../add_to_cart/add_to_cart";
import "./product_info.scss";

const DUMMY_PRODUCT = {
    id: "1",
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker company",
    description: "These low-profile sneakers are your perfect casual weak companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 125,
    prev_price: 240,
    discount:  50,
    image: "image-product-1-thumbnail.jpg"
}

const ProductInfo = () => {

    const { addProduct } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const onPlusClick = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const onMinusClick = () => {
        setQuantity(prevQuantity => {
            if(prevQuantity > 1){
                return prevQuantity - 1
            }

            return prevQuantity;
        });
    }

    const onCartClick = () => {
        addProduct({
            id: DUMMY_PRODUCT.id,
            name: DUMMY_PRODUCT.name,
            price: DUMMY_PRODUCT.price,
            quantity,
            image: DUMMY_PRODUCT.image
        });
        setQuantity(1);
    }

    return (
        <div className="product_info">
            <h4>{DUMMY_PRODUCT.company}</h4>
            <h3>{DUMMY_PRODUCT.name}</h3>
            <p className="product_info_desc">{DUMMY_PRODUCT.description}</p>
            <div className="product_info_price_container">
                <div className="product_info_price">$ {DUMMY_PRODUCT.price.toFixed(2)} <span>{DUMMY_PRODUCT.discount}%</span></div>
                <p className="product_info_prev_price">${DUMMY_PRODUCT.prev_price.toFixed(2)}</p>
            </div>
            <div className="product_info_btns">
                <Quantity 
                    quantity={quantity}
                    onPlusClick={onPlusClick}
                    onMinusClick={onMinusClick}
                />
                <AddToCart onClick={onCartClick} />
            </div>
        </div>
    )
}

export default ProductInfo