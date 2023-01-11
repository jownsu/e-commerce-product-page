import { useState } from "react";
import Navigation from "./views/navigation/navigation";
import Product from "./views/products/product/product";
import ProductInfo from "./views/products/product_info/product_info";
import ProductModal from "./views/products/product_modal/product_modal";

function App() {
    const [showProductModal, setShowProductModal] = useState(false);

    const onMainClick = () => {
        setShowProductModal(true);
    }

    const onCloseClick = () => {
        setShowProductModal(false);
    }

    return (
        <div className="container">
            <Navigation />
            <div className="main_container">
                <Product  onMainClick={onMainClick} />
                <ProductInfo />
                {
                    showProductModal && <ProductModal onCloseClick={onCloseClick} />
                }
            </div>
        </div>
  );
}

export default App;
