import axios from "axios";
import React, { useState } from "react";

let country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
let familystatus = ["Married", "divorced", "veuf", "Jamais marié"];
let visaTypee = ["Short-stay(more than 90)", "Long-stay(less than 90)"];
let typedocument = ["passeport", "carte d'identité"];

function Status() {
  const [Submited, Setsubmited] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  let [numberOfTries, SetnumberOfTries] = useState(4);
  let [showBannedMessage, SetshowBannedMessage] = useState(false);
  let [showupadteinputs, Setshowupadteinputs] = useState(false);
  let [successUpadateMessage, SetsuccessUpadateMessage] = useState(false);
  const [Reference_Key, SetReference_Key] = useState("");
  const [id_user, setid_user] = useState("");
  const [showrRsevationInfo, setshowrRsevationInfo] = useState("false");

  const [dateResevation, setdateresevation] = useState("");
  const [time, setTime] = useState("");

  const [data, setdata] = useState({
    First_name: "",
    Last_name: "",
    date_of_birth: "",
    nationality: "",
    address: "",
    family_status: "",
    visat_ype: "",
    Date_of_departure: "",
    Date_of_arrival: "",
  });

  /// hundel inputs ////
  function handle(event) {
    const newdata = { ...data };
    newdata[event.target.id] = event.target.value;
    console.log(newdata);
    setdata(newdata);
  }

  /// update btn function /////
  const update = (event) => {
    event.preventDefault();

    axios
      .put(`http://TLSContact:80/update/update/${id_user}`, {
        First_name: data.First_name,
        Last_name: data.Last_name,
        date_of_birth: data.date_of_birth,
        nationality: data.nationality,
        address: data.address,
        family_status: data.family_status,
        visat_ype: data.visat_ype,
        Date_of_departure: data.Date_of_departure,
        Date_of_arrival: data.Date_of_arrival,
        document_type: data.document_type,
      })
      .then((res) => {
        console.log(res.data);
        Setsubmited(true);
        Setshowupadteinputs(false);
        SetsuccessUpadateMessage(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ////// refrence_key input handler //////
  const HandleChange = (event) => {
    SetReference_Key(event.target.value);
  };

  /////////// submit button function ///////
  const SubmitEvent = (event) => {
    event.preventDefault();
    console.log(Reference_Key);

    axios
      .post(`http://TLSContact:80/read/get_user/${Reference_Key}`)
      .then((res) => {
        console.log(res);
        let id = res.data.id_user;
        axios
          .post(`http://TLSContact:80/read/get_the_reservation/${id}`)
          .then((res) => {
            console.log(res.data);
            setshowrRsevationInfo(true);
            setdateresevation(res.data.date_reservation);
            setTime(res.data.time);
          })
          .catch((error) => {
            console.log(error);
          });

        /// show the user info ////
        Setsubmited(true);
        Setshowupadteinputs(false);
        SetsuccessUpadateMessage(false);

        /////// hide the error message ///
        setShowErrorMessage(false);

        setid_user(res.data.id_user);
        setdata((prevState) => ({
          First_name: res.data.First_name,
          Last_name: res.data.Last_name,
          date_of_birth: res.data.date_of_birth,
          nationality: res.data.nationality,
          address: res.data.address,
          family_status: res.data.family_status,
          visat_ype: res.data.visat_ype,
          Date_of_departure: res.data.Date_of_departure,
          Date_of_arrival: res.data.Date_of_arrival,
          document_type: res.data.document_type,
        }));
      })
      .catch((Error) => {
        console.log(Error);

        ///// hide user info /////
        Setsubmited(false);

        ////// show error message /////
        setShowErrorMessage(true);

        //// decrease number of tries ///
        SetnumberOfTries(numberOfTries - 1);
        if (numberOfTries === 1) {
          ///// hide error message and show banned message ////
          setShowErrorMessage(false);
          SetshowBannedMessage(true);
        }
      });
  };

  const updatbtn = (event) => {
    event.preventDefault();
    Setsubmited(false);
    Setshowupadteinputs(true);
  };

  return (
    <center>
      <div className="FormBox">
        <form className="Form">
          <label className="fname"> Check My status : </label>
          <input
            onChange={(e) => HandleChange(e)}
            className="formInput"
            id="First_name"
            type="text"
          />

          <button
            onClick={SubmitEvent}
            className="btn btn-primary rounded-pill px-5 py-2 my-3"
            disabled={numberOfTries === 0} // disable button if no more attempts left
          >
            Submit
          </button>
        </form>
        {/* check Submited  */}
        {Submited ? (
          <div className="container">
            <p className="textinformUser">
              Thank you for submitting your visa application. Our team is
              currently processing your documents and will contact you if we
              require any additional information
            </p>

            {showrRsevationInfo ? (
              <>
                <h5 className="py-2">reservation</h5>
                <label className="fname">
                  date of resevation :
                  <p className="datacontainer"> {dateResevation} </p>
                </label>
                <label className="fname">
                  time :<p className="datacontainer"> {time}</p>
                </label>
              </>
            ) : null}

            {successUpadateMessage ? (
              <p id="success" className="text-success">
                Updated successfully
              </p>
            ) : null}

            <h5 className="py-2">personal information</h5>
            <div className="row">
              <div className="col-lg-6">
                <label className="fname">
                  First Name :
                  <p className="datacontainer"> {data.First_name} </p>
                </label>
                <label className="fname">
                  Date of birth :
                  <p className="datacontainer"> {data.date_of_birth}</p>
                </label>
                <label className="fname">
                  situation familiale :
                  <p className="datacontainer">{data.family_status}</p>
                </label>
                <label className="fname">
                  date de départ :
                  <p className="datacontainer"> {data.Date_of_departure}</p>
                </label>
                <label className="fname">
                  type de visa :
                  <p className="datacontainer"> {data.visat_ype}</p>
                </label>
              </div>
              <div className="col-lg-6">
                <label className="fname">
                  Last Name :<p className="datacontainer"> {data.Last_name}</p>
                </label>
                <label className="fname">
                  nationalité :
                  <p className="datacontainer"> {data.nationality}</p>
                </label>
                <label className="fname">
                  Adress :<p className="datacontainer"> {data.address}</p>
                </label>
                <label className="fname">
                  date d'arriver :
                  <p className="datacontainer"> {data.Date_of_arrival}</p>
                </label>
                <label className="fname">
                  Type de document :
                  <p className="datacontainer"> {data.document_type} </p>
                </label>
              </div>
            </div>
            <button
              className="btn btn-primary rounded-pill px-5 py-2 my-3"
              onClick={(event) => updatbtn(event)}
            >
              Update
            </button>
          </div>
        ) : null}
        {/* check showErrorMessage  */}
        {showErrorMessage ? (
          <p className="boxtext key " id="boxtext">
            "Warning: You have {numberOfTries} attempts remaining to enter a
            valid reference key. If you are unable to enter a valid key after
            three attempts, your access to this service will be temporarily
            suspended. Please ensure that you have the correct reference key
            before attempting again."
          </p>
        ) : null}
        {/* check showBannedMessage  */}
        {showBannedMessage ? (
          <p className="boxtext key " id="boxtext">
            Sorry, you have been temporarily suspended from accessing this
            service. You exceeded the maximum number of attempts to enter a
            valid reference key. Please try again later or contact our support
            team for further assistance."
          </p>
        ) : null}
        {showupadteinputs ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <label className="fname">First Name * : </label>
                  <input
                    className="formInput"
                    id="First_name"
                    type="text"
                    defaultValue={data.First_name}
                    onChange={(e) => handle(e)}
                  />
                  <label className="fname">Last Name * : </label>
                  <input
                    onChange={(e) => handle(e)}
                    className="formInput"
                    defaultValue={data.Last_name}
                    id="Last_name"
                    type="text"
                  />
                  <label className="fname">Date of birth * :</label>
                  <input
                    onChange={(e) => handle(e)}
                    id="date_of_birth"
                    defaultValue={data.date_of_birth}
                    className="formInput"
                    type="date"
                    name="name"
                  />

                  <label className="fname">situation familiale * :</label>
                  <select
                    id="family_status"
                    defaultValue={data.family_status}
                    name="familystatus"
                    className="select"
                    onChange={(e) => handle(e)}
                  >
                    <option value="">Select option</option>
                    {familystatus.map((Element, index) => {
                      return (
                        <option key={index} value={Element}>
                          {Element}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-6">
                  <label className="fname">Adress * :</label>
                  <input
                    defaultValue={data.address}
                    onChange={(e) => handle(e)}
                    id="address"
                    className="formInput"
                    type="text"
                    name="Adress"
                  />
                  <label className="fname">date de départ * :</label>
                  <input
                    defaultValue={data.Date_of_departure}
                    onChange={(e) => handle(e)}
                    id="Date_of_departure"
                    className="formInput"
                    type="date"
                    name="name"
                  />

                  <label className="fname">date d'arriver * :</label>
                  <input
                    defaultValue={data.Date_of_arrival}
                    onChange={(e) => handle(e)}
                    id="Date_of_arrival"
                    className="formInput"
                    type="date"
                    name="name"
                  />

                  <label className="fname">nationalité * :</label>
                  <select
                    defaultValue={data.nationality}
                    id="nationality"
                    name="Nationality"
                    className="select"
                    onChange={(e) => handle(e)}
                  >
                    <option value="">Select option</option>
                    {country_list.map((Element, index) => {
                      return (
                        <option key={index} value={Element}>
                          {Element}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
            <form className="Form">
              <div className="d-flex justify-content-center">
                <button
                  onClick={(event) => update(event)}
                  className="btn btn-primary rounded-pill px-5 py-2 mb-3"
                >
                  Update
                </button>
              </div>
            </form>
          </>
        ) : null}
      </div>
    </center>
  );
}

export default Status;
