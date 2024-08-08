import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addItem, removeItem, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
