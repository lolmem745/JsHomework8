import {useParams} from "react-router-dom";
import SubNav from "../other/SubNav";
import FilterSort from "./elements/FilterSort";
import CatalogProducts from "./elements/CatalogProducts";
import CatalogPagination from "./elements/CatalogPagination";

const CatalogMain = () => {
    const {category} = useParams();
    const categoryName = category ? category : "man";
    const {pageNumber} = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    // Заглушка для количества страниц
    const totalPage = 20;

    return (
        <main className="main">
            <SubNav crumbs={[{name: "home", link: "/"}, {name: categoryName, link: `/catalog/${categoryName}`}, {name: "new arrivals"}]}/>
            <section className="catalog_page center">
                <FilterSort/>
                <CatalogProducts category={categoryName}/>
                <CatalogPagination currentPage={currentPage} totalPages={totalPage} category={categoryName}/>
            </section>
        </main>
    );
};

export default CatalogMain;