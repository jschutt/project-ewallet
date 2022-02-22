import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

const store = configureStore({
  reducer: {
   cards: cardSlice
  },
});

export default store;
