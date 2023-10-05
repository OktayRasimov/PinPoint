import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: [],
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});
export const { addAuthUser } = loginSlice.actions;
export default loginSlice.reducer;
