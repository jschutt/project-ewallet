import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomUser } from "../redux/CardSlice";

const cardData = {
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  ccv: "",
  bankName: ""
};

const AddNewCardPage = () => {
  const card = useSelector((state) => state.activeCard);
  const dispatch = useDispatch();
  const [values, setValues] = useState(cardData);
  console.log(card);

  const handleOnChange = (e) => {
    const nextCard = {
      ...values,
      [e.target.name]: e.target.value
    };
    setValues(nextCard);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (card.cardData.length <= 3) {
      dispatch(addCard(values));
      setValues(cardData);
      console.log(card.cardData);
    } else {
      alert("Max limit");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Number:
          <input
            type="number"
            name="number"
            id="cardNumber"
            maxLength="16"
            value={cardNumber}
            onChange={handleOnChange}
          /> </label>
        <label>Cardholders Name:
          <input
          type="text"
          id="cardholder"
          name="name"
          value={cardName}
          onChange={handleOnChange}
        /></label>
        <label>Expiration date:
          <input
          type="number"
          name="expiry"
          value={cardMonth/cardYear}
          onChange={handleOnChange}
          id="expirationDate"
          placeholder="MM/YY"
        /></label>
        <label>CCV:
        <input
          type="number"
          name="ccv"
          maxLength="3"
          value={ccv}
          onChange={handleOnChange}
          id="cvc"
        /></label>
        <select defaultValue="" name="cardOptions" id="cardOptions">
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
