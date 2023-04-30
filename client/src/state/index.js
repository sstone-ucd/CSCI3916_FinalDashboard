//save state of theme (light or dark mode)
import { createSlice } from "@reduxjs/toolkit";
//create global varibale to save the default state and usert 
const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};
//use the initial state to be able to switch between light and dark mode 
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
//set the mode
export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
