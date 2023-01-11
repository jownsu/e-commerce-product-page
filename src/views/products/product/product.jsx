import "./product.scss";
import NextIcon from "../../../assets/images/icon-next.svg";
import PreviousIcon from "../../../assets/images/icon-previous.svg";
import CloseIcon from "./CloseIcon";

const Product = (props) => {

    const {
        showControls = false, 
        onMainClick = () => {},
        onCloseClick = () => {}
    } = props;

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="product" onClick={stopPropagation}>
            <div className="product_main" onClick={onMainClick}>
                <img src={require("../../../assets/images/image-product-1.jpg")} alt="two shoes" />
                {
                showControls
                    && (
                        <>
                            <button className="product_close" onClick={onCloseClick}><CloseIcon /></button>
                            <button className="product_prev"><img src={PreviousIcon} alt="prev icon" /></button>
                            <button className="product_next"><img src={NextIcon} alt="next icon" /></button>
                        </>
                    )
                }
            </div>
            <div className="product_sub">
                <div className="product_sub-img active">
                    <img src={require("../../../assets/images/image-product-1-thumbnail.jpg")} alt="two shoes" />
                </div>
                <div className="product_sub-img">
                    <img src={require("../../../assets/images/image-product-2-thumbnail.jpg")} alt="two shoes" />

                </div>
                <div className="product_sub-img">
                    <img src={require("../../../assets/images/image-product-3-thumbnail.jpg")} alt="two shoes" />
                </div>
                <div className="product_sub-img">
                    <img src={require("../../../assets/images/image-product-4-thumbnail.jpg")} alt="two shoes" />
                </div>
            </div>
        </div>
    )
}

export default Product;