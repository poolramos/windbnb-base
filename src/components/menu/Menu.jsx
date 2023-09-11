import "./Menu.css";
import { IoMdSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { PiMapPinFill } from "react-icons/pi";
import { useState } from "react";
import { useEffect } from "react";

const Menu = ({
  menuOpen,
  handleOpenClose,
  handleMinusButton,
  handlePlusButton,
  adultGuests,
  childrenGuests,
  handleSearchButton,
  city,
  setCity,
  guests,
}) => {
  const [list2Open, setList2Open] = useState(false);
  const [list1Open, setList1Open] = useState(true);

  const openNavList = (listNumber) => {
    if (listNumber === 1) {
      setList1Open(true);
      setList2Open(false);
    } else if (listNumber === 2) {
      setList1Open(false);
      setList2Open(true);
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={menuOpen ? "menu-actived" : "menu"}>
      <div className="close">
        <span className="edit">Edit your search</span>
        <CgClose
          onClick={handleOpenClose}
          style={{ cursor: "pointer", fontSize: "20px" }}
        />
      </div>
      <div className="nav-menu">
        <div className="text">
          <div className="search-items">
            <button
              className={`left-search search nav-btn left ${
                list1Open ? "active" : ""
              }`}
              onClick={() => openNavList(1)}
            >
              Location
              <span
                style={{ fontWeight: 400, fontSize: "14px", color: "#333333" }}
              >
                {city}, Finland
              </span>
            </button>

            <button
              className={`search nav-btn right ${list2Open ? "active" : ""}`}
              onClick={() => openNavList(2)}
            >
              Guests
              <span
                style={{ fontWeight: 400, fontSize: "14px", color: "#333333" }}
              >
                {guests ? guests : "Add guests"}
              </span>
            </button>

            {windowWidth >= 700 && (
              <button className="search button" onClick={handleSearchButton}>
                <IoMdSearch
                  style={{
                    fontSize: 22,
                  }}
                />
                Search
              </button>
            )}
          </div>

          <div
            className={`
            ${
              windowWidth >= 700 && list2Open
                ? "information-container-short"
                : "information-container"
            }`}
          >
            <div
              className={` ${list1Open ? "nav-filter-actived" : "nav-filter"}`}
            >
              {list1Open && (
                <ul className="city-list">
                  <li onClick={() => setCity("Helsinki")}>
                    <p>
                      <PiMapPinFill
                        style={{ color: "#4F4F4F", marginRight: "3px" }}
                      />
                      Helsinki, Finland
                    </p>
                  </li>
                  <li onClick={() => setCity("Turku")}>
                    <p>
                      <PiMapPinFill
                        style={{ color: "#4F4F4F", marginRight: "3px" }}
                      />
                      Turku, Finland
                    </p>
                  </li>
                  <li onClick={() => setCity("Vaasa")}>
                    <p>
                      <PiMapPinFill
                        style={{ color: "#4F4F4F", marginRight: "3px" }}
                      />
                      Vaasa, Finland
                    </p>
                  </li>
                  <li onClick={() => setCity("Oulu")}>
                    <p>
                      <PiMapPinFill
                        style={{ color: "#4F4F4F", marginRight: "3px" }}
                      />
                      Oulu, Finland
                    </p>
                  </li>
                </ul>
              )}
            </div>

            <div
              className={` ${
                list2Open ? "guest-container-actived" : "guest-container"
              }`}
            >
              {list2Open && (
                <div className="information-div">
                  <div className="counter-information">
                    <span className="guest">Adults</span>
                    <span className="text-age">Age 13 or above</span>
                    <div className="counter-div">
                      <button
                        className="minus"
                        onClick={() => handleMinusButton("Adult")}
                      >
                        -
                      </button>
                      <span className="counter">{adultGuests}</span>
                      <button
                        className="plus"
                        onClick={() => handlePlusButton("Adult")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="counter-information">
                    <span className="guest">Children</span>
                    <span className="text-age">Age 2-12</span>
                    <div className="counter-div">
                      <button
                        className="minus"
                        onClick={() => handleMinusButton("Children")}
                      >
                        -
                      </button>
                      <span className="counter">{childrenGuests}</span>
                      <button
                        className="plus"
                        onClick={() => handlePlusButton("Children")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Button */}
          {windowWidth <= 700 && (
            <button className="search button" onClick={handleSearchButton}>
              <IoMdSearch
                style={{
                  fontSize: 22,
                }}
              />
              Search
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
