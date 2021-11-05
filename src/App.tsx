import React from 'react';
import Enter from "./components/enter/Enter";
import {Route} from "react-router-dom";
import Registration from "./components/registration/Registration";
import OrganizationData from "./components/organizationData/OrganizationData";

function App() {

    return (
        <div>
            <Route exact path={'/'} render={() => <Enter/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/data'} render={() => <OrganizationData/>}/>
        </div>
    );
}

export default App;
