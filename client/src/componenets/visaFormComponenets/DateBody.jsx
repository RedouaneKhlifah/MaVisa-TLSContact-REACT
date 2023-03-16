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

function DateBody() {
  ////// set fucnction navigate to use it to change the Page //////
  const navigate = useNavigate();

  /// api url ///
  const url = "http://TLSContact/create/add_reservation";

  ///// use state /////
  const [data, setdata] = useState({
    date_reservation: "",
    time: "",
  });
  function handle(e) {
    const newdata = { ...data };
    ////// make a copy from data /////
    newdata[e.target.id] = e.target.value;
    ////// set value to inputs ////
    setdata(newdata);
  }

  ////// submut btn function ///////
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

  const [disabledDates, setDisabledDates] = useState([]);

  //////////// get day if it full //////////
  useEffect(() => {
    // Fetch the disabled dates from the database and store them in the state /////
    fetch("http://TLSContact:80/read/get_disabled_dates")
      .then((response) => response.json())
      .then((data) => {
        data = data.data;

        ///// loop trought array /////
        data = data.map((dates) => {
          return dates.date_reservation;
        });

        //// amke dates in Date format //////
        const disabledDatesArray = data.map(
          (dateString) => new Date(dateString)
        );
        ///// set DisabledDates ///
        setDisabledDates(disabledDatesArray);
      });
  }, []);

  ////// check the dates and return true or false for the filter in datepicker //////////
  const isDateDisabled = (date) => {
    // Check if the date is in the array of disabled dates //////
    return !disabledDates.some((disabledDate) => {
      return (
        disabledDate.getDate() === date.getDate() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const [b, setB] = useState("");
  const [appointmentTimes, setAppointmentTimes] = useState([]);

  /////// get value from datepicker inpute and change it to date fomrat /////
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

  //////// get the free dates in th select /////////
  useEffect(() => {
    /////////// problem in date picker react /////
    if (rdvDate !== "NaN-NaN-NaN") {
      data.date_reservation = rdvDate;
      const url_times = "http://TLSContact/read/get_times";

      //////// get the dayes reservation that is not disabled /////////
      axios
        .post(url_times, {
          date_reservation: data.date_reservation,
        })
        .then((res) => {
          let array = res.data;

          //////// filter the array and get anly free dates ///////
          array = allAppointmentTimes.filter((str) => !array.includes(str));

          setAppointmentTimes(array);
        });
    }
  });

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
