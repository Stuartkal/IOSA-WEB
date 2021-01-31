import React from 'react'

import icon from '../../../assets/images/rabbit.png'
import arrow from '../../../assets/images/arrow.png'
const Breeding = ({breeding}) => {
    return (
        <div>
            {
                breeding.map(breed => (
                    <div className="notification-container" key={breed._id}>
                        <div className="notification">
                            <img className="bunny" src={icon}/>
                            <div className="notification-details">
                                <h4> Next Breeding Date Reminder</h4>
                                <h5>{breed.breed}</h5>
                                {/* <h5>{breed.gender}</h5> */}
                                <div className="detail-row">
                                    <h5>Date:</h5>
                                    <h5> {breed.nextBreedingDate}</h5>
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

export default Breeding
