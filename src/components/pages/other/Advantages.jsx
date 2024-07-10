import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import advantagesLoader from "../../../reducers/loaders/advantagesLoader";
import {catalogLoader} from "../../../reducers/loaders/catalogLoader";

const Advantages = () => {
    const advantages = useSelector((state) => state.advantages);
    const loadingStatus = useSelector(state => state.loadingStatus.advantages);
    const loadingError = useSelector(state => state.loadingError.advantages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(advantagesLoader());
    }, []);

    useEffect(() => {
        if (loadingError) {
            dispatch(catalogLoader());
        }
    }, [loadingError]);

    return (
        <div className="advantages">
            {loadingStatus ? <h5 style={{color:"white"}}>loading...</h5> : advantages.map((advantage, index) => (
                <article key={index} className="advantage">
                    <Link to="#" className="advantage__link">
                        <img src={advantage.img} alt="icon" className="advantage_img"/>
                        <h3>{advantage.title}</h3>
                        <p>{advantage.description[0]}<br/>{advantage.description[1]}</p>
                    </Link>
                </article>
            ))}
        </div>
    );
};

export default Advantages;