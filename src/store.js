import { configureStore } from "@reduxjs/toolkit";
import cityDataReducer from "./Features/cityDataSlice";
import loginReducer from "./Features/loginSlice";
import appLayoutReducer from "./Features/appLayoutSlice";

export const store = configureStore({
  reducer: {
    cityData: cityDataReducer,
    login: loginReducer,
    appLayout: appLayoutReducer,
  },
});
