import {Link} from "react-router-dom";

const Offer = ({data}) => {

    return (
        <Link to={"catalog/" + data.link}>
            <div className="offer__card">
                <img src={data.background} alt="photo" className="offer__img"/>
                <img src={data.rectangle} alt="rectangle" className="offer__rectangle"/>
                <div className="offer__text">
                    <h3 className="offer__title">{data.tagline}<br/><b>{data.category}</b></h3>
                </div>
            </div>
        </Link>
    );
};

export default Offer;