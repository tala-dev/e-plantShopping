/**
 * CartSlice
 * ---------
 * Manages shopping cart state, including adding items,
 * removing items, and updating item quantities.
 *
 * Redux Toolkit uses Immer under the hood, which allows
 * writing "mutating" logic while maintaining immutability.
 */

import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    /**
     * Adds an item to the cart.
     * If the item already exists, increments its quantity.
     * Otherwise, adds the item with an initial quantity of 1.
     */
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
    /**
     * Removes an item from the cart by name
     */
    removeItem: (state, action) => {
      console.log("Remove action", action);
      console.log("State.items.before remove", state.items.toString());
      state.items = state.items.filter(item => item.name !== action.payload);
      console.log("State.items.after remove", state.items.toString());
    },
    /**
     * Updates the quantity of an existing cart item
     */
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
