import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import Cards from "react-credit-cards";
import { useSelector } from "react-redux";

const Card = ({number, expiry, cvc, focus }) => {
  const { cardHolderName } = useSelector((state) => state.cards.activeCard);
  return (
    <>
      <Cards
        name={cardHolderName}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <MdDeleteForever className="delete_icon" />
    </>
  );
};

export default Card;
