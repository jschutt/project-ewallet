import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Cards from "react-credit-cards";
import { addCard } from "../redux/CardSlice";
import "react-credit-cards/es/styles-compiled.css";
import { AiOutlineCheck } from "react-icons/ai";
const AddNewCardPage = () => {
  //const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  // get the fetch username state from the redux store
  const { cardHolderName } = useSelector((state) => state.cards.activeCard);
  const { cards } = useSelector((state) => state.cards);

  let dispatch = useDispatch();
  let history = useHistory();
  const handleNewCard = () => {
    if (cards.length < 3 && addCard.Number === '') {
      dispatch(
        addCard({
          cardName: cardHolderName,
          cardNumber: number,
          expiry: expiry,
          cvc: cvc,
          type: "VISA",
          active: false,
          focus: focus,
        })
      );
        history.push("/mycards")
       
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div>
      <Cards
        name={cardHolderName}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">
            Number:
            <input
              type="text"
              name="number"
              id="cardNumber"
              maxLength="16"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              placeholder="16 digits starts with either 2, 4  or 5"
              value={number}
              onFocus={(e) => setFocus(e.target.name)}
              required
              min="16"
              max="16"
              pattern="[2-5][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
              title="Credit card number must start with either 2,4 or 5 and contain 16 digits."
            />{" "}
          </label>

          <label htmlFor="cardholder">
            Cardholders Name:
            <input
              type="text"
              id="cardholder"
              name="name"
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              value={cardHolderName}
              onFocus={(e) => setFocus(e.target.name)}
              disabled
            />
          </label>

          <label htmlFor="expirationDate">
            Expiration date:
            <input
              type="text"
              name="expiry"
              onChange={(e) => {
                setExpiry(e.target.value);
              }}
              value={expiry}
              onFocus={(e) => setFocus(e.target.name)}
              id="expirationDate"
              placeholder="MM/YY"
              required
              pattern="[0-9][0-9][0-9][0-9]"
              minLength="4"
              maxLength="4"
              title="Please enter 4 digits."
              
            />
          </label>

          <label htmlFor="cvc">
            CCV:
            <input
              type="text"
              name="cvc"
              minLength="3"
              maxLength="3"
              pattern="[0-9][0-9][0-9]"
              onChange={(e) => {
                setCvc(e.target.value);
                
              }}
              value={cvc}
              onFocus={(e) => setFocus(e.target.name)}
              id="cvc"
              required
              title="Please enter 3 digits."
              
            />
          </label>
        </div>
        <div className="check-icon-container">
        <button type="submit" onClick={handleNewCard}><AiOutlineCheck className="check-icon"/></button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCardPage;
