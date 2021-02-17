import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Home from './home'
import Producto from './productos/producto'
import Carrito from './productos/carrito'
function Routing(props){
    return(
        <Router>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/producto/:id/:productName" component={Producto}></Route>
            <Route path="/carrito" component={Carrito}></Route>
        </Switch>
    </Router>
    )
}
export default Routing