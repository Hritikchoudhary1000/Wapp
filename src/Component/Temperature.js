import React from 'react'
import '../CSS/temperature.css'
import thermometer from '../Assets/thermometer.svg'
const Temperature = (tempWeather) => {
    
    let temperature = tempWeather.temp
    console.log(temperature)
    
    
    return (
        <div className="temperature-container">
            <div>
                <span>
                 <img src={thermometer} alt="thermometer"/>     {temperature.temp} deg
                </span>
            </div>
            
            
            <div>
                <span>
                    Pressure {temperature.pressure} 
                </span>
            </div>
            
            <div>
                <span>
                    Temp_max {temperature.temp_max} deg
                </span>
            </div>
            <div>
                <span>
                    Temp_min {temperature.temp_min} deg
                </span>
            </div>
            <div>
                <span>
                    Ground level {temperature.temp} deg
                </span>
            </div> 
        </div>
    )
}

export default Temperature
