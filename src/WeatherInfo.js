import React from "react";
import "./Weather.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <Row>
        <Col sm={8}>
          <div className="clearfix weather-temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              id="weather-icon"
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </Col>
        <Col sm={4}>
          <div id="weather-details">
            <ul>
              <li>
                Humidity: <span id="humidity">{props.data.humidity}%</span>
              </li>
              <li>
                Wind: <span id="wind"> {props.data.wind} km/h</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
