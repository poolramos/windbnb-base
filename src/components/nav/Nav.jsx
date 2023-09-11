import "./Nav.css";
import { IoMdSearch } from "react-icons/io";

const Nav = ({ handleOpenClose, city, guests }) => {
  return (
    <header className="nav-app">
      <div className="logo">
        <img src="./src/assets/logo.svg" alt="winbnb-logo" />
      </div>

      <div>
        <div className="bar-container">
          <button className="left bar input" onClick={handleOpenClose}>
            {city}, Finland
          </button>

          <button className="bar input" onClick={handleOpenClose}>
            <p className="guests">
              {guests ? ` ${guests} guests` : "Add guests"}
            </p>
          </button>
          <button className="bar btn" onClick={handleOpenClose}>
            <IoMdSearch style={{ fontSize: 22, color: "#EB5757" }} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
