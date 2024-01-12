import React from "react";
import MainWeather from "./MainWeather";
import AddWeather from "./AddWeather";
import Footer from "./Footer";

const Home = ({ weatherData }) => {
  const cityName = weatherData ? weatherData.name : "N/A";

  return (
    <div>
      <main>
        <h1>Weather for {cityName}</h1>
        <div className="displayWeather">
          <MainWeather weatherData={weatherData} />
          <AddWeather weatherData={weatherData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

