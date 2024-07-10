import ShopRouter from "./components/ShopRouter";
import {Provider} from "react-redux";
import store from "./modules/store";
import {PersistGate} from "redux-persist/integration/react";
import persistor from "./modules/persistor";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <ShopRouter/>
            </PersistGate>
        </Provider>
    );
}

export default App;
