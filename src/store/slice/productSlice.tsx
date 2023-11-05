// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    isLoading: false,
    error: false,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload.products;
      state.isLoading = false;
    },
    fetchDataFailure: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} = userSlice.actions;
export default userSlice.reducer;
