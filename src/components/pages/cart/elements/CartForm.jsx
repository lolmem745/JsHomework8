
const CartForm = ({subTotal, grandTotal}) => {

    return (
        <div className="cart__box__right">
            <form action="#" className="cart__box__right__child">
                <fieldset className="cart__box__right__client_info">
                    <legend className="cart__box__right__client_info__title">SHIPPING ADRESS</legend>
                    <input type="text" name="Country" id="country" placeholder="Country" required/>
                    <input type="text" name="State" id="state" placeholder="State" required/>
                    <input type="text" name="Postcode" id="postcode" placeholder="Postcode / Zip" required/>
                </fieldset>
                <button type="submit" className="cart__button">GET A QUOTE</button>
            </form>
            <div className="cart__box__right__price_info cart__box__right__child">
                <div className="cart__box__right__price_info__text">
                    <p>SUB TOTAL <span>${subTotal}</span></p>
                    <p>GRAND TOTAL <span>${grandTotal}</span></p>
                </div>
                <button className="cart__box__right__price_info__button">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartForm;