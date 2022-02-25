import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { addCard } from "../redux/CardSlice";
import "react-credit-cards/es/styles-compiled.css";
const AddNewCardPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [active, setActive] = useState(false);
  let dispatch = useDispatch();

  const handleNewCard = () => {
    dispatch(
      addCard({
        cardName: name,
        cardNumber: number,
        expiry: expiry,
        cvc: cvc,
        type: "VISA",
        active: false,
      })
    );
  };

  // const handleOnChange = (e) => {
  //   const nextCard = {
  //     ...values,
  //     [e.target.name]: e.target.value
  //   };
  //   setValues(nextCard);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (card.cardData.length <= 3) {
  //     dispatch(addCard(values));
  //     setValues(cardData);
  //     console.log(card.cardData);
  //   } else {
  //     alert("Max limit");
  //   }
  // };

  return (
    <div>
     
      <Card name={name} number={number} expiry={expiry} cvc={cvc} />
      <form>
        <label htmlFor="cardNumber">
          Number:
          <input
            type="number"
            name="number"
            id="cardNumber"
            maxLength="16"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />{" "}
        </label>
        <label htmlFor="cardholder">
          Cardholders Name:
          <input
            type="text"
            id="cardholder"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="expirationDate">
          Expiration date:
          <input
            type="number"
            name="expiry"
            onChange={(e) => {
              setExpiry(e.target.value);
            }}
            id="expirationDate"
            placeholder="MM/YY"
          />
        </label>
        <label htmlFor="cvc">
          CCV:
          <input
            type="number"
            name="ccv"
            maxLength="3"
            onChange={(e) => {
              setCvc(e.target.value);
            }}
            id="cvc"
          />
        </label>
        <select defaultValue="" name="cardOptions" id="cardOptions">
          <option value="" disabled>
            Card
          </option>
          <option value="visa">VISA</option>
          <option value="mastercard">MasterCard</option>
        </select>
      </form>
      <Link to="/mycards">
        <button onClick={handleNewCard}>Add card</button>
      </Link>
      
    </div>
  );
};


export default AddNewCardPage;
