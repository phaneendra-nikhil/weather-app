import React, { useState } from 'react'

import sun_img from '../assets/clear.png'
import cloud_img from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humid from '../assets/humidity.png'
import rain_img from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_img from '../assets/snow.png'
import wind_img from '../assets/wind.png'

const Weather = () => {

    let key = "220eab0049a6352edf4969c58a0b9683";
    const [wicon,setWicon] = useState(cloud_img);
    
    const search = async () =>{
        const element = document.getElementsByClassName("city-input");
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${key}`;
        
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temperature[0].innerHTML = data.main.temp+" °C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(sun_img);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_img);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_img);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_img);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_img);
        }
        else{
            setWicon(sun_img);
        }


    }
  return (
    <>
        <div className="container">
            <div className="top-bar">
                <input type="text" className="city-input" placeholder='search city' />
                <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>

            <div className="temp">24 °C</div>
            <div className="weather-location">London</div>

            <div className="data-container">
                <div className="element">
                    <img src={humid} alt="" />
                    <div className="data">
                        <div className="humidity-percent">64 %</div>
                        <div className="text">Humid</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_img} alt="" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>
            
        </div>
    </>
  )
}

export default Weather