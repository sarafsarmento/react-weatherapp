import React from "react";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}ºC`;
  }

  function fahrenheit() {
    let fahrenheit = Math.round(props.data.main.temp * 9) / 5 + 32;

    return `${fahrenheit}ºF`;
  }

  return (
    <div className="weather-forecast" id="forecast">
      <h3>{hours()}</h3>
      <img
        src={`https://sad-aryabhata-ad11d0.netlify.com/media/${props.data.weather[0].icon}@2x.png`}
      />
      <div className="weather-forecast-temperature">
        <strong>{temperature()}</strong> {fahrenheit()}
      </div>
    </div>
  );
}
