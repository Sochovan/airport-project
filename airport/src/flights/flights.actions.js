import { fetchFlightsList } from "./flightsGateway.jsx";

export const FLIGHTS_LIST_RECIEVED = "FLIGHTS_LIST_RECIEVED";

export const flightsListRecieved = (flightsList) => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
  return action;
};

export const getFlightsList = () => {
  debugger;
  const thunkAction = function (dispatch) {
    fetchFlightsList().then((flightsList) =>
      dispatch(flightsListRecieved(flightsList))
    );
  };
  return thunkAction;
};
