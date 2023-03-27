import { configureStore } from '@reduxjs/toolkit';
import rangeSlice from './rangeSlice';
import optionsSlice from './optionsSlice';

export const store = configureStore({
  reducer: {
    range: rangeSlice,
    options: optionsSlice,
  },
});
