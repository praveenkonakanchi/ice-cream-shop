import { createSlice } from '@reduxjs/toolkit';
import { products } from '../constants/Products'; // Import your product constants

const initialState = products;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add any actions you might need in the future
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    // You can add more reducers as needed
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
