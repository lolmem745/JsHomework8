import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import productsLoader from "../../../../reducers/loaders/productsLoader";
import Product from "../../other/Product";
import {catalogLoader} from "../../../../reducers/loaders/catalogLoader";

const ProductOffer = () => {
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
        <section className="product">
            <div className="product__items">
                {loadingStatus ? <h5>loading...</h5> : products.slice(0, 3).map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </div>
        </section>
    );
};

export default ProductOffer;