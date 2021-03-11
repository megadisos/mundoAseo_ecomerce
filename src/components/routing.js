import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Home from './home'
import Producto from './productos/producto'
import Categoria from './productos/categoria'
import Marca from './productos/marcas'
import Carrito from './productos/carrito'
import Acerca from  './home/acerca'
import Contacto from  './home/contacto'
function Routing(props){
    return(
        <Router>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/producto/:id/:productName" component={Producto}></Route>
            <Route path="/categoria/:catName" component={Categoria}></Route>
            <Route path="/marca/:catMar" component={Marca}></Route>
            <Route path="/carrito" component={Carrito}></Route>
            <Route path="/acerca" component={Acerca}></Route>
            <Route path="/contacto" component={Contacto}></Route>
        </Switch>
    </Router>
    )
}
export default Routing