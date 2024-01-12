import { useEffect } from "react";

const WeatherFetch = ({ location, setWeatherData, onFetchError }) => {
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location.trim() === "") {
        return;
      }

      const apiKey = "5c4323d79493cbd04df3599a81604d21";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        location
      )}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
        } else {
          onFetchError(data.message);
        }
      } catch (error) {
        onFetchError(error);
      }
    };

    fetchWeatherData();
  }, [location, setWeatherData, onFetchError]);

  return null;
};

export default WeatherFetch; 