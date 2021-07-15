import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import Routes from './router';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));