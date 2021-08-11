import { createSelector } from "reselect";

export const flightsListSelector = (state) => state.flights.flightsList;

export const filterListSelector = (state) => {
  state.flights.flightNumber;
};

export const filteredFlightsListSelector = createSelector(
  [flightsListSelector, filterListSelector],
  (flightsList, flightNumber) => {
    return flightNumber
      ? flightsList.filter((flight) =>
          flight[fltNo].includes(flightNumber)
        )
      : flightsList;
  }
);
