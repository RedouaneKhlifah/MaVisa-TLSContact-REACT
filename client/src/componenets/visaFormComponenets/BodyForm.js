import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
let visaType = ["Short-stay(< 90)", "Long-stay(> 90)"];
let typedocument = ["passeport", "carte d'identité"];

//// na3ma ////

//// na3ma ////

/// SELECT date_reservation, COUNT(*) as count
/// FROM reservation
/// GROUP BY date_reservation
/// HAVING COUNT(*) = 4;

// //  function formpost  /////////////////

// async function postform(url) {
//   let response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "content-type": "application/json",
//     },
//     redirect: "follow",
//     body: JSON.stringify(data),
//   });
// }µµ

function BodyForm() {
  const navigate = useNavigate();
  const url = "http://TLSContact:80/create/add_user";
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
    document_type: "",
    document_number: "",
  });
  function handle(e) {
    const newdata = { ...data };
    console.log({ ...data });
    newdata[e.target.id] = e.target.value;
    console.log(newdata);
    setdata(newdata);
    // console.log(newdata);
  }

  const SubmitEvent = (e) => {
    e.preventDefault();
    axios
      .post(url, {
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
        // Retrieve the user ID
        axios
          .get("http://TLSContact:80/read/current_usr_Reference_key")
          .then((response) => {
            const Reference_key = response.data.Reference_key;
            sessionStorage.setItem("Reference_key", Reference_key);

            navigate("/dateform");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <center>
      <div className="FormBox">
        <form className="Form">
          <label className="fname">First Name * : </label>
          <input
            onChange={(e) => handle(e)}
            className="formInput"
            id="First_name"
            value={data.First_name}
            type="text"
          />
          <label className="fname">Last Name * : </label>
          <input
            onChange={(e) => handle(e)}
            className="formInput"
            id="Last_name"
            value={data.Last_name}
            type="text"
          />
          <label className="fname">Date of birth * :</label>
          <input
            onChange={(e) => handle(e)}
            id="date_of_birth"
            value={data.date_of_birth}
            className="formInput"
            type="date"
            name="name"
          />
          <label className="fname">nationalité * :</label>
          <select
            onChange={(e) => handle(e)}
            id="nationality"
            value={data.nationality}
            name="Nationality"
            className="select"
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
          <label className="fname">situation familiale * :</label>
          <select
            onChange={(e) => handle(e)}
            id="family_status"
            value={data.family_status}
            name="familystatus"
            className="select"
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

          <label className="fname">Adress * :</label>
          <input
            onChange={(e) => handle(e)}
            id="address"
            value={data.address}
            className="formInput"
            type="date"
            name="Adress"
          />

          <label className="fname">type de visa * :</label>
          <select
            onChange={(e) => handle(e)}
            id="visat_ype"
            value={data.visat_ype}
            name="familystatus"
            className="select"
          >
            <option value="">Select option</option>
            {visaType.map((Element, index) => {
              return (
                <option key={index} value={Element}>
                  {Element}
                </option>
              );
            })}
          </select>
          <label className="fname">date de départ * :</label>
          <input
            onChange={(e) => handle(e)}
            id="Date_of_departure"
            value={data.Date_of_departure}
            className="formInput"
            type="date"
            name="name"
          />

          <label className="fname">date d'arriver * :</label>
          <input
            onChange={(e) => handle(e)}
            id="Date_of_arrival"
            value={data.Date_of_arrival}
            className="formInput"
            type="date"
            name="name"
          />

          <label className="fname"> Type de document * :</label>
          <select
            onChange={(e) => handle(e)}
            id="document_type"
            value={data.document_type}
            name="familystatus"
            className="select"
          >
            <option value="">Select option</option>
            {typedocument.map((Element, index) => {
              return (
                <option key={index} value={Element}>
                  {Element}
                </option>
              );
            })}
          </select>

          <label className="fname ">Document * :</label>
          <input className="formInput lastf" type="file" name="name" />

          <div className="d-flex justify-content-center">
            <button
              onClick={SubmitEvent}
              className="btn btn-primary rounded-pill px-5 py-2 mb-3"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </center>
  );
}

export default BodyForm;
