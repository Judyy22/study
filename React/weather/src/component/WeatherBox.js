import React from "react";

const WeatherBox = ({ weather }) => {
    console.log("weather?", weather);
    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>
                {weather?.main.temp}&deg;C/ {weather?.main.temp * 1.8 + 32}
                &deg;F
            </h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};

export default WeatherBox;
