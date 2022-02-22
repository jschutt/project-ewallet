import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "react-credit-cards";
import {
  getCards,
  setNumber,
  setExpiry,
  setCvc,
  setFocused,
} from "../redux/CardSlice";

import "react-credit-cards/es/styles-compiled.css";
const AddNewCardPage = () => {
  const dispatch = useDispatch();
  const { cardDetails, status } = useSelector((state) => state.cards);
  const { cardNumber, expiry, cvc, focused } = useSelector(
    (state) => state.cards
  );

  //console.log(cardDetails.results[0].name);
  //FIXME:
  const [name, setName] = useState("");

  return (
    <div>
      {/* fetch the data with click event */}
      <button className="btn" onClick={() => dispatch(getCards())}>
        Get Card Details
      </button>

      <h3>{status} </h3>
      {/* define the card component */}
      <Cards
        number={cardNumber}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focused}
      />
      <form>
        <input
          type="number"
          name="number"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => dispatch(setNumber(e.target.value))}
          onFocus={(e) => dispatch(setFocused(e.target.name))}
          placeholder="Card number"
          required
        />
        <input
          type="text"
          id="cardholder"
          name="name"
          placeholder="Cardholder's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => dispatch(setFocused(e.target.name))}
          required
        />
        <input
          type="number"
          name="expiry"
          value={expiry}
          onChange={(e) => dispatch(setExpiry(e.target.value))}
          onFocus={(e) => dispatch(setFocused(e.target.name))}
          id="expirationDate"
          placeholder="MM/YY"
          required
        />
        <input
          type="number"
          name="cvc"
          value={cvc}
          onChange={(e) => dispatch(setCvc(e.target.value))}
          onFocus={(e) => dispatch(setFocused(e.target.name))}
          id="cvc"
          placeholder="CVC"
          required
        />
        <select defaultValue="" name="cardOptions" id="cardOptions" required>
          <option value="" disabled>
            Card
          </option>
          <option value="visa">VISA</option>
          <option value="mastercard">MasterCard</option>
        </select>
      </form>
      <button>Add Card</button>
    </div>
  );
};

export default AddNewCardPage;
