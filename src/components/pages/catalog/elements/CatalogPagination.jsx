import {Link} from "react-router-dom";

const CatalogPagination = ({totalPages, currentPage = 1, category}) => {
    // Заглушка для количества отображаемых страниц
    const showCount = 6;

    return (
        <nav className="catalog_page__nav">
            <div className="catalog_page__nav__box">
                <Link to={currentPage !== 1 ? `/catalog/${category}/${currentPage - 1}` : ''} className="catalog_page__nav__box__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"
                         fill="none">
                        <path d="M8.995 2L3.995 7L8.995 12L7.995 14L0.994995 7L7.995 0L8.995 2Z" fill="black"/>
                    </svg>
                </Link>
                <div className="catalog_page__nav__box__pages">
                    {Array.from({ length: showCount }, ((_, i) => (
                        <Link key={i} to={`/catalog/${category}/${i + currentPage}`}
                              className={"catalog_page__nav__box__pages__page " +
                                  ((i + currentPage) !== (showCount + currentPage - 1) ? "page_gap " : "") +
                                  ((i + currentPage) === currentPage ? "active_page" : "")}>
                            {i + currentPage}
                        </Link>
                    )))}
                    <p className="catalog_page__nav__box__pages__page">.....</p>
                    <Link to={`/catalog/page/${totalPages}`}
                          className="catalog_page__nav__box__pages__page">{totalPages}</Link>
                </div>
                <Link to={currentPage !== totalPages ? `/catalog/${category}/${currentPage + 1}` : ''} className="catalog_page__nav__box__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14"
                         fill="none">
                        <path d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                              fill="black"/>
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default CatalogPagination;