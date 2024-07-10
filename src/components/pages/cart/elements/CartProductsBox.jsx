import CartProduct from "./CartProduct";

const CartProductsBox = ({products}) => {

    return (
        <div className="cart__box__left">
            <div className="cart__box__left__products">
                {products.map(product => (
                    <CartProduct key={product.id} product={product} />
                ))}
            </div>
            <div className="cart__box__left__buttons">
                <button className="cart__button">CLEAR SHOPPING CART</button>
                <button className="cart__button">CONTINUE SHOPPING</button>
            </div>
        </div>
    );
};

export default CartProductsBox;