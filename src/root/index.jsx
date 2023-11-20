import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'

const Root=()=>{
    return <BrowserRouter>
    <Routes>
        <Route path="/home" element/>
        <Route path="/properties"/>
    </Routes>
    
    </BrowserRouter>
}
export default Root