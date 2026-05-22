import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import budgetSlice from "./budgetSlice";
import grocerylistSlice from "./grocerylistSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        budget: budgetSlice,
        grocerylist: grocerylistSlice,
    },
})