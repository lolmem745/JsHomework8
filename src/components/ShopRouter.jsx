import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Main from "./pages/Main";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import RegistrationPage from "./pages/RegistrationPage";
import CartPage from "./pages/CartPage";

const ShopRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/" element={<IndexPage/>}/>
                    <Route path="/catalog" element={<CatalogPage/>}>
                        <Route path=":category" element={<CatalogPage/>}>
                            <Route path=":pageNumber" element={<CatalogPage/>}/>
                        </Route>
                    </Route>
                    <Route path="product" element={<ProductPage/>}/>
                    <Route path="registration" element={<RegistrationPage/>}/>
                    <Route path="cart" element={<CartPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default ShopRouter;