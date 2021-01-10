import React from 'react'
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Auth from '../../Layouts/Auth/Auth'
import Home from '../../Layouts/Home/Home'
import Breeding from '../../Layouts/Breeding/Breeding'
import PopulationRecord from '../../Layouts/Population_Record/PopulationRecord'
import BookKeeping from '../../Layouts/Book_Keeping/BookKeeping'
import Records from '../../Layouts/Records/Records'
import BreedingRecord from '../../Layouts/Records/BreedingRecords'
import PopulationRecords from '../../Layouts/Records/PopulationRecords'
import BookkeepingRecords from '../../Layouts/Records/BookkeepingRecords'
import Medication from '../../Layouts/Medication/Medication'

const index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path="/home" component={Home}/>
                <Route path="/breeding" component={Breeding}/>
                <Route path="/population-record" component={PopulationRecord}/>
                <Route path="/book-keeping" component={BookKeeping}/>
                <Route path="/records" component={Records}/>
                <Route path="/breeding-record" component={BreedingRecord}/>
                <Route path="/population-records" component={PopulationRecords}/>
                <Route path="/bookkeeping-records" component={BookkeepingRecords}/>
                <Route path="/medication" component={Medication}/>
            </Switch>
        </BrowserRouter>
    )
}

export default index
