import React from "react";
import "./Assets/weather-icons.css";

const AddWeather = ({ weatherData }) => {
  const humidity = weatherData?.main?.humidity;
  const windSpeed = weatherData?.wind?.speed;
  const cloudiness = weatherData?.clouds?.all;

  const getLocalTime = (timestamp, timezoneOffset) => {
    try {
      const utcTime = new Date(timestamp * 1000);
      const localTime = new Date(utcTime.getTime() + timezoneOffset * 1000);
      const formattedTime = localTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      return formattedTime;
    } catch (error) {
      console.error("Error formatting time:", error);
      return "N/A";
    }
  };

  const sunrise = weatherData?.sys?.sunrise ? getLocalTime(weatherData.sys.sunrise, weatherData.timezone) : null;
  const sunset = weatherData?.sys?.sunset ? getLocalTime(weatherData.sys.sunset, weatherData.timezone) : null;

  return (
    <div className="addWeather">
      <div className="humidity">
        <i className="wi wi-humidity"></i>
        <p>Humidity: <span>{humidity ? `${humidity}%` : "N/A"}</span></p>
      </div>

      <div className="wind">
        <i className="wi wi-strong-wind"></i>
        <p>Wind speed: <span>{windSpeed ? `${windSpeed} km/h` : "N/A"}</span></p>
      </div>

      <div className="cloudiness">
        <i className="wi wi-cloudy"></i>
        <p>Cloudiness: <span>{cloudiness ? `${cloudiness}%` : "N/A"}</span></p>
      </div>

      <div className="sunrise">
        <i className="wi wi-sunrise"></i>
        <p>Sunrise at: <span>{sunrise || "N/A"}</span></p>
      </div>

      <div className="sunset">
        <i className="wi wi-sunset"></i>
        <p>Sunset at: <span>{sunset || "N/A"}</span></p>
      </div>
    </div>
  );
};

export default AddWeather;








