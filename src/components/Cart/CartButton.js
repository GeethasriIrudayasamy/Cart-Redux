import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartToggleActions } from "../../Store/cartToggleSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const toggleCartHandler = () => {
        dispatch(cartToggleActions.toggle());
    };
    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
