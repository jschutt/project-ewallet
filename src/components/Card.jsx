import '../styles/cardStyle.css';
import { IoIosAddCircle } from "react-icons/io";

const Card = () => {
  return (
    <>
    <h1>My cards</h1>
      <div className="card">
        <div className="card__front card__part">
          <img className="card__front-square card__square" src="" />
          <img
            className="card__front-logo card__logo"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/swedbank-logo.png"
          />
          <p className="card_numer">1234 1234 1234 6258</p>
          <div className="card__space-75">
            <span className="card__label">Card holder</span>
            <p className="card__info">Ann Andresson</p>
          </div>
          <div className="card__space-25">
            <span className="card__label">Expires</span>
            <p className="card__info">10/25</p>
          </div>
        </div>

        <div className="card__back card__part">
          <div className="card__black-line"></div>
          <div className="card__back-content">
            <div className="card__secret">
              <p className="card__secret--last">123</p>
            </div>
            <img
              className="card__back-square card__square"
              src="https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png"
            />
          </div>
        </div>
      </div>
      <button>
        <IoIosAddCircle /> Add a new card
      </button>
    </>
  );
};

export default Card;
