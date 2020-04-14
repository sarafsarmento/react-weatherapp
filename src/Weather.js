import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `https://sad-aryabhata-ad11d0.netlify.com/media/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "79e5706a0f2bf6602376318bb547af31";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search">
          <Form onSubmit={handleSubmit} id="search-form">
            <Form.Row>
              <Col sm={9}>
                <Form.Group>
                  <Form.Control
                    placeholder="Type a city..."
                    id="city-input"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
