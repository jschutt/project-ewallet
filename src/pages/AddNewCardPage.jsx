import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/CardSlice";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import "../assets/styles/StyledAddCard.css";
const AddNewCardPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  //TODO: fixa focus
  const [focus, setFocus] = useState("");

  // get the fetch username state from the redux store
  const { cards } = useSelector((state) => state.cards);
  const { lastId } = useSelector((state) => state.cards);

  useEffect(() => {
    cards.forEach((card) => {
      if (card.active) {
        setName(card.cardHolderName);
      }
    });
  }, []);

  const dispatch = useDispatch();

  const handleNewCard = () => {
    dispatch(
      addCard({
        cardHolderName: name,
        cardNumber: number,
        expiry: expiry,
        cvc: cvc,
        active: false,
        id: lastId + 1,
      })
    );
  };

  return (
    <div>
      <h2>Create New card</h2>
      <Card name={name} number={number} expiry={expiry} cvc={cvc} />
      <form>
        {name.length === 0 ? (
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Cardholder's name"
          />
        ) : (
          <input type="text" id="cardholderName" value={name} disabled />
        )}
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          placeholder="Enter 16 digits starts with 2,3,4 or 5"
        />
        <input
          type="number"
          onChange={(e) => {
            setExpiry(e.target.value);
          }}
          placeholder="Valid thru"
        />
        <input
          type="number"
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          placeholder="CVC"
        />
      </form>
      <div className="icon-container">
        <Link to="/mycards">
          <IconButton>
            <CheckCircleIcon onClick={handleNewCard} className="icon" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
};

export default AddNewCardPage;
