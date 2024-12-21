import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from "./slices/ItemsSlice" 

export const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
});
