import React, {useState} from "react";
import './weather-app.css';

import search_icon from "../img/search.png";
import clear_icon from "../img/clear.png";
import cloud_icon from "../img/cloud.png";
import drizzle_icon from "../img/clear.png";
import rain_icon from "../img/rain.png";
import snow_icon from "../img/snow.png";
import wind_icon from "../img/wind.png";
import humidity_icon from "../img/humidity.png";


const WeatherApp = () =>{
    let apiKey = "211d7bd6b54d39b6e768fb2d6743efa1";
    const [wicon, setWicon] = useState(cloud_icon)

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        if (element[0].value === '') {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}`;

        let reponse = await fetch (url);
        let data = await reponse.json();
        console.log(data);

        const humidity = document.getElementsByClassName('humidity-precent');
        const wind = document.getElementsByClassName('wind-precent');
        const temp = document.getElementsByClassName('temp');
        const location = document.getElementsByClassName('location');

        humidity[0].innerHTML = data.main.humidity+"%";
        console.log(data.main.humidity);
        wind[0].innerHTML = data.wind.speed+"Km:H";
        temp[0].innerHTML = Math.ceil(data.main.temp)/10+"°C";
        console.log( data.main.temp );
        location[0].innerHTML = data.name;
        
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon (clear_icon)
        } else if (data.weather[0].icon === "02d" ||data.weather[0].icon === "02n") {
            setWicon (cloud_icon)
        } else if (data.weather[0].icon === "03d" ||data.weather[0].icon === "03n") {
            setWicon (drizzle_icon)
        } else if (data.weather[0].icon === "09d" ||data.weather[0].icon === "09n") {
            setWicon (rain_icon)
        } else if (data.weather[0].icon === "10d" ||data.weather[0].icon === "10n") {
            setWicon (rain_icon)
        } else if (data.weather[0].icon === "04d" ||data.weather[0].icon === "04n") {
            setWicon (drizzle_icon)
        }else if (data.weather[0].icon === "13d" ||data.weather[0].icon === "13n") {
            setWicon (wind_icon)
        } else {
            setWicon(clear_icon)
        }
    }
    return(
    <div className ="container" >
        <div className="top-bar">
            <input type="text" name="cityInput" id="cityInput" className="cityInput" placeholder="Search your city" />
            <div className="search_icon" onClick={() => {search()}}>
                <img src={search_icon} alt="search" />
            </div>
        </div>

        <div className="weather-image">
            <img src={clear_icon} alt=""  />
        </div>
        <div className="temp">0°</div>
        <div className="location">Paris</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" />
                <div className="data">
                    <div className="humidity-precent">0%</div>
                    <div className="humidity-text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" />
                <div className="data">
                    <div className="wind-precent">0%</div>
                    <div className="wind-text">wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default WeatherApp;


/*  https://www.youtube.com/watch?v=7JqdjWB88Kk */