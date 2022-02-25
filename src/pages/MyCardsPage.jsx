import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "react-credit-cards/es/styles-compiled.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRandomUser } from "../redux/CardSlice";
import AllCards from "../components/AllCards";

const MyCardsPage = () => {
  const { cardHolderName, cardNumber, expiry, cvc } = useSelector(
    (state) => state.cards.activeCard
  );
  //console.log(cardNumber);  // kontrolutskrift

  // dispatch the fetch
  let dispatch = useDispatch();

  // fetch data with useEffect hook
  useEffect(() => {
    dispatch(getRandomUser());
  }, []);

  return (
    <div>
      <Link to={{ pathname: "/" }}>
        <BsFillArrowLeftCircleFill className="arrow-icon" />
      </Link>

      <Card
        name={cardHolderName}
        number={cardNumber}
        expiry={expiry}
        cvc={cvc}
      />
      <Link to={`/createcard`}>
        <button>Add new card<AiOutlinePlusCircle/></button>
      </Link>
      <AllCards/>
    </div>
  );
};

export default MyCardsPage;
