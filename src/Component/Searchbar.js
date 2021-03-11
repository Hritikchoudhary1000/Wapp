import React, { useEffect, useState } from 'react'
import {Link,NavLink,Route} from 'react-router-dom'
import Coordinates from './Coordinates';
import SunInfo from './SunInfo';
import Temperature from './Temperature';
import Wind from './Wind';
const Searchbar = () => {
    let [city,setCity]=useState(null);
    let apiKey="16ff73f8aa95e20ff8235bf57a0df51b"
    let [tempJson,setTempJson] = useState(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange=(e)=>{
        setCity(e.target.value);
        
    }
    console.log(tempJson)
    const renderData = ()=>{
        if(city===null||tempJson===null){
            return (<div>
                   <h1> No Data</h1>
            </div>)
        }
        else{
            return(
                <>
                <div className='navigation-links'>
                         
                        <span><NavLink to="/temperature" exact> temperature</NavLink> </span>
                        
                        <span><NavLink to ="/suninfo" exact> SunInfo </NavLink></span>
                        <span><NavLink to="/windinfo" exact>Wind</NavLink></span>

                    </div>
                <div className="WeatherDashboard">
                    <Route path="/coordinates" exact>
                        <Coordinates value={tempJson.coord}/>
                    </Route>
                    <Route path="/temperature" exact>
                        <Temperature temp={tempJson.main}/>
                    </Route>
                    <Route path="/suninfo" exact>
                        <SunInfo sun={ tempJson.sys }/>
                    </Route>
                    
                    <Route path="/windinfo" exact>
                        <Wind value={tempJson.wind}/>
                    </Route>
                   <Route path="/" exact>
                        <Searchbar city={city} setCity={setCity}/>
                    </Route>
                </div>
                </>
            )
        }
    }
    useEffect(()=>{
        const fetchApi = async  (city)=>{
            if(city!==null){
                let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
                console.log(url);
               
                let response= await fetch(url)
                let items= await response.json();
                setTempJson(items);
                }
                else{
                    setTempJson({})
                }
                console.log(tempJson)
        }
        fetchApi(city);
    },[city]

    );
    
    return (
        <>
        <div className="search-bar">

            <form onSubmit={handleSubmit}>
                <input className="inputBar" type="text" name="city" value={city} onChange={handleChange} placeholder="Enter the city name"/>
                
            </form>
            
        </div>
        {renderData()}
        
        </>
    )
}

export default Searchbar
