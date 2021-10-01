import React from 'react';
import './App.css';
import Enter from "./components/enter/Enter";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Route path={''}
                       render={() => <Enter/>
                       }/>
            </div>
        </BrowserRouter>

    );
}

export default App;
