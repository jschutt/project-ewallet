import { IoIosAddCircle } from "react-icons/io";
import Cards from "react-credit-cards";
const Card = ({ name, number, expiry, cvc }) => {
  return (
    <>
      <Cards name={name} number={number} expiry={expiry} cvc={cvc} />
    </>
  );
};

export default Card;
