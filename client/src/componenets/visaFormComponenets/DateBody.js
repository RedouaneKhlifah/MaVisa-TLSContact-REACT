import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

let allAppointmentTimes = [
  "08:00 - 09:30",
  "09:45 - 11:15",
  "02:00 - 03:30",
  "03:45 - 05:15",
];

// function App() {
//     const [startDate, setStartDate] = useState(new Date());

//   useEffect(() => {
//     // Fetch the data from the database
//     fetch("http://your-api-endpoint.com/disabled-dates")
//     console.log();
//       .then((res) => res.json())
//       .then((data) => {
//         const disabledDates = data.map((date) => new Date(date));
//         setDatesDisabled(disabledDates);
//       });
//   }, []);
// }

function DateBody() {
  const navigate = useNavigate();
  
  const url = "http://TLSContact/create/add_reservation";

  const [data, setdata] = useState({
    date_reservation: "",
    time: "",
  });
  function handle(e) {
    const newdata = { ...data };
    // console.log({ ...data });
    newdata[e.target.id] = e.target.value;
    console.log(newdata);
    setdata(newdata);
  }

  const SubmitEvent = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        date_reservation: data.date_reservation,
        time: data.time,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/Reference_Key");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const [startDate, setStartDate] = useState(new Date());

  // const handleChange = (date) => {
  //   console.log("Date has changed to", date);

  //   // setStartDate(date);
  // };

  // const [datesDisabled, setDatesDisabled] = useState([]);

  // useEffect(() => {
  //   // Fetch the data from the database
  //   fetch("http://TLSContact:80/read/get_users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       data = data.data;
  //       data = data.map((dates) => {
  //         return dates.date_of_birth;
  //       });
  //       console.log(data);
  //       const disabledDates = data.map((date) => new Date(date));
  //       console.log(disabledDates);
  //       setDatesDisabled(disabledDates);
  //     });
  // }, []);

  // const disabledDates = [new Date("2022-01-03")];

  // const [selectedDate, setSelectedDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    // Fetch the disabled dates from the database and store them in the state
    fetch("http://TLSContact:80/read/get_disabled_dates")
      .then((response) => response.json())
      .then((data) => {
        data = data.data;
        data = data.map((dates) => {
          return dates.date_reservation;
        });
        console.log(data);

        const disabledDatesArray = data.map(
          (dateString) => new Date(dateString)
        );
        console.log(disabledDatesArray);
        setDisabledDates(disabledDatesArray);
      });
  }, []);

  const isDateDisabled = (date) => {
    // Check if the date is in the array of disabled dates
    return !disabledDates.some((disabledDate) => {
      return (
        disabledDate.getDate() === date.getDate() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getFullYear() === date.getFullYear()
      );
    });
  };
  // let htmlElement;

  // if (selectedDate) {
  //   console.log(selectedDate.toISOString().split("T")[0]);
  //   htmlElement = "";
  //   // htmlElement = `          <select
  //   //   onChange={(e) => handle(e)}
  //   //   id="nationality"
  //   //   name="Nationality"
  //   //   className="select"
  //   // >
  //   //   <option value="">Select option</option>
  //   //   {country_list.map((Element, index) => {
  //   //     return (
  //   //       <option key={index} value={Element}>
  //   //         {Element}
  //   //       </option>
  //   //     );
  //   //   })}
  //   // </select>`;

  //   // htmlElement =
  // }

  //// salho stupid code  hh///

  const [b, setB] = useState("");
  const [appointmentTimes, setAppointmentTimes] = useState([]);

  let rdvDate =
    new Date(b).getFullYear() +
    "-" +
    (Number(new Date(b).getMonth() + 1) < 10
      ? "0" + Number(new Date(b).getMonth() + 1)
      : Number(new Date(b).getMonth() + 1)) +
    "-" +
    (new Date(b).getDate() < 10
      ? "0" + new Date(b).getDate()
      : new Date(b).getDate());

  useEffect(() => {
    // Fetch appointment times
    if (rdvDate !== "NaN-NaN-NaN") {
      data.date_reservation = rdvDate;
      const url_times = "http://TLSContact/read/get_times";
      axios
        .post(url_times, {
          date_reservation: data.date_reservation,
        })
        .then((res) => {
          console.log("re");
          let array = res.data;
          array = allAppointmentTimes.filter((str) => !array.includes(str));
          console.log(array);

          setAppointmentTimes(array);
        });
    }
  });

  //// end of salho stupid code hh///

  // console.log(b.;

  // const [loading, setLoading] = useState(true);

  // if (b) {
  //   const url_times = "http://TLSContact/read/get_times";
  //   axios
  //     .post(url_times, {
  //       date_reservation: data.date_reservation,
  //     })
  //     .then((res) => {
  //       console.log("re");
  //       let array = res.data;
  //       console.log(array);
  //       // apontmentTime = [];
  //       apontmentTime = [...array];
  //       console.log(apontmentTime);
  //       // setLoading(false); // Set loading to false when the data has been fetched and processed
  //     });
  // }

  return (
    <center>
      <div className="FormBox">
        <form className="Form">
          <label className="fname">Date of birth * :</label>
          <DatePicker
            onChange={(e) => setB(e)}
            id="date_reservation"
            filterDate={isDateDisabled}
            value={data.date_reservation}
            className="formInput"
            name="date_reservation"
          />

          <div>
            <select
              id="time"
              name="time"
              className="select"
              onChange={(e) => handle(e)}
            >
              <option value="">Select time</option>
              {appointmentTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex justify-content-center">
            <button
              onClick={SubmitEvent}
              id=""
              className="btn btn-primary rounded-pill px-5 py-2 mt-5 mb-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

export default DateBody;
