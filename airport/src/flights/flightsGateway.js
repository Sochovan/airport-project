import moment from "moment";

const baseUrl = "https://api.iev.aero/api/flights";
const currentDate = moment(new Date()).format("DD-MM-YYYY");
console.log(currentDate);

export const fetchFlightsList = () =>
  fetch(`${baseUrl}/${currentDate}`).then((res) => {
    debugger;
    if (res.ok) {
      return res.json();
    }
    debugger;
    return null;
  });
