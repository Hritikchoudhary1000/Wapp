import React from 'react'

const Wind = (item) => {
    let wind = item.value;
    console.log(wind )
    return (
        <div className="wind-container">
            <div>
                <span>
                    Speed {wind.speed}
                </span>
            </div>
            <div>
                <span>
                    deg {wind.deg}
                </span>
            </div>
            
        </div>
    )
}

export default Wind
