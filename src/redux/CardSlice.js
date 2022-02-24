import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const randomUser = createAsyncThunk("card/randomUser", async () => {
  return fetch(`https://randomuser.me/api/`)
    .then((response) => response.json())
    .then((data) => data.result[0]);
});

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    activeCard: {
      cardName: "Ann Andersson",
      cardnNumber: "111 222 3333 4444",
      cardMonth: "12",
      cardYear: "22",
      cvc: "567",
      type: "VISA",
      active: true
    },
    cardsList: [],
    data: null,
    status: null
  },
  reducers: {
    addNewCard: (state, action) => {
      state.activeCard = state.activeCard.concat(action.payload);
    }
  },
  extraReducers: {
    [randomUser.pending]: (state, action) => {
      state.status = "Loading";
      console.log(state.status);
    },
    [randomUser.fulfilled]: (state, action) => {
      state.status = "Success!";
      const { first, last } = action.payload.name;
      let wholeName = { first } + { last };
      for (let i = 0; i < state.activeCard.length; i++) {
        state.activeCard[i].cardName = wholeName.toUpperCase();
      }
    },
    [randomUser.rejected]: (state, action) => {
      state.status = "Failed!Try Again...";
      console.log(state.status);
    }
  }
});
console.log(cardSlice);
export default cardSlice.reducer;

