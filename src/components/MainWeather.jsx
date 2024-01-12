import React from "react";
import "./Assets/weather-icons.css"

const MainWeather = ({ weatherData }) => {
  const temperature = Math.floor(weatherData?.main?.temp);
  const feelsLike = Math.floor(weatherData?.main?.feels_like);
  const tempMin = Math.floor(weatherData?.main?.temp_min);
  const tempMax = Math.floor(weatherData?.main?.temp_max);
  const description = weatherData?.weather?.[0]?.description;
  const cityName = weatherData?.name;
  const iconCode = weatherData?.weather?.[0]?.icon;

  const mapIcon = (code) => {
    switch (code) {
      case "11d":
        return "wi wi-day-thunderstorm";
      case "09d":
      case "10d":
        return "wi wi-day-rain";
      case "50d":
        return "wi wi-fog";
      case "01d":
        return "wi wi-day-sunny";
      case "02d":
      case "03d":
      case "04d":
        return "wi wi-day-cloudy";
      default:
        return "";
    }
  };

  return (
    <div className="mainWeather">
      <div className="weatherIcon">
        {iconCode && (
          <i className={mapIcon(iconCode)} />
        )}
      </div>
      <p className="tempMain">{temperature ? `${temperature}°C` : "N/A"}</p>
      <p className="tempFeel">
        Feels like: <span>{feelsLike ? `${feelsLike}°C` : "N/A"}</span>
      </p>
      <div className="tempRange">
        <p>
          <span className="hotRange">{tempMin ? `${tempMin}°C` : "N/A"}</span> /{" "}
          <span className="coldRange">{tempMax ? `${tempMax}°C` : "N/A"}</span>
        </p>
      </div>
      <p className="city">{cityName ? cityName : "N/A"}</p>
      <p className="descWeather">{description ? description : "N/A"}</p>
    </div>
  );
};

export default MainWeather;

