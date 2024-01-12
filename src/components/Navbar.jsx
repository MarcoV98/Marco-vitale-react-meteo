import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Assets/NavbarStyle.css";
import "./Assets/weather-icons.css";

const Navbar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
    setCity("");
  };

  return (
    <nav>
      <div className="logo">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-cloud-fog2"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 4a4 4 0 0 0-3.8 2.745.5.5 0 1 1-.949-.313 5.002 5.002 0 0 1 9.654.595A3 3 0 0 1 13 13H.5a.5.5 0 0 1 0-1H13a2 2 0 0 0 .001-4h-.026a.5.5 0 0 1-.5-.445A4 4 0 0 0 8.5 4M0 8.5A.5.5 0 0 1 .5 8h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5" />
        </svg>
          
        
        <p>WindyWeather</p>
      </div>

      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/air-pollution">
            Air Pollution
          </Link>
        </li>
        <li>
          <Link to="/forecast">
            Forecast
          </Link>
        </li>
        <li>
          <Link to="/credits">
            Credits
          </Link>
        </li>
      </ul>

      <div className="inputSearch">
        <input
          type="text"
          placeholder="Search.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="iconSearch" onClick={handleSearch}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search magnifySearch"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


