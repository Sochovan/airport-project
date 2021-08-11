import React, { useEffect } from "react";
import "./flightsSchedule.scss";
import * as flightsAction from "../../flights/flights.actions";
import { connect } from "react-redux";
import {
  filteredFlightsListSelector,
  filterListSelector,
} from "../../flights/flights.selectors";
import { useParams, useLocation } from "react-router-dom";
import Flight from "../flight/Flight.jsx";
import qs from "qs";
import moment from "moment";
import PropTypes from "prop-types";

const FlightsSchedule = ({
  getFlightsList,
  flightsList,
  getFilteredFlightsList,
}) => {
  const { direction } = useParams();
  const { search } = useLocation();
  const querySearch = qs.parse(search, { ignoreQueryPrefix: true }).search;

  useEffect(() => {
    getFlightsList(direction);
  }, [direction]);

  useEffect(() => {
    getFilteredFlightsList(querySearch);
  }, [querySearch]);

  if (flightsList.length === 0) {
    return <h2 className="no-flights">No flights</h2>;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Terminal</th>
            <th scope="col">Local Time</th>
            <th scope="col">Destination</th>
            <th scope="col">Status</th>
            <th scope="col">Airline</th>
            <th scope="col">Flight</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {flightsList
            .filter(
              (flight) =>
                moment(flight.timeToStand).format("DD-MM-YYYY") ===
                moment(new Date()).format("DD-MM-YYYY")
            )
            .map((flight) => (
              <Flight flight={flight} key={flight.ID} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
  getFilteredFlightsList: flightsAction.getFilteredFlightsList,
};

const mapState = (state) => ({
  flightsNumber: filterListSelector(state),
  flightsList: filteredFlightsListSelector(state),
});

FlightsSchedule.propTypes = {
  getFlightsList: PropTypes.func.isRequired,
  flightsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getFilteredFlightsList: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(FlightsSchedule);
