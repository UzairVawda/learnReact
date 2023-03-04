import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 666,
  total: 0,
  isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    // basic example with fetch
    // return fetch(url)
    //   .then((response) => response.json())
    //   .catch((err) => console.log(err));
    try {
      const response = await axios(url);
      console.log(thunkAPI);
      return await response.data;
    } catch (err) {
      // return console.log(err);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    toggleCount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (payload.type === "up") {
        cartItem.amount = cartItem.amount + 1;
      } else if (payload.type === "down") {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotalsAndAmount: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, toggleCount, calculateTotalsAndAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
