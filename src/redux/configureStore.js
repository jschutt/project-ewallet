import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";

const store = configureStore({
  reducer: {
    // create a slice
   cards: CardSlice
  },
});

export default store;
