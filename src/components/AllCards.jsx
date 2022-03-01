import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import "../assets/styles/StyledAddCard.css";
import { setActive } from "../redux/CardSlice";
import { BsTrashFill } from "react-icons/bs";
import '../assets/styles/StyledAllCards.css';
const AllCards = () => {
  // get the cardList state from the redux store so we can map through and put into the array
  const { cards } = useSelector((state) => state.cards);
  let dispatch = useDispatch();
  return (
    <div>
      <div>
        <h3>My active card</h3>
        {cards.slice(0, 0).map((card, i) => {
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
        <h1>Other cards</h1>
        {
          cards
            .slice(0, 3)
            .map((card, i) => (
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
                <button className="trash-icon">
                  <BsTrashFill />
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllCards;
