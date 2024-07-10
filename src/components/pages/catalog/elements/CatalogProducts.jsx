import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Product from "../../other/Product";
import productsLoader from "../../../../reducers/loaders/productsLoader";
import {useLocation} from "react-router-dom";
import {catalogLoader} from "../../../../reducers/loaders/catalogLoader";

const CatalogProducts = ({category}) => {
    const products = useSelector(state => state.products);
    const loadingStatus = useSelector(state => state.loadingStatus.products);
    const loadingError = useSelector(state => state.loadingError.products);
    const dispatch = useDispatch();
    const location = useLocation();
    const [year, setYear] = useState(null);
    const [size, setSize] = useState(null);
    const [price, setPrice] = useState(null);

    useEffect(() => {
        dispatch(productsLoader());
    }, []);

    useEffect(() => {
        if (loadingError) {
            dispatch(catalogLoader());
        }
    }, [loadingError]);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        setYear(query.get("year") ? query.get("year").split(",").map(year => parseInt(year, 10)) : null);
        setSize(query.get("size") ? query.get("size").split(",") : null);
        setPrice(query.get("price"));
    }, [location]);

    return (
        <div className="catalog_page__list">
            <div className="product__items">
                {loadingStatus ? <h5>loading...</h5> : products
                    .filter(product => ((product.category === category)))
                    .filter(product => (!year || year.indexOf(product.year) > -1))
                    .filter(product => (!size || product.size.filter(s => (size.indexOf(s) > -1)).length))
                    //TODO сортировка по цене
                    .map((product, index) => (
                        <Product key={product.id} product={product}/>
                    ))}
            </div>
        </div>
    );
};

export default CatalogProducts;