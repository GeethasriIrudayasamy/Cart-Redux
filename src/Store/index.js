import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import cartToggleSlice from "./cartToggleSlice";

const store = configureStore({
    reducer: { cartToggle: cartToggleSlice.reducer, cart: cartSlice.reducer },
});

export default store;
