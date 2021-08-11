import React, { useEffect, useState } from "react";
import "../flightsSchedule/flightsSchedule.scss";
import moment from "moment";
import { useLocation } from "react-router-dom";

const Flight = ({ flight }) => {
  const [time, setTime] = useState({
    localTime: null,
    status: null,
  });

  const { pathname } = useLocation();

  const termStyle =
    flight.term === "A"
      ? "terminal-field terminal-field_green"
      : "terminal-field terminal-field_blue";

  useEffect(() => {
    const localTimeDep = moment(flight["timeDepShedule"]).format("H:mm");
    const localTimeArr = moment(flight["timeToStand"]).format("H:mm");
    const localTime = pathname === "/departures" ? localTimeDep : localTimeArr;

    const statusDep = moment(flight["timeTakeofFact"]).format("H:mm");
    const statusArr = moment(flight["timeLandFact"]).format("H:mm");
    const status = pathname === "/departures" ? statusDep : statusArr;

    setTime({
      localTime,
      status,
    });
  }, []);


  return (
    <>
      <tr>
        <td>
          <span className={termStyle}>{flight.term}</span>
        </td>
        <td className="time-field">{time.localTime}</td>
        <td className="way-field">
          <span>
            {flight["airportToID.name_en"]}
            {flight["airportFromID.name_en"]}
          </span>
        </td>
        <td className="status-field">
          <div>{`Landed at ${time.status}`}</div>
        </td>
        <td className="company-name">
          <div className="one-airline">
            <img
              className="airline_logo"
              src={flight.airline.en.logoSmallName}
              alt="airline logo"
            />
            <span className="airline_name">{flight.airline.en.name}</span>
          </div>
        </td>
        <td className="flight-field">
          <span>{`${flight["carrierID.IATA"]}${flight.fltNo}`}</span>
        </td>
        <td className="details-field">
          <div style={{}}>
            <a href="">Flight's details</a>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Flight;
