import {useLocation, useNavigate} from "react-router-dom";
import addSearch from "../../../../modules/funcs/addSearch";

const PriceSort = ({price, loadingStatus}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectHandler = (e) => {
        addSearch(navigate, location, e.target, "price");
    }

    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>PRICE<img src="/img/products/show/arrow_down.svg" alt="arrow down"/>
            </summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list price_frame"
                action="#">
                <ol>
                    {loadingStatus ? <li>loading...</li> : price && price.map((price) => (
                        <li key={price.id}>
                            <input type="checkbox" name={"price" + price.id} id={"price" + price.id}
                                   className="options_checkbox" onChange={selectHandler}/>
                            <label htmlFor={"price" + price.id}>{price.designation}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default PriceSort;