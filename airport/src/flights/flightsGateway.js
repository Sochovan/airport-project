import moment from "moment";

const baseUrl = "https://api.iev.aero/api/flights";
const currentDate = moment(new Date()).format("DD-MM-YYYY");

export const fetchFlightsList = () =>
  fetch(`${baseUrl}/${currentDate}`).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return null;
  });

