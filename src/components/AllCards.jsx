import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Card from "./Card";

const AllCards = () => {
  // get the cardList state from the redux store so we can map through and put into the array
  const { cards } = useSelector((state) => state.cards);
  const [name, setName] = useState("")
  let dispatch =useDispatch();

 
  return (
    <div>
      <h1>All my cards</h1>
      {cards.length > 0 &&
        cards.length < 4 &&
        cards.map(({ cardNumber, cardHolderName, expiry, cvc }, i) => (
          <Card
            key={i}
            name={cardHolderName}
            number={cardNumber}
            expiry={expiry}
            cvc={cvc}
          />
        ))}
    </div>
  );
};

export default AllCards;
