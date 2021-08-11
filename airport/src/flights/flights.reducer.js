import {
  FLIGHTS_LIST_RECIEVED,
  GET_FILTERED_FLIGHTS_LIST,
} from "./flights.actions.js";

const initialState = {
  flightsList: [],
  flightNumber: null,
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LIST_RECIEVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    case GET_FILTERED_FLIGHTS_LIST:
      return {
        ...state,
        flightNumber: action.payload.flightNumber,
      };
    default:
      return state;
  }
};

export default flightsReducer;
