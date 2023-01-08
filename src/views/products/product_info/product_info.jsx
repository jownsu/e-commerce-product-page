import "./product_info.scss";
import Quantity from "../quantity/quantity";
import AddToCart from "../add_to_cart/add_to_cart";

const ProductInfo = () => {
    return (
        <div className="product_info">
            <h4>Sneaker company</h4>
            <h3>Fall Limited Edition Sneakers</h3>
            <p className="product_info_desc">These low-profile sneakers are your perfect casual weak companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="product_info_price">$125.00 <span>50%</span></div>
            <p className="product_info_prev_price">$250.00</p>
            <div className="product_info_btns">
                <Quantity />
                <AddToCart />
            </div>
        </div>
    )
}

export default ProductInfo