import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/CardSlice";
import Card from "../components/Card.jsx";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const handleNewCard = () => {
    dispatch(
      addCard({
        cardHolderName: name,
        cardNumber: number,
        expiry: expiry,
        cvc: cvc,
        active: false,
        id: lastId + 1,
        focus: focus,
      })
    );
    history.push("/mycards");
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
            value={name}
            onFocus={(e) => setFocus(e.target.name)}
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
          onFocus={(e) => setFocus(e.target.name)}
          value={number}
          required
          placeholder="Enter 16 digits starts with 2,3,4 or 5"
        />
        <input
          type="number"
          onChange={(e) => {
            setExpiry(e.target.value);
          }}
          onFocus={(e) => setFocus(e.target.name)}
          value={expiry}
          placeholder="Valid thru"
        />
        <input
          type="number"
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          onFocus={(e) => setFocus(e.target.name)}
          value={cvc}
          placeholder="CVC"
        />
      </form>
      <div className="btn-container">
        <button onClick={handleNewCard} className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNewCardPage;
