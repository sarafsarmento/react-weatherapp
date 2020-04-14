import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast">
        <Row>
          <Col sm={2}>
            <WeatherForecastPreview data={forecast.list[0]} />
          </Col>
          <Col sm={2}>
            <WeatherForecastPreview data={forecast.list[1]} />
          </Col>
          <Col sm={2}>
            <WeatherForecastPreview data={forecast.list[2]} />
          </Col>
          <Col sm={2}>
            <WeatherForecastPreview data={forecast.list[3]} />
          </Col>
          <Col sm={2}>
            <WeatherForecastPreview data={forecast.list[4]} />
          </Col>
          <Col sm={2}>
            <WeatherForecastPreview data={forecast.list[5]} />
          </Col>
        </Row>
      </div>
    );
  } else {
    let apiKey = "79e5706a0f2bf6602376318bb547af31";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
