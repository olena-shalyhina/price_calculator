import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storageValue: 100,
  transferValue: 400,
};

export const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    setStorageValue: (state, action) => {
      state.storageValue = action.payload;
    },
    setTransferValue: (state, action) => {
      state.transferValue = action.payload;
    },
  },
});

export const { setStorageValue, setTransferValue } = rangeSlice.actions;
export default rangeSlice.reducer;
