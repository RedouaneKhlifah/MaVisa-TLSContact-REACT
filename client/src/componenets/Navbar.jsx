import logonav from "../images/logonav.svg";
import "../style/style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img src={logonav} alt="" style={{ width: "145px" }}></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <button
                id="navbtn"
                className="btn btn-outline-primary mx-3"
                type="submit"
              >
                Register
              </button>
              <button
                id="navbtn"
                className="btn btn-outline-primary"
                type="submit"
              >
                login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
