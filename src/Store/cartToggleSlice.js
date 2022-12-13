import { createSlice } from "@reduxjs/toolkit";

const cartToggleSlice = createSlice({
    name: "cartToggle",
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const cartToggleActions = cartToggleSlice.actions;
export default cartToggleSlice;
