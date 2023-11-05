import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./slice/productSlice"
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    product:productReducer,
  },
  middleware: [thunk],
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch