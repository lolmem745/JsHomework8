import Header from "./main/Header";
import {Outlet} from "react-router-dom";
import Contact from "./main/Contact";
import Footer from "./main/Footer";

const Main = () => {

    return (
        <>
            <Header/>
            <Outlet/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Main;