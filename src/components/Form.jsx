import "../App.css";
import { useRef, useState } from "react";

const Form = ({
  updateMethods: {
    handleNameChange,
    handleCardNumberChange,
    handleMonthChange,
    handleYearChange,
    handleCvcChange,
    setFormIsOk,
  },
  user: { name, cardNumber, month, year, cvc },
}) => {
  const [nameHasError, setNameError] = useState(false);
  const [cardNumberHasError, setCardNumberError] = useState(false);
  const [expDateHasError, setExpDateError] = useState(false);
  const [cvcHasError, setCvcHasError] = useState(false);

  const [nameErrorMsg, setNameErrorMsg] = useState(false);
  const [cardNumberErrorMsg, setCardNumberErrorMsg] = useState(false);
  const [expDateErrorMsg, setExpDateErrorMsg] = useState(false);
  const [cvcErrorMsg, setCvcErrorMsg] = useState(false);

  const ErrorMessages = {
    emptyField: "Can't be blank",
    invalidName: "Name must not contain numbers",
    invalidCardNumber: "Must contain 16 numbers",
    invalidExpDate: "Must contain 2 numbers",
    invalidCvc: "Must contain 3 numbers",
  };

  const nameRef = useRef("");
  const cardNumberRef = useRef("");
  const monthRef = useRef("");
  const yearRef = useRef("");
  const cvcRef = useRef("");

  function containsNumber(str) {
    return /\d/.test(str);
  }

  function verifyNameValue() {
    if (nameRef.current.value.length == 0) {
      setNameError(true);
      setNameErrorMsg(ErrorMessages.emptyField);
      return false;
    } else if (containsNumber(name)) {
      setNameError(true);
      setNameErrorMsg(ErrorMessages.invalidName);
      return false;
    } else {
      setNameError(false);
      return true;
    }
  }

  function verifyCardNumber() {
    if (cardNumberRef.current.value.length == 0) {
      setCardNumberError(true);
      setCardNumberErrorMsg(ErrorMessages.emptyField);
      return false;
    } else if (cardNumber.length < 16) {
      setCardNumberError(true);
      setCardNumberErrorMsg(ErrorMessages.invalidCardNumber);
      return false;
    } else {
      setCardNumberError(false);
      return true;
    }
  }

  function verifyExpDate() {
    if (
      monthRef.current.value.length == 0 ||
      yearRef.current.value.length == 0
    ) {
      setExpDateError(true);
      setExpDateErrorMsg(ErrorMessages.emptyField);
      return false;
    } else if (month.length < 2 || year.length < 2) {
      setExpDateError(true);
      setExpDateErrorMsg(ErrorMessages.invalidExpDate);
      return false;
    } else {
      setExpDateError(false);
      return true;
    }
  }

  function verifyCvc() {
    if (cvcRef.current.value.length == 0) {
      setCvcHasError(true);
      setCvcErrorMsg(ErrorMessages.emptyField);
      return false;
    } else if (cvc.length < 3) {
      setCvcHasError(true);
      setCvcErrorMsg(ErrorMessages.invalidCvc);
      return false;
    } else {
      setCvcHasError(false);
      return true;
    }
  }

  function verifyFormValues() {
    let nameIsOk = verifyNameValue();
    let cardNumberIsOk = verifyCardNumber();
    let expDateIsOk = verifyExpDate();
    let cvcIsOk = verifyCvc();

    if (nameIsOk && cardNumberIsOk && expDateIsOk && cvcIsOk) {
      setFormIsOk(true);
      console.log("form is OK");
    } else {
      setFormIsOk(false);
      console.log("form is wrong");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    verifyFormValues();
  }

  return (
    <div className="form-container">
      <form>
        <div className="name-input">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            className={nameHasError && "input-error"}
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            placeholder="e.g Jane Appleseed"
            onChange={handleNameChange}
            autoCapitalize="characters"
            maxLength="32"
            required
          />
          {nameHasError && <span className="error-msg">{nameErrorMsg}</span>}
        </div>
        <div className="card-number-input">
          <label htmlFor="card-number">CARD NUMBER</label>
          <input
            className={cardNumberHasError && "input-error"}
            type="number"
            id="card-number"
            ref={cardNumberRef}
            name="card-number"
            placeholder="e.g 1234 5678 9123 0000"
            onChange={handleCardNumberChange}
            required
          />
          {cardNumberHasError && (
            <span className="error-msg">{cardNumberErrorMsg}</span>
          )}
        </div>
        <div className="date-cvc-container">
          <div className="exp-date">
            <label htmlFor="exp-date" className="exp-date-label">
              EXP. DATE (MM/YY)
            </label>
            <div className="inputs-date-cont">
              <input
                type="number"
                id="exp-date"
                name="month"
                ref={monthRef}
                className={
                  expDateHasError
                    ? "exp-date-input input-error"
                    : "exp-date-input"
                }
                placeholder="MM"
                onChange={handleMonthChange}
                maxLength="2"
                required
              />
              <input
                type="number"
                id="exp-date"
                name="year"
                ref={yearRef}
                className={
                  expDateHasError
                    ? "exp-date-input input-error"
                    : "exp-date-input"
                }
                placeholder="YY"
                onChange={handleYearChange}
                maxLength="2"
                required
              />
            </div>
            {expDateHasError && (
              <span className="error-msg">{expDateErrorMsg}</span>
            )}
          </div>
          <div className="cvc-input">
            <label htmlFor="cvc" className="cvc-label">
              CVC
            </label>
            <input
              type="number"
              className={
                expDateHasError
                  ? "cvc-input-field input-error"
                  : "cvc-input-field"
              }
              id="cvc"
              ref={cvcRef}
              name="cvc"
              placeholder="e.g. 123"
              onChange={handleCvcChange}
              maxLength="3"
              required
            />
            {cvcHasError && (
              <span className="error-msg cvc-error-msg">{cvcErrorMsg}</span>
            )}
          </div>
        </div>
        <button className="submit-btn" type="submit" onClick={submitHandler}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
