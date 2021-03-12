import React from 'react';
import sunrisepic from "../Assets/sunrise.png";
import sunsetpic from "../Assets/sunset.webp";
import '../CSS/temperature.css'
import '../CSS/suninfo.css'
const SunInfo = (sunInfo) => {

    function unixToNormal(unixTime){
        var months_arr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const millisecond = unixTime*1000
        const dateObject = new Date(millisecond)
        const year = dateObject.getFullYear()
        const month = months_arr[dateObject.getMonth()]
        const day = dateObject.getDate()
        const hours = dateObject.getHours()
        const minutes = dateObject.getMinutes()
        const seconds = dateObject.getSeconds()
        return {hrs:hours,min:minutes,sec:seconds,day:day,mon:month,yr:year}
    }
    function convertHrs(hours){
        if(hours<13){
            return hours;
        }
        return hours-12;
    }
    let sunrise = unixToNormal(sunInfo.sun.sunrise)
    let sunset = unixToNormal(sunInfo.sun.sunset);
    
    return (
        <div className="suninfo-container">
           <div className="date-container">
                 {sunrise.day}th {sunrise.mon} <h1>{sunrise.yr}</h1>
           </div>
           <div className="sunrise-container">
                <img className="sun_icon_img" src={sunrisepic} alt="sunrise"/> 
                <h3>{sunrise.hrs}:{sunrise.min} am</h3>
           </div>
           <div className="sunset-container">
           <img className="sun_icon_img"  src={sunsetpic} alt="sunset"/> 
           <h3> {convertHrs(sunset.hrs)}:{sunset.min} pm</h3>
           </div>
           
        </div>
    )
}

export default SunInfo
