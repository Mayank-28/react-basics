import { Provider } from "react-redux";
import Bakery from "./bakery";
import bakeryStore from "./store";

const BakeryShop = () => {
    return (
        <Provider store={bakeryStore}>
            <div>Welcome to Bakery Shop</div>
            <Bakery />
        </Provider>
    )
}

export default BakeryShop;