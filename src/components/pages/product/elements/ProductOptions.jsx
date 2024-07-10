
const ProductOptions = () => {

    return (
        <div className="info__box__options">
            <div className="info__box__options__box">
                <details className="info__box__options__box__option">
                    <summary>CHOOSE COLOR<img src="/img/products/show/arrow_down.svg" alt="arrow down"/>
                    </summary>
                </details>
                <details className="info__box__options__box__option">
                    <summary>CHOOSE SIZE<img src="/img/products/show/arrow_down.svg" alt="arrow down"/>
                    </summary>
                </details>
                <details className="info__box__options__box__option">
                    <summary>QUANTITY<img src="/img/products/show/arrow_down.svg" alt="arrow down"/></summary>
                </details>
            </div>
        </div>
    );
};

export default ProductOptions;