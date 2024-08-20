function reducer(state, action) {
  switch (action.type) {
    case "changed_name": {
      return {
        ...state,
        name: action.nextName,
      };
    }
    case "changed_card_number": {
      let cardNumber = action.nextCardNumber;

      const formattedCardNumber = cardNumber.match(/.{1,4}/g);
      return {
        ...state,
        cardNumber: formattedCardNumber.join(" "),
      };
    }
    case "changed_month": {
      return {
        ...state,
        month: action.nextMonth,
      };
    }
    case "changed_year": {
      return {
        ...state,
        year: action.nextYear,
      };
    }
    case "changed_cvc": {
      return {
        ...state,
        cvc: action.nextCvc,
      };
    }
    case "reset_form": {
      return {
        name: action.cardData.name,
        cvc: action.cardData.cvc,
        month: action.cardData.month,
        year: action.cardData.year,
        cardNumber: action.cardData.cardNumber,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default reducer;
