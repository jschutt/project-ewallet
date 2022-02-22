import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ------ Fetch the Data from API

export const getCards = createAsyncThunk("cards/getCards", async () => {
  let resp = await fetch("https://randomuser.me/api/");
  let json = await resp.json();
  console.log(json);
  return json;
});

// ----------- create a slice
const CardSlice = createSlice({
  name: "cards",
  initialState: {
    cardDetails: null,
    status: null,
    cardNumber: "",
    expiry: "",
    cvc: "",
    focused: "",
  },
  reducers: {
    setNumber: (state, action) => {
      state.cardNumber = action.payload;
    },
    setExpiry: (state, action) => {
      state.expiry = action.payload;
    },
    setCvc: (state, action) => {
      state.cvc = action.payload;
    },
    setFocused: (state, action) => {
      state.focused = action.payload;
    },
  },
  extraReducers: {
    [getCards.fulfilled]: (state, action) => {
      state.cardDetails = action.payload;
      state.status = null;
      //console.log(state);
    },
    [getCards.pending]: (state) => {
      state.status = "Fetching data... Please wait a second";
    },
    [getCards.rejected]: (state) => {
      state.status = "Failed to fetch data";
    },
  },
});
export const { setNumber, setExpiry, setCvc, setFocused } = CardSlice.actions;
export default CardSlice.reducer;
