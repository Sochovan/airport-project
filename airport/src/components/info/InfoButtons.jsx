import React from "react";
import FlightsSchedule from "../flightsSchedule/FlightsSchedule";
import "./infoButtons.scss";

const InfoButtons = () => {
  return (
    <div className="info-results">
      {/* <div className="tabs"> */}
      {/* <div> */}
      <ul className="nav">
        <li className="nav-item active">
          <i className="fas fa-plane-departure"></i>
          Departures
        </li>
        <li className="nav-item">
          <i className="fas fa-plane-arrival"></i>
          Arrivals
        </li>
      </ul>
      {/* </div> */}
      {/* </div> */}
      <FlightsSchedule />
    </div>
  );
};

export default InfoButtons;