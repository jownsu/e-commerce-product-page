import "./button.scss";

const Button = (props) => {

    const {children, onClick, className} = props;

    return (
        <button className={`btn ${className}`} onCLick={onClick}>
            {children}
        </button>
    ) 
}

export default Button