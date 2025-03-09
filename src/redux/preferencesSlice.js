import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preferences: [], // ✅ Ensure it's an array, not an object
};

const preferencesSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    updatePreferences: (state, action) => {
      state.preferences = action.payload; // ✅ Update preferences properly
    },
  },
});

export const { updatePreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
