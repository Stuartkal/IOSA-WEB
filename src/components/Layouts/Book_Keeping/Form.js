import React from 'react'

const Form = ({
            food,
            medication,
            salaries,
            allowances,
            miscellaneous,
            animalsBought, 
            rabbitSales,
            farmVisits, 
            foodSales,
            stockFood,
            stockAnimals,
            stockMedication,
            error,
            onChange,
            addBookkeeping
}) => {

    return (
        <div>
            <form onSubmit={addBookkeeping} className="book-main">
            <h2>Book Keeping</h2>
                <h3>Sales</h3>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Rabbits Sold <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={rabbitSales} onChange={({target: {value}})=> onChange('rabbitSales', value)} />
                    </div>
                    <div className="book-form">
                        <h5>Farm Visits <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={farmVisits} onChange={({target: {value}})=> onChange('farmVisits', value)} />
                    </div>
                </div>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Food <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={foodSales} onChange={({target: {value}})=> onChange('foodSales', value)} />
                    </div>
                </div>
                <h3>Stocks</h3>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Food <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={stockFood} onChange={({target: {value}})=> onChange('stockFood', value)} />
                    </div>
                    <div className="book-form">
                        <h5>Animals <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={stockAnimals} onChange={({target: {value}})=> onChange('stockAnimals', value)} />
                    </div>
                </div>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Medication <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={stockMedication} onChange={({target: {value}})=> onChange('stockMedication', value)} />
                    </div>
                </div>
                <h3>Expenditures</h3>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Food <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={food} onChange={({target: {value}})=> onChange('food', value)} />
                    </div>
                    <div className="book-form">
                        <h5>Medication <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={medication} onChange={({target: {value}})=> onChange('medication', value)} />
                    </div>
                </div>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Salaries <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={salaries} onChange={({target: {value}})=> onChange('salaries', value)} />
                    </div>
                    <div className="book-form">
                        <h5>Allowances <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={allowances} onChange={({target: {value}})=> onChange('allowances', value)} />
                    </div>
                </div>
                <div className="book-row">
                    <div className="book-form">
                        <h5>Miscellaneous <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={miscellaneous} onChange={({target: {value}})=> onChange('miscellaneous', value)} />
                    </div>
                    <div className="book-form">
                        <h5>Animals bought <strong style={{color:'red'}}>*</strong></h5>
                        <input type="text" placeholder="Amount in Shs" value={animalsBought} onChange={({target: {value}})=> onChange('animalsBought', value)} />
                    </div>
                </div>
                <button>Add Record</button>
                {!error ? <p>All fields are Required <strong style={{color:'red'}}>*</strong></p> : <p style={{color:'#d45821'}}>{error}</p>}
            </form>
        </div>
    )
}

export default Form
