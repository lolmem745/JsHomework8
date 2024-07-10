import {useLocation, useNavigate} from "react-router-dom";
import addSearch from "../../../../modules/funcs/addSearch";

const TrendingNow = ({trendingNow, loadingStatus}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const selectHandler = (e) => {
        addSearch(navigate, location, e.target, "year");
    }

    return (
        <details
            className="info__box__options__box__option catalog_page__filter_sort__box__options__all_options__option">
            <summary>TRENDING NOW<img src="/img/products/show/arrow_down.svg" alt="arrow down"/>
            </summary>
            <form
                className="catalog_page__filter_sort__box__options__all_options__option__list trending_now_frame"
                action="#">
                <ol>
                    {loadingStatus ? <li>loading...</li> : trendingNow && trendingNow.map((item, i) => (
                        <li key={i}>
                            <input type="checkbox" name="new" id={item.name}
                                   className="options_checkbox" onChange={selectHandler}/>
                            <label htmlFor={item.name}>{item.name}</label>
                        </li>
                    ))}
                </ol>
            </form>
        </details>
    );
};

export default TrendingNow;