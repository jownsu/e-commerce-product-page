import { useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        let product = products.find(prod => prod.id === newProduct?.id);

        if(product){
            setProducts(prevState => {
                return prevState.map(prod => {
                    if(prod.id === newProduct.id){
                        return {...prod, quantity: prod.quantity +  newProduct.quantity }
                    }
                    return prod;
                });
            })
        }
        else{
            setProducts(prevState => [newProduct, ...prevState])
        }
    }

    const deleteProduct = (id = 0) => {
        let product = products.find(prod => prod.id === id);

        if(product){
            setProducts(prevState => prevState.filter(product => product.id !== id))
        }
    }

    const checkout = () => {
        setProducts([]);
        alert("Checkout!");
    }

    return (
        <CartContext.Provider 
            value={{
                products,
                addProduct,
                deleteProduct,
                checkout
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
