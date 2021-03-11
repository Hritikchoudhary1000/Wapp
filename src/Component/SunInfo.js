import React from 'react'

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
    console.log(sunset)
    console.log(sunrise)
    return (
        <div>
           <div className="date-container">
                 {sunrise.day}th {sunrise.mon}, {sunrise.yr}
           </div>
           <div className="sunrise-container">
                SUNRISE {sunrise.hrs}:{sunrise.min} am
           </div>
           <div className="sunset-container">
                Sunset {convertHrs(sunset.hrs)}:{sunset.min} pm
           </div>
           
        </div>
    )
}

export default SunInfo
