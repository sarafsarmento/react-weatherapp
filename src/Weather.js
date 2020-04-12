import React from "react";
import "./Weather.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>
          Last updated: <span id="date">Tuesday 23:05</span>
        </li>
        <li id="description">Overcast clouds</li>
      </ul>
      <Row>
        <Col sm={8}>
          <div className="clearfix weather-temperature">
            <img
              src="https://sad-aryabhata-ad11d0.netlify.com/media/04n@2x.png"
              alt="Overcast clouds"
              id="weather-icon"
            />
            <strong id="weather-temperature">11</strong>
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
                Precipitation: <span id="precipitation">15%</span>
              </li>
              <li>
                Humidity: <span id="humidity">71%</span>
              </li>
              <li>
                Wind: <span id="wind"> 3km/h</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
