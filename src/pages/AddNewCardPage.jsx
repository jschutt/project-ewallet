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
import '../assets/createCardPage.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {AiFillCheckCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";

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
      <Link to={{pathname:"/myCards"}}><BsFillArrowLeftCircleFill className="arrow-icon"/></Link>
      <h1 className="centerElement mainText">Add new Card</h1>
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
    
      <form className="flexBox">
        <input
          type="number"
          name="number"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => dispatch(setNumber(e.target.value))}
          onFocus={(e) => dispatch(setFocused(e.target.name))}
          placeholder="Card number"
          required
          className = "marginTop flexBasis formBackground"
        
         
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
          className = "marginTop formBackground"
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
          className = "marginTop flexBasis formBackground"
        />
        <input
          type="number"
          name="cvc"
          value={cvc}
          onChange={(e) => dispatch(setCvc(e.target.value))}
          onFocus={(e) => dispatch(setFocused(e.target.name))}
          id="cvc"
          placeholder="CVC"
          className = "marginTop formBackground"
          
        />
        <select defaultValue="" name="cardOptions" id="cardOptions" required className = "marginTop flexBasis formBackground">
          <option value="" disabled>
            Choose card manufacturer
          </option>
          <option value="visa">VISA</option>
          <option value="mastercard">MasterCard</option>
        </select>
      </form>
      <div className="centerElement marginTop">
        <Link to={{pathname:"/myCards"}}>
        <i><AiFillCheckCircle className="done-icon"/> </i>
        </Link>
      </div>
    </div>
  );
};

export default AddNewCardPage;
