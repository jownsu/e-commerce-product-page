import { useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "./CloseIcon";
import NextIcon from "../../../assets/images/icon-next.svg";
import PreviousIcon from "../../../assets/images/icon-previous.svg";
import "./product_modal.scss";

const PRODUCT = {
    name: "Fall Limited Edition Sneakers",
    images: [
            "image-product-1.jpg",
            "image-product-2.jpg",
            "image-product-3.jpg",
            "image-product-4.jpg"
        ]
};

const ProductModal = ({onCloseClick = () => {}}) => {

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    const [activeImg, setActiveImg] = useState(0);

    const onNextClick = () => {
        setActiveImg(prevState => {
            if(prevState < 3){
                return prevState + 1;
            }
            return prevState;
        })
    }

    const onPrevClick = () => {
        setActiveImg(prevState => {
            if(prevState > 0){
                return prevState - 1;
            }
            return prevState;
        })
    }

    return (
        <>
            { 
                createPortal(
                    <div className="product_modal" onClick={onCloseClick}>
                        <div className="product" onClick={stopPropagation}>
                            <div className="product_main">
                                <img src={require(`../../../assets/images/${PRODUCT.images[activeImg]}`)} alt="two shoes" />
                                <button className="product_close" onClick={onCloseClick}><CloseIcon /></button>
                                <button className="product_prev" onClick={onPrevClick}><img src={PreviousIcon} alt="prev icon" /></button>
                                <button className="product_next" onClick={onNextClick}><img src={NextIcon} alt="next icon" /></button>
                            </div>
                            <div className="product_sub_modal">
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
                    </div>,
                    document.getElementById("modal_root")
                )
            }
        </>

    )
}

export default ProductModal