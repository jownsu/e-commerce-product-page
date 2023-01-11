import { createPortal } from "react-dom";
import Product from "../product/product";
import "./product_modal.scss";


const ProductModal = ({onCloseClick = () => {}}) => {
    return (
        <>
            { 
                createPortal(
                    <div className="product_modal" onClick={onCloseClick}>
                        <Product showControls onCloseClick={onCloseClick} />
                    </div>,
                    document.getElementById("modal_root")
                )
            }
        </>

    )
}

export default ProductModal