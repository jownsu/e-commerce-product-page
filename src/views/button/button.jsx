import "./button.scss";

const Button = (props) => {

    const {children, onClick, className} = props;

    return (
        <button className={`btn ${className}`} onClick={onClick}>
            {children}
        </button>
    ) 
}

export default Button