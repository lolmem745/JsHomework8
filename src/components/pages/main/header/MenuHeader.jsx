import DropdownNav from "./DropdownNav";

const MenuHeader = () => {

    return (
        <div className="catalog menu__link">
            <input type="checkbox" name="dropdown" id="dropdown" className="catalog__checkbox"/>
            <label htmlFor="dropdown" className="catalog__dropdownLabel">
                <svg className="menu__img"
                     xmlns="http://www.w3.org/2000/svg" width="32" height="23"
                     viewBox="0 0 32 23"
                     fill="none">
                    <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
                          fill="#E8E8E8"/>
                </svg>
            </label>
            <DropdownNav/>
        </div>
    );
};

export default MenuHeader;