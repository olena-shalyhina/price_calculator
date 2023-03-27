import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOptions: {},
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
  },
});

export const { setSelectedOptions } = optionsSlice.actions;
export default optionsSlice.reducer;
