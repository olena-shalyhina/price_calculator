import { configureStore } from '@reduxjs/toolkit';
import rangeSlice from './rangeSlice';

export const store = configureStore({
  reducer: {
    range: rangeSlice,
  },
});
