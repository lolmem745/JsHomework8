import {Link} from "react-router-dom";
import CartHeader from "./header/CartHeader";
import RegistrationHeader from "./header/RegistrationHeader";
import MenuHeader from "./header/MenuHeader";
import SearchHeader from "./header/SearchHeader";

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header__box">
                    <div className="header__bg">
                        <nav className="menu center">
                            <div className="menu__left">
                                <Link to="/" className="menu__link">
                                    <img src="/img/header/icon.svg" alt="logo" className="menu__img"/>
                                </Link>
                                <SearchHeader/>
                            </div>
                            <div className="menu__right">
                                <MenuHeader/>
                                <RegistrationHeader/>
                                <CartHeader/>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;