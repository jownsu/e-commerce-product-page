import { useState } from "react";
import NextIcon from "../../../assets/images/icon-next.svg";
import PreviousIcon from "../../../assets/images/icon-previous.svg";
import "./product.scss";

const PRODUCT = {
    name: "Fall Limited Edition Sneakers",
    images: [
            "image-product-1.jpg",
            "image-product-2.jpg",
            "image-product-3.jpg",
            "image-product-4.jpg"
        ]
};

const Product = (props) => {

    const { onMainClick = () => {} } = props;

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    const [activeImg, setActiveImg] = useState(0);

    const onNextClick = (event) => {
        event.stopPropagation();
        setActiveImg(prevState => {
            if(prevState < 3){
                return prevState + 1;
            }
            return prevState;
        })
    }

    const onPrevClick = (event) => {
        event.stopPropagation();
        setActiveImg(prevState => {
            if(prevState > 0){
                return prevState - 1;
            }
            return prevState;
        })
    }

    return (
        <div className="product" onClick={stopPropagation}>
            <div className="product_main" onClick={onMainClick}>
                <img src={require(`../../../assets/images/${PRODUCT.images[activeImg]}`)} alt="two shoes" />
                <button className="product_prev" onClick={onPrevClick}><img src={PreviousIcon} alt="prev icon" /></button>
                <button className="product_next" onClick={onNextClick}><img src={NextIcon} alt="next icon" /></button>
            </div>
            <div className="product_sub">
                {
                    PRODUCT.images.map((img, index) => (
                        <div 
                            key={index}
                            className={`product_sub-img ${activeImg === index ? "active" : ""}`} 
                            onClick={() => setActiveImg(index)}
                        >
                            <img src={require(`../../../assets/images/${img}`)} alt={PRODUCT.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Product;