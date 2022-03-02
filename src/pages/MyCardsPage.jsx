import React, { useEffect} from "react";
import Card from "../components/Card";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRandomUser} from "../redux/CardSlice";
import AllCards from "../components/AllCards";
import "../assets/styles/StyledMyCards.css";
const MyCardsPage = () => {
  const { cardHolderName, cardNumber, expiry, cvc, type, focus } = useSelector(
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
      <Link to={{ pathname: "/" }}></Link>

      <Card
        name={cardHolderName}
        number={cardNumber}s
        expiry={expiry}
        cvc={cvc}
        focus={focus}
        type={type}
      />
      <Link to={`/createcard`}>
        <button>
          Add new card
          <AiOutlinePlusCircle className="icon"/>
        </button>
      </Link>
      <AllCards />
    </div>
  );
};

export default MyCardsPage;
