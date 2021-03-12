import React from 'react';
import '../CSS/coordinate.css';

const Coordinates = (coordinate) => {
    
    let {lon,lat} = coordinate.value;
    
    return (
        <div className="Coordinate-container">
            <div>   
                <span><h3>Longitude</h3></span>
                <span><h2>{lon}</h2></span>
            </div>
            <div>   
                <span><h3>Latitude</h3></span>
                <span><h2>{lat}</h2></span>
            </div>
        </div>
    )
}

export default Coordinates;
