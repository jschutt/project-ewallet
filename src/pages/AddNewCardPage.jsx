import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomUser, addCard } from "../redux/CardSlice";
import "../assets/styles/createCardPage.css"
import {AiFillCheckCircle} from 'react-icons/ai'
import { Link } from "react-router-dom";

const cardData = {
  cardName: "",
  cardNumber: "",
  cardMonth: "",
  cardYear: "",
  ccv: ""
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
    <div >
      <h1 className="centerElement mainText">Add new card</h1>
      <form onSubmit={handleSubmit} className="flexBox">
        <input
          type="number"
          name="number"
          id="cardNumber"
          maxLength='16'
          value=""
          onChange={handleOnChange}
          value={cardData.cardNumber}
          placeholder="Card number"
          className="formBackground flexBasis"
          /> 
        <input
          type="text"
          id="cardholder"
          name="name"
          value={cardData.cardName}
          onChange={handleOnChange}
          placeholder="Card name"
          className="formBackground flexBasis"
        />
        <input
          type="number"
          name="expiry"
           value={cardData.cardMonth/cardData.cardYear}
          onChange={handleOnChange}
          id="expirationDate"
          placeholder="MM/YY"
          className="formBackground flexBasisFifty"
        />
        <input
          type="number"
          name="ccv"
          maxLength="3"
          value={cardData.ccv}
          onChange={handleOnChange}
          id="cvc"
          placeholder="CVC"
          className="formBackground"
        />
     
        <div className="flexBasis">
         <select defaultValue="" name="cardOptions" id="cardOptions" className="formBackground">
            <option disabled value="">Select card manufacturer</option>
            <option value="visa">VISA</option>
            <option value="mastercard">MasterCard</option>
         </select>
        </div>
      <div className>
      <Link to={{pathname: "/mycards"}}>
        <i><AiFillCheckCircle className="done-icon"/> </i>
        </Link>
      </div>
      </form>
    </div>
  );
};


export default AddNewCardPage;
