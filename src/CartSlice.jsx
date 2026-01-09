import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log("Add item action", action);
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      console.log("existingItem", existingItem);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      console.log("Remove action", action);
      console.log("State.items.before remove", state.items.toString());
      state.items = state.items.filter(item => item.name !== action.payload);
      console.log("State.items.after remove", state.items.toString());
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      console.log("existingItem", existingItem);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
