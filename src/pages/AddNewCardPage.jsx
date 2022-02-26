import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Cards from "react-credit-cards";
import { addCard } from "../redux/CardSlice";
import "react-credit-cards/es/styles-compiled.css";
import { AiOutlineCheck } from "react-icons/ai";
const AddNewCardPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
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
        focus: focus,
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
      <Cards
        name={name}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form>
        <div>
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
              value={number}
              onFocus={(e) => setFocus(e.target.name)}
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
              value={name}
              onFocus={(e) => setFocus(e.target.name)}
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
              value={expiry}
              onFocus={(e) => setFocus(e.target.name)}
              id="expirationDate"
              placeholder="MM/YY"
            />
          </label>

          <label htmlFor="cvc">
            CCV:
            <input
              type="number"
              name="cvc"
              maxLength="3"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              value={cvc}
              onFocus={(e) => setFocus(e.target.name)}
              id="cvc"
            />
          </label>
        </div>
      </form>
      <div className="check-icon-container">
        <Link to="/mycards" onClick={handleNewCard}>
          <AiOutlineCheck className="check-icon" />
        </Link>
      </div>
    </div>
  );
};

export default AddNewCardPage;
