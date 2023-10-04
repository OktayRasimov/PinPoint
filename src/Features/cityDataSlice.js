import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCityData: [],
  addedSelectedCityData: [],
};

export const cityDataSlice = createSlice({
  name: "cityData",
  initialState,
  reducers: {
    addSelectedCityData: (state, action) => {
      state.selectedCityData = action.payload;
    },
    addAddedSelectedCityData: (state, action) => {
      state.addedSelectedCityData = action.payload;
    },
  },
});
export const { addSelectedCityData, addAddedSelectedCityData } =
  cityDataSlice.actions;
export default cityDataSlice.reducer;
