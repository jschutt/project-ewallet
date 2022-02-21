import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: {
    // define initial global states
    
    cardDetails: {
      number:'6666777788889999',
      name:'Ozzy',
      expiry:'202211',
      cvc:'786',
      focused:''
    }
  },
  reducers: {
    //TODO: define actions
  },
});

export default CardSlice.reducer;
