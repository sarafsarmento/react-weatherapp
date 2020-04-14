import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="temperature">
        <strong id="weather-temperature">{Math.round(props.celsius)}</strong>
        <span className="units">
          ºC |{" "}
          <a
            href="/"
            id="fahrenheit-link"
            className="active"
            onClick={showFahrenheit}
          >
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temperature">
        <strong id="weather-temperature">{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a
            href="/"
            id="celsius-link"
            className="active"
            onClick={showCelsius}
          >
            ºC
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}
