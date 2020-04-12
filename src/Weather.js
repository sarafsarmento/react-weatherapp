import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Sunday 00:19",
      description: response.data.weather[0].description,
      iconUrl: "https://sad-aryabhata-ad11d0.netlify.com/media/04n@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search">
          <Form id="search-form">
            <Form.Row>
              <Col sm={9}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control
                    placeholder="Type a city..."
                    id="city-input"
                    autocomplete="off"
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: <span id="date">{weatherData.date}</span>
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <Row>
          <Col sm={8}>
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="weather-icon"
              />
              <strong id="weather-temperature">
                {Math.round(weatherData.temperature)}
              </strong>
              <span class="units">
                <a href="/" id="celsius-link" class="active">
                  ºC
                </a>
                |
                <a href="/" id="fahrenheit-link" class="active">
                  ºF
                </a>
              </span>
            </div>
          </Col>
          <Col sm={4}>
            <div id="weather-details">
              <ul>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}%</span>
                </li>
                <li>
                  Wind: <span id="wind"> {weatherData.wind} km/h</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else {
    const apiKey = "79e5706a0f2bf6602376318bb547af31";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
