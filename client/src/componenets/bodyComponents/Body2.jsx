import React from "react";
import im1 from "../../images/im1.png";
import im2 from "../../images/im2.png";
import im3 from "../../images/im3.png";

function Body2() {
  return (
    <div className="about container ">
      <div id="box2" className="row bg-light ">
        <div className="col-sm text-center">
          <img src={im1} style={{ width: "50px" }} alt="" />
          <p class="mt-4 prr">
            Préparez les documents justificatifs nécessaires, remplissez votre
            formulaire France-Visas, inscrivez-vous sur ce site et prenez un
            rendez-vous.
          </p>
        </div>
        <div className="col-sm text-center">
          <img src={im2} style={{ width: "50px" }} alt="" />
          <p class="mt-4 prr">
            Présentez votre demande et fournissez vos données biométriques au
            centre de demande de visa.
          </p>
        </div>
        <div className="col-sm text-center">
          <img src={im3} style={{ width: "50px" }} alt="" />
          <p class="mt-4 prr">
            Retournez au centrepour récupérer votre passeport
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body2;
