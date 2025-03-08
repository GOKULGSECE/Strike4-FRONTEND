import { configureStore } from "@reduxjs/toolkit";
import preferenceReducer from "./preferencesSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        preference: preferenceReducer,
        user: userReducer
    },
});

export default store;
