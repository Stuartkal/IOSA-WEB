import React from 'react'

import icon from '../../../assets/images/rabbit.png'
import arrow from '../../../assets/images/arrow.png'
const KindlingBox = ({kindlingBox}) => {
    return (
        <div >
            {
                kindlingBox.map(kindling => (
                    <div className="notification-container" key={kindling._id}>
                        <div className="notification">
                        <img className="bunny" src={icon}/>
                            <div className="notification-details">
                                <h4> Kindling Box Date Reminder</h4>
                                <h5>{kindling.breed}</h5>
                                {/* <h5>{breed.gender}</h5> */}
                                <div className="detail-row">
                                    <h5>Date:</h5>
                                    <h5> {kindling.kindlingBox}</h5>
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

export default KindlingBox
