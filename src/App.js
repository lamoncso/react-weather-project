import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project was coded by {""}
        <a
          href="https://codefusion-ml.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Monika Lauko
        </a>
        <br /> and is{" "}
        <a
          href="https://github.com/lamoncso/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>{" "}
        and{" "}
        <a href="https://app.netlify.com" target="_blank" rel="noreferrer">
          hosted on Netlify. testtest
        </a>
      </footer>
    </div>
  );
}
