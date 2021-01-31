import React from 'react'

import icon from '../../../assets/images/rabbit.png'
import arrow from '../../../assets/images/arrow.png'
const Weaning = ({weaning}) => {
    return (
        <div>
            {
                weaning.map(wean => (
                    <div className="notification-container" key={wean._id}>
                        <div className="notification">
                        <img className="bunny" src={icon}/>
                            <div className="notification-details">
                                <h4> Weaning Date Reminder</h4>
                                <h5>{wean.breed}</h5>
                                {/* <h5>{breed.gender}</h5> */}
                                <div className="detail-row">
                                    <h5>Date:</h5>
                                    <h5> {wean.weaningDate}</h5>
                                </div>
                            </div>
                            <img className="arrow" src={arrow}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Weaning
