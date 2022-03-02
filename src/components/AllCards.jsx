import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import "../assets/styles/StyledAddCard.css";
import { setActive } from "../redux/CardSlice";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "../assets/styles/StyledAllCards.css";
const AllCards = () => {
  // get the List of cards from the redux store so we can map through and put into the array
  const { cards } = useSelector((state) => state.cards);
  let dispatch = useDispatch();
  return (
    <div>
      <div>
        {cards.slice(0, 1).map((card, i) => {
          return (
            <div key={i}>
              <Card
                key={i}
                name={card.cardHolderName}
                number={card.cardNumber}
                expiry={card.expiry}
                cvc={card.cvc}
              />
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <div className="header">
          <h1>Other cards</h1>
        </div>

        {cards.slice(1, 4).map((card, i) => (
          <div key={i} className="other-cards">
            <div onClick={() => dispatch(setActive(card))}>
              <Card
                key={i}
                name={card.cardHolderName}
                number={card.cardNumber}
                expiry={card.expiry}
                cvc={card.cvc}
              />
            </div>
            <IconButton >
              <DeleteForeverIcon className="delete-icon"/>
            </IconButton>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default AllCards;
