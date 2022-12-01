import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, { payload }) => {
      state.value = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail } = emailSlice.actions;
