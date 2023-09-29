import { configureStore } from "@reduxjs/toolkit";
import cityDataReducer from "./Features/cityDataSlice";

export const store = configureStore({
  reducer: {
    cityData: cityDataReducer,
  },
});
