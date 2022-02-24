import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

const store = configureStore({
  reducer: {
    card: cardSlice
  },
});

export default store;
