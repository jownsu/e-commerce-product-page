import MinusIcon from "../../../assets/images/icon-minus.svg";
import PlusIcon from "../../../assets/images/icon-plus.svg";
import "./quantity.scss";


const Quantity = ({ onPlusClick, onMinusClick, quantity = 0 }) => {

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