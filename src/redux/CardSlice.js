import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "cards",
  initialState: {
    // define initial global states
    cardDetails: [
      {
        number: "060766767006",
        name: "ozzy",
        expiry: "",
        cvc: "",
        focused: "",
      },
    ],
  },
  reducers: {
    //TODO: define actions
  },
});

export default CardSlice.reducer;
