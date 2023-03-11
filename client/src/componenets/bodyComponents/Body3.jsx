import React from "react";

function Body3() {
  return (
    <div>
      <center>
        <div className="formLeadBox">
          <h2 className="formBoxLead">
            Le formulaire France-Visas doit être rempli avant la prise de
            rendez-vous
          </h2>
          <div className="boxLeadFormula">
            <div className="row">
              <div className="col-6">
                <a href="/form">
                  <button
                    id="btnleadregister"
                    className="btn btn-primary"
                    type="submit"
                  >
                    Je souhaite remplir mon formulaire France-Visas
                  </button>
                </a>
              </div>
              <div className="col-6">
                <a href="/status">
                  <button
                    id="btnleadregister"
                    className="btn btn-primary"
                    type="submit"
                  >
                    J'ai déjà rempli mon formulaire France-Visas
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Body3;
