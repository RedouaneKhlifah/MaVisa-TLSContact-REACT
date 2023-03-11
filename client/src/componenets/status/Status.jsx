import axios from "axios";
import React, { useState } from "react";

function Status() {
  const [Submited, Setsubmited] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  let [numberOfTries, SetnumberOfTries] = useState("4");
  let [showBannedMessage, SetshowBannedMessage] = useState(false);
  const [Reference_Key, SetReference_Key] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfArrival, setDateOfArrival] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [visaType, setVisaType] = useState("");

  const HandleChange = (event) => {
    SetReference_Key(event.target.value);
  };
  const SubmitEvent = (e) => {
    e.preventDefault();


    console.log(Reference_Key);
    axios
      .post(`http://TLSContact:80/read/get_user/${Reference_Key}`)
      .then((res) => {
        console.log(res);
        Setsubmited(true);
        setShowErrorMessage(false);
        setFirstName(res.data.First_name);
        setLastName(res.data.Last_name);
        setDateOfBirth(res.data.date_of_birth);
        setFamilyStatus(res.data.family_status);
        setNationality(res.data.nationality);
        setAddress(res.data.address);
        setDateOfArrival(res.data.Date_of_arrival);
        setDocumentType(res.data.document_type);
        setVisaType(res.data.visat_ype);
      })
      .catch((Error) => {
        console.log(Error);
        Setsubmited(false);
        setShowErrorMessage(true);
        SetnumberOfTries(numberOfTries - 1);
        if (numberOfTries === 1) {
          setShowErrorMessage(false);
          SetshowBannedMessage(true);
        }
      });
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
            className="btn btn-primary rounded-pill px-5 py-2 mb-3"
            disabled={numberOfTries === 0} // disable button if no more attempts left
          >
            Submit
          </button>
        </form>
        {Submited ? (
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <label className="fname">
                  First Name :<p className="datacontainer"> {firstName} </p>
                </label>
                <label className="fname">
                  Date of birth :<p className="datacontainer"> {dateOfBirth}</p>
                </label>
                <label className="fname">
                  situation familiale :
                  <p className="datacontainer">{familyStatus}</p>
                </label>
                <label className="fname">
                  date de départ :
                  <p className="datacontainer"> {dateOfBirth}</p>
                </label>
                <label className="fname">
                  type de visa :<p className="datacontainer"> {visaType}</p>
                </label>
              </div>
              <div className="col-lg-6">
                <label className="fname">
                  Last Name :<p className="datacontainer"> {lastName}</p>
                </label>
                <label className="fname">
                  nationalité :<p className="datacontainer"> {nationality}</p>
                </label>
                <label className="fname">
                  Adress :<p className="datacontainer"> {address}</p>
                </label>
                <label className="fname">
                  date d'arriver :
                  <p className="datacontainer"> {dateOfArrival}</p>
                </label>
                <label className="fname">
                  Type de document :
                  <p className="datacontainer"> {documentType} </p>
                </label>
              </div>
            </div>
          </div>
        ) : null}

        {showErrorMessage ? (
          <p className="boxtext key " id="boxtext">
            "Warning: You have {numberOfTries} attempts remaining to enter a
            valid reference key. If you are unable to enter a valid key after
            three attempts, your access to this service will be temporarily
            suspended. Please ensure that you have the correct reference key
            before attempting again."
          </p>
        ) : null}

        {showBannedMessage ? (
          <p className="boxtext key " id="boxtext">
            Sorry, you have been temporarily suspended from accessing this
            service. You exceeded the maximum number of attempts to enter a
            valid reference key. Please try again later or contact our support
            team for further assistance."
          </p>
        ) : null}
      </div>
    </center>
  );
}

export default Status;
