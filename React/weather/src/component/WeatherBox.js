import React from "react";

const WeatherBox = ({ weather }) => {
    const temperatureC =
        weather && weather.main ? (weather.main.temp).toFixed(2) : "";
    const temperatureF =
        weather && weather.main
            ? (((weather.main.temp) * 9) / 5 + 32).toFixed(2)
            : "";
    console.log("weather?", weather);
    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>
            {`${temperatureC} °C / ${temperatureF} °F`}
            </h2>
            <h3>{weather && weather.weather[0]?.description}</h3>
        </div>
    );
};

export default WeatherBox;
