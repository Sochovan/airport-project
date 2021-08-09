import React from "react";
import "./flightsSchedule.scss";
import * as flightsAction from "../../flights/flights.actions";
import { connect } from "react-redux";

class FlightsSchedule extends React.Component {
  // componentDidMount() {
  //   this.props.getFlightsList();
  // }

  render() {
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
            <tr>
              <td className="terminal-field">
                <span className="text-style">A</span>
              </td>
              <td className="time-field">3:30</td>
              <td className="way-field">
                <span>Antalia</span>
              </td>
              <td className="status-field">
                <div>Landed at 3:28</div>
              </td>
              <td className="company-name">
                <ul>
                  <li className="one-airline">
                    <img
                      className="logo"
                      src="https://api.iev.aero/media/airline/files/604bbdf45b1ad855035563.png"
                      alt="airline logo"
                    />
                    <span className="company_name">Bees Aitline</span>
                  </li>
                </ul>
              </td>
              <td className="flight-field">
                <span>7B9001</span>
              </td>
              <td className="details-field">
                <div style={{}}>
                  <a href="">Flight's details</a>
                </div>
              </td>
            </tr>
            <tr>
              <td className="terminal-field">
                <span className="text-style">B</span>
              </td>
              <td className="time-field">5:30</td>
              <td className="way-field">
                <span>Budapest</span>
              </td>
              <td className="status-field">
                <div>Landed at 7:28</div>
              </td>
              <td className="company-name">
                <ul>
                  <li className="one-airline">
                    <img
                      className="logo"
                      src="https://api.iev.aero/media/airline/files/604bbdf45b1ad855035563.png"
                      alt="airline logo"
                    />

                    <span className="company_name">Bees Aitline</span>
                  </li>
                </ul>
              </td>
              <td className="flight-field">
                <span>7A3005</span>
              </td>
              <td className="details-field">
                <div style={{}}>
                  <a href="">Flight's details</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatch = {
  getFlightsList: flightsAction.getFlightsList,
};

export default connect(null, mapDispatch)(FlightsSchedule);
