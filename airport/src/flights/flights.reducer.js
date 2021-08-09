import { FLIGHTS_LIST_RECIEVED } from "./flights.actions.js";

const initialState = {
  flights: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flights: action.payload.flights,
      };
    default:
      return state;
  }
};

export default flightsReducer;
