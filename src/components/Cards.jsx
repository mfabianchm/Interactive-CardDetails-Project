import "../App.css";
import appLogo from "../assets/images/card-logo.svg";

const Cards = ({ cardData: { cvc, cardNumber, name, month, year } }) => {
  return (
    <div className="cards-container">
      <div className="cards-inner-container">
        <div className="card-01">
          <p className="cvc">{cvc}</p>
        </div>
        <div className="card-02">
          <img src={appLogo} alt="app-logo" className="app-logo"></img>
          <p className="card-number">{cardNumber}</p>
          <div className="name-date-container">
            <p className="name">{name}</p>
            <p className="expiration-date">
              {month}/{year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
