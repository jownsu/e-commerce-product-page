import { useState } from "react";
import MinusIcon from "../../../assets/images/icon-minus.svg";
import PlusIcon from "../../../assets/images/icon-plus.svg";
import "./quantity.scss";


const Quantity = () => {

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


    return (
        <div className="quantity">
            <button onClick={onMinusClick}>
                <img src={MinusIcon} alt="minus icon" />
            </button>
            <span>{quantity}</span>
            <button onClick={onPlusClick}>
                <img src={PlusIcon} alt="plus icon" />
            </button>
        </div>
    )
}

export default Quantity