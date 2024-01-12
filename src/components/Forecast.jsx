import React, { useState, useEffect } from 'react';

const Forecast = ({ selectedCity }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=5c4323d79493cbd04df3599a81604d21`);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching forecasts:', error);
      }
    };

    fetchData();
  }, [selectedCity]);

  const renderTableHeader = () => {
    if (!forecastData || !Array.isArray(forecastData.list)) {
      return null;
    }

    const headers = ['Time', ...forecastData.list.slice(0, 5).map(day => day.dt_txt.split(' ')[0])];
    return headers.map((header, index) => <th key={index}>{header}</th>);
  };

  const renderTableBody = () => {
    if (!forecastData || !Array.isArray(forecastData.list)) {
      return null;
    }

    const times = [0, 3, 6, 9, 12, 15, 18, 21];
    return times.map((time, timeIndex) => (
      <tr key={timeIndex}>
        <td>{`${time}:00`}</td>
        {forecastData.list.slice(timeIndex, timeIndex + 40, 8).map((forecast, dayIndex) => (
          <td key={dayIndex}>
            {`${forecast.main.temp}°C - ${forecast.weather[0].description}`}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <h2 className='forecastTitle'>Weather Forecast for {selectedCity}</h2>
      <table>
        <thead>
          <tr>
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {renderTableBody()}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
