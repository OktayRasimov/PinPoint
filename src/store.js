import { configureStore } from "@reduxjs/toolkit";
import cityDataReducer from "./Features/cityDataSlice";
import loginReducer from "./Features/loginSlice";

export const store = configureStore({
  reducer: {
    cityData: cityDataReducer,
    login: loginReducer,
  },
});
