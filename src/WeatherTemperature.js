import React, { useState }from "react";

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius");

function convertFahrenheit(event){
    event.preventDefault();
    setUnit("Fahrenheit");
}

function convertCelsius(event){
    event.preventDefault();
    setUnit("celsius")
}
    
if (unit === `celsius`){
    return (
        <div className="d-flex">   
            <span className="col temperature">
                {Math.round(props.celsius)}
            <span className="col unit">
            <span className="celsius">°C</span>
            <br />
            <span className="fahrenheit"><a href="/" onClick={convertFahrenheit}>°F</a></span>        
            </span>
            </span>
        </div>
    );
}else{

let fahrenheit=(props.celsius*9/5)+32;

     return (
       <div className="d-flex">
         <span className="col temperature">
           {Math.round(fahrenheit)}
           <span className="col unit">
             <span className="celsius"><a href="/" onClick={convertCelsius}>°C</a></span>
             <br />
             <span className="fahrenheit">
                 °F
             </span>
           </span>
         </span>
       </div>
     );
}
}