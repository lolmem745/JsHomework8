import {Link} from "react-router-dom";
import ProductTop from "./ProductTop";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import productsLoader from "../../../../reducers/loaders/productsLoader";
import Product from "../../other/Product";
import {catalogLoader} from "../../../../reducers/loaders/catalogLoader";

const ProductBox = () => {
    const products = useSelector(state => state.products);
    const loadingStatus = useSelector(state => state.loadingStatus.products);
    const loadingError = useSelector(state => state.loadingError.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsLoader());
    }, []);

    useEffect(() => {
        if (loadingError) {
            dispatch(catalogLoader());
        }
    }, [loadingError]);

    return (
        <section className="products">
            <div className="product__content center">
                <ProductTop/>
                <div className="product__items">
                    {loadingStatus ? <h5>loading...</h5> : products.slice(0, 6).map((product, index) => (
                        <Product key={product.id} product={product}/>
                    ))}
                </div>
                <div className="product__bottom">
                    <Link to="#" className="product__browse__all">Browse All Product</Link>
                </div>
            </div>
        </section>
    );
};

export default ProductBox;