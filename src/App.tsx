import React from 'react';
import './App.css';
import Enter from "./components/enter/Enter";
import {BrowserRouter, Route} from "react-router-dom";
import Registration from "./components/registration/Registration";
import OrganizationData from "./components/organizationData/OrganizationData";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Route path={''}
                       render={() => <Enter/>
                       }/>
                <Route path={''}
                       render={() => <Registration/>
                       }/>
                <Route path={''}
                       render={() => <OrganizationData/>
                       }/>
            </div>
        </BrowserRouter>

    );
}

export default App;
