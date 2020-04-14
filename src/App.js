import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
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
          className="active"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

export default App;
