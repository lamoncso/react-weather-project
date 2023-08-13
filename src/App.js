import React from "react";
import "./App.css";
import Weather from "./Weather";
import HeaderHeart from "./HeaderHeart";
import background from "./img/yellowrose.png"

export default function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "110vh",
      }}
    >
      <div className="App">
        <HeaderHeart />
        <h1 className="headquote">
          "If I had a flower for every time I thought of you ... I could walk in
          my own garden forever"
        </h1>
        <Weather defaultCity="Mór" />
        <p className="mt-2 years">1966-2023</p>
       
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
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://app.netlify.com" target="_blank" rel="noreferrer">
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
