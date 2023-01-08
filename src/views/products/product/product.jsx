import "./product.scss";

const Product = () => {
    return (
        <div className="product">
            <div className="product_main">
                <img src={require("../../../assets/images/image-product-1.jpg")} alt="two shoes" />
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