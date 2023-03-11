import React from "react";

function HeaderForm() {
  return (
    <div>
      <center>
        <div className="backroundHeaderForm">
          <h2 className="FormHederText">Créez votre compte TLScontact</h2>
        </div>
        <div className="box" id="boxForm">
          <p className="boxtextForm">
            L’inscription à ce site vous permettra de vérifier le statut de
            votre application étape par étape. Si vous avez déjà un compte,
            veuillez vous connecter <a href="/">ici</a> .
          </p>
          <p className="boxtext" id="boxtext">
            Après l’enregistrement, merci de suivre les instructions figurant
            sur votre page d’accueil personnelle, afin de soumettre votre
            demande de visa.
          </p>
        </div>
      </center>
    </div>
  );
}

export default HeaderForm;
