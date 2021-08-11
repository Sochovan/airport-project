import React from "react";
import FlightsSchedule from "../flightsSchedule/FlightsSchedule";
import "./infoButtons.scss";
import { Link, useLocation, Route } from "react-router-dom";

const InfoButtons = () => {
  const { pathname } = useLocation();

  const infoDeparturesStyle =
    pathname === "/departures" ? "nav-item_active" : "";
  const infoArrivalsStyle = pathname === "/arrivals" ? "nav-item_active" : "";

  return (
    <div className="info-results">
      <ul className="nav">
        <Link
          to="/departures"
          className={`nav-item departures ${infoDeparturesStyle}`}
        >
          <i className="fas fa-plane-departure"></i>
          Departures
        </Link>

        <Link
          to="/arrivals"
          className={`nav-item arrivals ${infoArrivalsStyle}`}
        >
          <i className="fas fa-plane-arrival"></i>
          Arrivals
        </Link>
      </ul>

      <Route path="/:direction" component={FlightsSchedule} />
    </div>
  );
};

export default InfoButtons;
