
import Cards from "react-credit-cards";
import { useSelector } from "react-redux";
import "../assets/styles/StyledCard.css";
const Card = ({ number, expiry, cvc, focus }) => {
  const { cardHolderName } = useSelector((state) => state.cards.activeCard);
  return (
    <div className="card-container">
      <Cards
        name={cardHolderName}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
    </div>
  );
};

export default Card;
