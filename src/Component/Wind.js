import React from 'react';
import winddegree from '../Assets/wind-degree.png';
import windspeed from '../Assets/windspeed.webp';
import '../CSS/Weather.css'
const Wind = (item) => {
    let wind = item.value;
    console.log(wind )
    return (
        <div className="wind-container">
            <div>
                <span>
                    <img  className= "wind_icon_img" src={windspeed} alt ="windspeed"/> <br/> <h3> {wind.speed} deg</h3>
                </span>
            </div>
            <div>
                <span>
                   <img className="wind_icon_img" src={winddegree} alt="winddegree"/> <br/> <h3> {wind.deg} deg</h3>
                </span>
            </div>
            
        </div>
    )
}

export default Wind
