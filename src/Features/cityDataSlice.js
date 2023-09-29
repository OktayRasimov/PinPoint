import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCityData: [],
};

export const cityDataSlice = createSlice({
  name: "cityData",
  initialState,
  reducers: {
    addSelectedCityData: (state, action) => {
      state.selectedCityData = action.payload;
    },
  },
});
export const { addSelectedCityData } = cityDataSlice.actions;
export default cityDataSlice.reducer;
