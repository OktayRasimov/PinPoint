import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const appLayoutSlice = createSlice({
  name: "appLayout",
  initialState,
  reducers: {
    checkShow: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { checkShow } = appLayoutSlice.actions;
export default appLayoutSlice.reducer;
