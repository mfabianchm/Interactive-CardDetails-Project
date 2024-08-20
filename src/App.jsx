import { useReducer, useState } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";
import Success from "./components/Success";
import reducer from "./reducer/reducer";

import "./App.css";

function App() {
  const cardData = {
    cvc: "000",
    cardNumber: "0000 0000 0000 0000",
    name: "JANE APPLESEED",
    month: "00",
    year: "00",
  };

  const [user, dispatch] = useReducer(reducer, cardData);
  const [formIsOk, setFormIsOk] = useState(false);

  function resetForm() {
    setFormIsOk(false);
    dispatch({
      type: "reset_form",
      cardData,
    });
  }

  function handleNameChange(e) {
    if (e.target.value.length === 0) {
      dispatch({
        type: "changed_name",
        nextName: "JANE APPLESEED",
      });
      return;
    }
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  function handleCardNumberChange(e) {
    if (e.target.value.length === 0) {
      dispatch({
        type: "changed_card_number",
        nextCardNumber: "0000000000000000",
      });
      return;
    }

    if (e.target.value.length > 16) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    dispatch({
      type: "changed_card_number",
      nextCardNumber: e.target.value,
    });
  }

  function handleMonthChange(e) {
    if (e.target.value.length === 0) {
      dispatch({
        type: "changed_month",
        nextMonth: "00",
      });
      return;
    }

    if (e.target.value.length > 2) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    dispatch({
      type: "changed_month",
      nextMonth: e.target.value,
    });
  }

  function handleYearChange(e) {
    if (e.target.value.length === 0) {
      dispatch({
        type: "changed_year",
        nextYear: "00",
      });
      return;
    }

    if (e.target.value.length > 2) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    dispatch({
      type: "changed_year",
      nextYear: e.target.value,
    });
  }

  function handleCvcChange(e) {
    if (e.target.value.length === 0) {
      dispatch({
        type: "changed_cvc",
        nextCvc: "000",
      });
      return;
    }

    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, -1);
      return;
    }

    dispatch({
      type: "changed_cvc",
      nextCvc: e.target.value,
    });
  }

  const updateMethods = {
    handleNameChange,
    handleCardNumberChange,
    handleMonthChange,
    handleYearChange,
    handleCvcChange,
    setFormIsOk,
  };

  return (
    <>
      <Cards cardData={user}></Cards>
      {!formIsOk ? (
        <Form updateMethods={updateMethods} user={user}></Form>
      ) : (
        <Success resetForm={resetForm}></Success>
      )}
    </>
  );
}

export default App;
