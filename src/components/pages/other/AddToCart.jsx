import {useDispatch} from "react-redux";
import {addToCart} from "../../../reducers/shopSlice";

const AddToCart = ({product}) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    return (
        <button onClick={addToCartHandler} className="product__button">
            <img src="/img/products/cart.svg" alt="cart"/>
            Add to Cart
        </button>
    );
};

export default AddToCart;