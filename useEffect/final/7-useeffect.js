import React, { useState, useEffect } from 'react';
import  '../../index.css';


function Final() {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("chennai"); 

  const fetchUri = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const correctUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=ab0ca6460fea8794f2cef9c8ed852b4e`;
    fetchUri(correctUrl);
  }, [searchTerm]);

  return (
    <div className="app-container">
    <h1 color='white'>weather app</h1>
      <form className="search-form">
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Search for a city...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </form>
      {data && data.main && data.weather && (
        <div className="weather-container">
          <h2 className="city-name">{data.name}</h2>
          <p className="temperature">Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
          <p className="weather-description">Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Final;
