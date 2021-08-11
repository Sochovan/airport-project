import { fetchFlightsList } from "./flightsGateway.js";

export const FLIGHTS_LIST_RECIEVED = "FLIGHTS_LIST_RECIEVED";
export const GET_FILTERED_FLIGHTS_LIST = "GET_FILTERED_FLIGHTS_LIST";

export const flightsListRecieved = (flightsList) => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
  return action;
};

export const getFlightsList = (direction) => {
  const thunkAction = function (dispatch) {
    fetchFlightsList().then((flightsList) =>
      dispatch(
        flightsListRecieved(flightsList.body[`${direction.slice(0, -1)}`])
      )
    );
  };
  return thunkAction;
};

export const getFilteredFlightsList = (flightNumber) => {
  return {
    type: GET_FILTERED_FLIGHTS_LIST,
    payload: {
      flightNumber,
    },
  };
};
