import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "react-credit-cards";
import { getCards } from "../redux/CardSlice";

const AddNewCardPage = () => {
  const dispatch = useDispatch();
  const { state, status } = useSelector((state) => state.cards);
  console.log(state);
  

  // initially define states that will be used in the Cards component
  //TODO: this will be modified and put into redux later on!
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focused, setFocused] = useState("");
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          dispatch(getCards());
        }}
      >
        Get Card Details
      </button>
      <Cards
        number={number}
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
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
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
          onFocus={(e) => setFocused(e.target.name)}
          required
        />
        <input
          type="number"
          name="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
          id="expirationDate"
          placeholder="MM/YY"
          required
        />
        <input
          type="number"
          name="cvc"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocused(e.target.name)}
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
