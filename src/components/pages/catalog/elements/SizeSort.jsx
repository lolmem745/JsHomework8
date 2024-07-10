import {useLocation, useNavigate} from "react-router-dom";
import addSearch from "../../../../modules/funcs/addSearch";

const SizeSort = ({size, loadingStatus}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectHandler = (e) => {
        addSearch(navigate, location, e.target, "size");
    }
    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>SIZE<img src="/img/products/show/arrow_down.svg" alt="arrow down"/></summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list size_frame"
                action="#">
                <ol>
                    {loadingStatus ? <li>loading...</li> : size && size.map((size, index) => (
                        <li key={index}>
                            <input type="checkbox" name={size.designation} id={size.designation}
                                   className="options_checkbox" onChange={selectHandler}/>
                            <label htmlFor={size.designation}>{size.designation.toUpperCase()}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default SizeSort;