import React from 'react'

const Coordinates = (coordinate) => {
    
    let {lon,lat} = coordinate.value;
    
    return (
        <div className="Coordinate-container">
            <div>   
                <span>Longitude</span>
                <span>{lon}</span>
            </div>
            <div>   
                <span>Latitude</span>
                <span>{lat}</span>
            </div>
        </div>
    )
}

export default Coordinates;
