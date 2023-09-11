import React, { useState, useEffect } from "react";
import CardSection from "./components/cardsSection/CardSection";
import Menu from "./components/menu/Menu";
import Nav from "./components/nav/Nav";
import Stays from "./components/stays/Stays";
import "./index.css";
import stays from "../stays.json";
import NotFound from "../src/components/NotFound";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [city, setCity] = useState("Whole");
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);
  const [filteredStays, setFilteredStays] = useState(stays);

  useEffect(() => {
    const filterLocation = stays.filter((stay) => city === "Whole" || stay.city.includes(city));
    const filterGuests = filterLocation.filter(
      (stay) => stay.maxGuests >= adultGuests + childrenGuests
    );
    setFilteredStays(filterGuests);
  }, [city, adultGuests, childrenGuests]);

  const handleOpenClose = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchButton = () => {
    handleOpenClose();
  };

  const handlePlusButton = (param) => {
    if (param === "Adult") {
      setAdultGuests((prevAdultGuests) => prevAdultGuests + 1);
    } else if (param === "Children") {
      setChildrenGuests((prevChildrenGuests) => prevChildrenGuests + 1);
    }
  };

  const handleMinusButton = (param) => {
    if (param === "Adult") {
      setAdultGuests((prevAdultGuests) =>
        prevAdultGuests > 0 ? prevAdultGuests - 1 : 0
      );
    } else if (param === "Children") {
      setChildrenGuests((prevChildrenGuests) =>
        prevChildrenGuests > 0 ? prevChildrenGuests - 1 : 0
      );
    }
  };

  const guests = adultGuests + childrenGuests;

  return (
    <div className="app-container">
      <Menu
        menuOpen={menuOpen}
        handleOpenClose={handleOpenClose}
        childrenGuests={childrenGuests}
        adultGuests={adultGuests}
        handlePlusButton={handlePlusButton}
        handleMinusButton={handleMinusButton}
        city={city}
        setCity={setCity}
        handleSearchButton={handleSearchButton}
        guests={guests}
      />

      <div className="container">
        <Nav handleOpenClose={handleOpenClose} city={city} guests={guests} />
        <Stays stays={filteredStays} />
        <CardSection stays={filteredStays} />
        {filteredStays.length === 0 ? <NotFound /> : " "}
      </div>
    </div>
  );
}

export default App;

