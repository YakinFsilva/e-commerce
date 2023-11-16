import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Logo from "../assets/images/logo.png";
import {
  FaHeadset,
  FaCartPlus,
  FaUniversalAccess,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <img src={Logo} className="logo" alt="Logo da Tech Store" />
        {/* <a className="navbar-brand" href="#">Black Friday</a> */}
        <div className="div-icons">
          <FaHeadset className="icons" />
          <FaUniversalAccess className="icons" />
          <FaCartPlus className="icons" />
          <br />
        </div>
        <div className="signOut">
          <span>
            <b>Sair</b>
          </span>
          <FaSignOutAlt />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produtos
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a className="dropdown-item" href="#">
                      Menores preços
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Maiores preços
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Notebooks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Videogames
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Todos os produtos
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Aplicar filtro
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
