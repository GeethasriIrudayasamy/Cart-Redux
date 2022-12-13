import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendCartData, fetchCartData } from "./Store/cartFunctions";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";

let initialVal = true;
function App() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (initialVal) {
            initialVal = false;
            return;
        }
        if (cart.isChanged) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                <Cart />
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
