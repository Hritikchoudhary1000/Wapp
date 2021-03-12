import React from 'react';
import '../CSS/temperature.css';
import thermometer from '../Assets/thermometer.svg';
import pressure from '../Assets/pressure.png';
import sealevel from '../Assets/sealevel.png';
const Temperature = (tempWeather) => {
   
    let temperature = tempWeather.temp
   
    console.log(temperature)
    
    return (
        <div className="temperature-container">
            <div>
                <span>
                 <img  className="icon_img" src={thermometer} alt="thermometer"/>  
                    <h3>{temperature.temp}°C</h3> 
                </span>
            </div>
            
            
            <div>
                <span>
                <img  className="icon_img" src={pressure} alt="pressure"/> <h3>{temperature.pressure} <br/>mmHg</h3>
                </span>
            </div>
            
            
            <div>
                <span>

                   <h2> Max <br/> {temperature.temp_max} °C</h2>
                </span>
            </div>
            <div>
                <span>
                  <h2>  Min <br/> {temperature.temp_min} °C </h2>
                </span>
            </div>
            
        </div>
    )
}

export default Temperature
