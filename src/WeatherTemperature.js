import React, { useState }from "react";

export default function WeatherTemperature(props){
    return (
        <div className="d-flex">   
            <span className="col temperature">
                {Math.round(props.celsius)}
            <span className="col unit">
            <span className="celsius">°C</span>
            <br />       
            </span>
            </span>
        </div>
    );
}