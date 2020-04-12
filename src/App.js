import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
      </div>
      <footer>
        This project was coded by{" "}
        <a href="http://sarasarmento.co" target="_blank">
          Sara Sarmento
        </a>{" "}
        and is open sourced on{" "}
        <a
          href="https://github.com/sarafsarmento/react-weatherapp"
          target="_blank"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
