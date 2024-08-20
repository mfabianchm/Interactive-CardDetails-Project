import "../App.css";
import checkIcon from "../assets/images/icon-complete.svg";

function Success({ resetForm }) {
  return (
    <div className="success-section-container">
      <img src={checkIcon} alt="check-img" className="success-image"></img>
      <h1 className="thanks-text">THANK YOU!</h1>
      <p className="details-success-text">We´ve added your card details</p>
      <button className="success-btn" onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}

export default Success;
