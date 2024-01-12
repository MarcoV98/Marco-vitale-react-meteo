import React, { useState, useEffect } from "react";

const AirPollution = ({ location }) => {
  const [airData, setAirData] = useState(null);
  const apiKey = "5c4323d79493cbd04df3599a81604d21";

  useEffect(() => {
    const fetchAirData = async () => {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?q=${encodeURIComponent(
          location
        )}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          setAirData(data);
        } else {
          console.error("Error fetching air data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching air data:", error);
      }
    };

    fetchAirData();
  }, [location, apiKey]);
  
  const getAirQuality = (aqi) => {
    let text = "";
    let color = "";

    switch (aqi) {
      case 1:
        text = "1 - Good";
        color = "darkgreen";
        break;
      case 2:
        text = "2 - Fine";
        color = "lightgreen";
        break;
      case 3:
        text = "3 - Medium";
        color = "yellow";
        break;
      case 4:
        text = "4 - Dangerous";
        color = "red";
        break;
      case 5:
        text = "5 - Very Dangerous";
        color = "purple";
        break;
      default:
        text = "Unknown";
        color = "black";
    }

    return { text, color };
  };

  return (
    <div>
      <h2 className="pollutionTitle">Air Pollution Data for {location}</h2>
      {airData && (
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Air Quality</th>
              <th>CO</th>
              <th>NO</th>
              <th>NO2</th>
              <th>O3</th>
              <th>SO2</th>
              <th>PM2.5</th>
              <th>PM10</th>
              <th>NH3</th>
            </tr>
          </thead>
          <tbody>
            {airData.list.map((data) => (
              <tr key={data.dt}>
                <td>{new Date(data.dt * 1000).toLocaleString()}</td>
                <td style={{ backgroundColor: getAirQuality(data.main.aqi).color }}>
                  {getAirQuality(data.main.aqi).text}
                </td>
                <td>{data.components.co}</td>
                <td>{data.components.no}</td>
                <td>{data.components.no2}</td>
                <td>{data.components.o3}</td>
                <td>{data.components.so2}</td>
                <td>{data.components.pm2_5}</td>
                <td>{data.components.pm10}</td>
                <td>{data.components.nh3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AirPollution;

