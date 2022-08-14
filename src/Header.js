import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav id="nav" className="navbar text-light navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="./HomeInfo">
            <h5>Faculty Portal</h5>
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./HomeInfo"
                >
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./AddNewFac"
                >
                  <h5>Add New Faculty</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./FacName"
                >
                  <h5>Faculty Names</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="./FacDetails"
                >
                  <h5>Faculty Details</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="./">
                  <h5>Log Out</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
