import React, { useState } from "react";
import "./Assets/weather-icons.css";

const SetLocation = () => {
  const [newLocation, setNewLocation] = useState("");

  const handleChange = (event) => {
    setNewLocation(event.target.value);
  };

  const handleSaveClick = () => {
    try {
      localStorage.setItem("weatherLocation", newLocation);
      console.log("Valore prima del salvataggio:", newLocation);
      console.log(localStorage.getItem("weatherLocation"));

    } catch (error) {
      console.error("Errore nel salvataggio nel localStorage:", error);
    }
  };

  return (
    <div>
      <h2>Set your current location to see its weather every time you log in:</h2>
      <input
        type="text"
        placeholder="Your Location..."
        onChange={handleChange}
      />
      <button onClick={handleSaveClick} className="setLocationButton">Save Location</button>
    </div>
  );
};

export default SetLocation;


