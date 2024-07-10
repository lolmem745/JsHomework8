import RegistrationForm from "./elements/RegistrationForm";
import RegistrationCondition from "./elements/RegistrationCondition";
import SubNav from "../other/SubNav";

const RegistrationMain = () => {
    
    return (
        <main className="main">
            <SubNav crumbs={[{name: "registration"}]}/>
            <section className="registration center">
                <RegistrationForm/>
                <RegistrationCondition/>
            </section>
        </main>
    );
};

export default RegistrationMain;