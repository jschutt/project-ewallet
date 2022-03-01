import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRandomUser = createAsyncThunk(
  "cards/getRandomUser",
  async () => {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    console.log(data);
    return data.results[0];
  }
);

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    activeCard: {
      id: Date.now(),
      cardHolderName: "Anna Peterson",
      cardNumber: "1234123412341234",
      expiry: "1122",
      cvc: "212",
      type: "VISA",
      active: true,
    },
    cards: [],
    data: null,
    status: null,
  },
  reducers: {
    // definera actions
    addCard: (state, action) => {
      state.cards = state.cards.concat(action.payload);
    },
    updateCard: (state, { payload }) => {
      state.cards = payload;
    },
    setActive: (state, { payload }) => {
      const setActiveCard = state.activeCard.filter(
        (card) => card.id !== payload.id
      );
      setActiveCard.splice(0, 0, payload);
      return { ...state, activeCard: setActiveCard };
    },
  },
  extraReducers: {
    [getRandomUser.pending]: ({ status }) => {
      status = "Loading...";
    },
    [getRandomUser.fulfilled]: (state, action) => {
      state.activeCard.cardHolderName = `${action.payload.name.first} ${action.payload.name.last}`;
      state.status = "Data has fetched successfully!";
      console.log(state.status);
    },
    [getRandomUser.rejected]: ({ state }) => {
      state = "fetched is failed";
    },
  },
});
export const { addCard, updateCard, setActive } = cardSlice.actions;
export default cardSlice.reducer;
