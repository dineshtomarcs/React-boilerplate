import { configureStore } from "@reduxjs/toolkit"; // Replace with your FAQ slice path
import homeReducer from "./slice/homeSlice"; // Replace with your user slice path
import logger from 'redux-logger'

export const store = configureStore({
  reducer: { home: homeReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
