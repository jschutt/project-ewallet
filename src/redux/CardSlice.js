import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cardsList: [
      {
        cardNumber: 1111222233334444,
        name: "Ann Andersson",
        expiry: 10 / 20,
        cvc: 123,
        ifActive: true // dubbelkolla med dokumentacion
      }
    ],
    no: 1
  },
  reducers: {
    addCard: (state, action) => {
      state.cardsList.push(action.payload);
      state.no += 1;
    }
  }
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
