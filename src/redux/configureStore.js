import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./CardSlice";

const store = configureStore({
  reducer: {
   cardsList: cardSlice
  },
});

export default store;
