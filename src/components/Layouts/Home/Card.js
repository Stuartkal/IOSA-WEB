import React from 'react'

const Card = (props) => {
    return (
        <div className="card" onClick={props.navigate}>
            <h2>{props.title}</h2>
            <img src={props.icon} alt="icon"/>
        </div>
    )
}

export default Card
