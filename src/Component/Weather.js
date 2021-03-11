import React from 'react'
import "../CSS/Weather.css"
import Searchbar from './Searchbar'
const Weather = () => {
    return (
        <div className="Weather-container">
            <div className="weather-content">
                <Searchbar/>
                
            </div>
        </div>
    )
}

export default Weather
