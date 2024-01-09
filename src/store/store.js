import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/cardSlice";
import modalSlice from "./slices/modalSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
    modal: modalSlice,
  },
});

export default store;
