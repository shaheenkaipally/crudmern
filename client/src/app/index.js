import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { VaccinesList, VaccinesInsert, VaccinesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/vaccines/list" exact component={VaccinesList} />
                <Route path="/vaccines/create" exact component={VaccinesInsert} />
                <Route
                    path="/vaccines/update/:id"
                    exact
                    component={VaccinesUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
