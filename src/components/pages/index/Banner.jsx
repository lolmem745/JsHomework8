import {Link} from "react-router-dom";

const Banner = () => {

    return (
        <div className="banner">
            <Link to="#" className="banner__link">
                <div className="banner__content">
                    <div className="banner__left">
                        <img src="/img/preview/photo.png" alt="banner photo"/>
                    </div>
                    <div className="banner__right">
                        <div className="banner__tagline">
                            <div className="banner__text__box">
                                <img src="/img/preview/line.svg" alt="line"/>
                                    <div className="banner__text">
                                        <h1><b>THE BRAND</b><br/> OF LUXERIOUS <span>FASHION</span></h1>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Banner;