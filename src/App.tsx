import React from 'react';
import './App.css';
import Enter from "./components/enter/Enter";
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "./components/registration/Registration";
import OrganizationData from "./components/organizationData/OrganizationData";

function App() {

    return (
        <BrowserRouter>
                <Route exact path={'/'} component={Enter}/>
                <Route path={'/registration'} component={Registration}/>
                <Route path={'/data'} component={OrganizationData}/>
        </BrowserRouter>
    );
}

export default App;
