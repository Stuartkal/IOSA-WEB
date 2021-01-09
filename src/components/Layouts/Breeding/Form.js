import React from 'react'
import moment from 'moment'

const Form = ({
    breed, 
    dateOfBirth, 
    gender, 
    parent, 
    femaleCageNumber, 
    maleCageNumber, 
    breedingDate, 
    kindlingDate, 
    numberAlive, 
    numberDead,
    onChange,
    addBreed
}) => {

    const kindlingBox = new Date(breedingDate).setDate(new Date(breedingDate).getDate()+ 25)
    const weaningDate = new Date(kindlingDate).setDate(new Date(kindlingDate).getDate()+ 30)
    const nextBreedingDate = new Date(weaningDate).setDate(new Date(weaningDate).getDate()+ 7)

    return (
        <div>
            <form className="breeding-main" onSubmit={addBreed}>
                <h2>Breeding Details</h2>
                <div className="breeding-row">
                    <div className="breeding-form">
                        <h5>Breed <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" value={breed} onChange={({target: {value}})=> onChange('breed', value)} />
                    </div>
                    <div className="breeding-form">
                        <h5>Breeding Date <strong style={{color:'red'}}>*</strong></h5>
                        <input type="date" value={breedingDate} onChange={({target: {value}})=> onChange('breedingDate', value)} />
                    </div>
                </div>
                <div className="breeding-row">
                    <div className="breeding-form">
                        <h5>Date Of Birth <strong style={{color:'red'}}>*</strong></h5>
                        <input type="date" value={dateOfBirth} onChange={({target: {value}})=> onChange('dateOfBirth', value)} />
                    </div>
                    <div className="breeding-form">
                        <h5>Kindling Date <strong style={{color:'red'}}>*</strong></h5>
                        <input type="date" value={kindlingDate} onChange={({target: {value}})=> onChange('kindlingDate', value)} />
                    </div>
                </div>
                <div className="breeding-row">
                    <div className="breeding-form">
                        <h5>Gender <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" value={gender} onChange={({target: {value}})=> onChange('gender', value)} />
                    </div>
                    <div className="breeding-form">
                        <h5>Number Alive <strong style={{color:'red'}}>*</strong></h5>
                        <input type="number" value={numberAlive} onChange={({target: {value}})=> onChange('numberAlive', value)} />
                    </div>
                </div>
                <div className="breeding-row">
                    <div className="breeding-form">
                        <h5>Parent <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" value={parent} onChange={({target: {value}})=> onChange('parent', value)} />
                    </div>
                    <div className="breeding-form">
                        <h5>Number Dead <strong style={{color:'red'}}>*</strong></h5>
                        <input type="number" value={numberDead} onChange={({target: {value}})=> onChange('numberDead', value)} />
                    </div>
                </div>
                <div className="breeding-row">
                    <div className="breeding-form">
                        <h5>Female Cage Number <strong style={{color:'red'}}>*</strong></h5>
                        <input type="number" value={femaleCageNumber} onChange={({target: {value}})=> onChange('femaleCageNumber', value)} />
                    </div>
                    <div className="breeding-form">
                    <h5>kindlingBox <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" value={breedingDate ? moment(kindlingBox).format('DD-MM-YYYY') : null} /> 
                    </div>
                </div>
                <div className="breeding-row">
                    <div className="breeding-form">
                        <h5>Male Cage Number <strong style={{color:'red'}}>*</strong></h5>
                        <input type="number" value={maleCageNumber} onChange={({target: {value}})=> onChange('maleCageNumber', value)} />
                    </div>
                    <div className="breeding-form">
                    <h5>Weaning Date <strong style={{color:'red'}}>*</strong></h5>
                    <input type="text" value={kindlingDate ? moment(weaningDate).format('DD-MM-YYYY') : null} onChange={({target: {value}})=> onChange('maleCageNumber', value)} />
                    </div>
                </div>
                <div className="breeding-row">
                    <div className="breeding-form">
                        {/* <h5>Male Cage Number <strong style={{color:'red'}}>*</strong></h5>
                        <input type="number" value={maleCageNumber} onChange={({target: {value}})=> onChange('maleCageNumber', value)} /> */}
                    </div>
                    <div className="breeding-form">
                    <h5>Next Breeding Date <strong style={{color:'red'}}>*</strong></h5>
                    <input type="text" value={weaningDate ? moment(nextBreedingDate).format('DD-MM-YYYY') : null} onChange={({target: {value}})=> onChange('maleCageNumber', value)} />
                    </div>
                </div>
                <button>Add Record</button>
            </form>
        </div>
    )
}

export default Form
