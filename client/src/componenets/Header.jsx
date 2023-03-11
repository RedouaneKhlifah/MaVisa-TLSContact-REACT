import "../style/style.css";
import iconfr from "../images/icon-fr.png";

function Header() {
  return (
    <div className="headerImage">
      <center>
        <h2 className="texth2 text-white">
          Votre partenaire au Maroc pour toutes vos demandes de visa pour la
          France
        </h2>
        <img className="iconfr" src={iconfr} alt=""></img>

        <h1 className="welcomtext">Bienvenue au centre de Casablanca</h1>
        <button id="opentimes" className="btn btn-primary" type="submit">
          ADRESSE ET HORAIRES D'OUVERTURE
        </button>
      </center>
    </div>
  );
}

export default Header;
