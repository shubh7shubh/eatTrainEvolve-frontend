"use client"
import { configureStore, createReducer } from '@reduxjs/toolkit';
// import productReducer from '../features/product/productSlice';
// import cartReducer from '../features/cart/cartSlice';
// import orderReducer from '../features/order/orderSlice';
// import userReducer from '../features/user/userSlice';
import authReducer from '../components/auth/authSlice'

export const store = configureStore({
  reducer: {
    // product: productReducer,
    auth: authReducer,
    // cart: cartReducer,
    // order: orderReducer,
    // user: userReducer,
  },
});
