import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ------ Fetch the Data from API

export const getCards = createAsyncThunk("cards/getCards", async () => {
  let resp = await fetch("https://randomuser.me/api/");
  let json = await resp.json();
  console.log(json);
  return json;
});
const CardSlice = createSlice({
  name: "cards",
  initialState: {
    cardDetails: [],
    status: null,
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

export default CardSlice.reducer;
