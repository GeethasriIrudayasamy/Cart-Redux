import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/cartSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const toggleCartHandler = () => {
        dispatch(cartActions.toggle());
    };
    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
