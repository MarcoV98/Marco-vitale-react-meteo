import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WeatherFetch from "./components/WeatherFetch";
import AirPollution from "./components/AirPollution";
import Forecast from "./components/Forecast";
import Credits from "./components/Credits";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(localStorage.getItem("weatherLocation") || "London");

  const handleSearch = async (city) => {
    setWeatherData(null);
    setLocation(city);
    localStorage.setItem("weatherLocation", city);
  };

  const handleFetchError = (error) => console.error("Error in API request:", error);

  useEffect(() => {
    const storedLocation = localStorage.getItem("weatherLocation");
    if (storedLocation) setLocation(storedLocation);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <WeatherFetch location={location} setWeatherData={setWeatherData} onFetchError={handleFetchError} />

        <Routes>
          <Route path="/" element={<Home weatherData={weatherData} />} />
          <Route path="/air-pollution" element={<AirPollution />} />
          <Route path="/forecast" element={<Forecast selectedCity={location} />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

