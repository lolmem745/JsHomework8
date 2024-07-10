import {Link} from "react-router-dom";

const SubNav = ({crumbs}) => {

    return (
        <section className="sub_nav">
            <div className="sub_nav__content center">
                <div className="sub_nav__content__left">
                    <h1>{crumbs[crumbs.length - 1].name.toUpperCase()}</h1>
                </div>
                {crumbs.length > 1 && <nav className="sub_nav__content__right" aria-label="breadcrumb">
                    <ol className="sub_nav__content__right__breadcrumb">
                        {crumbs.slice(0, crumbs.length - 1).map((item, i) => (
                            <li key={i} className="sub_nav__content__right__breadcrumb__item_link">
                                <Link to={crumbs[i].link}>{
                                    crumbs[i].name.toUpperCase()
                                }</Link></li>
                        ))}
                        <li className="sub_nav__content__right__breadcrumb__item_link active" aria-current="page">
                            <Link to="#">{crumbs[crumbs.length - 1].name.toUpperCase()}</Link>
                        </li>
                    </ol>
                </nav>}
            </div>
        </section>
    );
};

export default SubNav;