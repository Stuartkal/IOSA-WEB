import React from 'react'

const StatCard = (props) => {
    return (
        <div className="stat-card" onClick={props.navigate}>
            <h2>{props.title}</h2>
            <h3>{props.figure} Shs</h3>
        </div>
    )
}

export default StatCard
