import AddToCart from "./AddToCart";

const Product = ({product}) => {

    return (
        <figure className="product__item">
            <div className="product__view">
                <img src={product.photo} alt="product photo" className="product__img"/>
                <div className="product__rectangle"></div>
                <AddToCart product={product} />
            </div>
            <figcaption className="product__info">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
            </figcaption>
        </figure>
    );
};

export default Product;