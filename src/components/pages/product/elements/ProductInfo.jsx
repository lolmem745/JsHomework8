import ProductOptions from "./ProductOptions";
import AddToCartInProduct from "./AddToCartInProduct";

const ProductInfo = ({product}) => {

    return (
        <section className="info">
            <div className="info__box">
                <h3 className="info__box__collection">{product.collection}</h3>
                <img src="img/products/show/line_pink.svg" alt="line" className="info__box__pink_line"/>
                <h2 className="info__box__pos_name">{product.name}</h2>
                <p className="info__box__subscription">{product.subscription}</p>
                <h1 className="info__box__price">${product.price}</h1>
                <img src="img/products/show/line_grey.svg" alt="line" className="info__box__grey_line"/>
                <ProductOptions/>
                <AddToCartInProduct product={product}/>
            </div>
        </section>
    );
};

export default ProductInfo;