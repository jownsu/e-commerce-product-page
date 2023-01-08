import Navigation from "./views/navigation/navigation";
import Product from "./views/products/product/product";
import ProductInfo from "./views/products/product_info/product_info";

function App() {
    return (
        <div className="container">
            <Navigation />
            <div className="main_container">
                <Product />
                <ProductInfo />
            </div>
        </div>
  );
}

export default App;
