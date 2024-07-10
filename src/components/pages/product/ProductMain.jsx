import {Link} from "react-router-dom";
import SubNav from "../other/SubNav";
import ProductCarousel from "./elements/ProductCarousel";
import ProductInfo from "./elements/ProductInfo";
import ProductOffer from "./elements/ProductOffer";

const ProductMain = () => {
    
    return (
        <main className="main">
            <SubNav crumbs={[{name: "home", link: "/"}, {name: "woman", link: "/catalog/woman"}, {name: "new arrivals"}]}/>
            <ProductCarousel/>
            <ProductInfo product={{
                collection: "WOMEN COLLECTION",
                name: "MOSCHINO CHEAP AND CHIC",
                subscription: "Compellingly actualize fully researched processes before proactive outsourcing. " +
                    "Progressively syndicate collaborative architectures before cutting-edge services. " +
                    "Completely visualize parallel core competencies rather than exceptional portals.",
                price: "561",

            }}/>
            <ProductOffer/>
        </main>
    );
};

export default ProductMain;