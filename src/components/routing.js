import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Home from './home'
import Producto from './productos/producto'
import Busqueda from './productos/busqueda'
import Categoria from './productos/categoria'
import Marca from './productos/marcas'
import Carrito from './productos/carrito'
import Acerca from  './home/acerca'
import Contacto from  './home/contacto'
import Formulario from './pagos/formulario_pago.js'
import Confirmacion from './pagos/confirmacion.js'
import Sitio from './../home/sitio.js'
function Routing(props){
    return(
        <Router>
        <Switch>
            <Route exact path="/"><Sitio /></Route>
            <Route exact path="/inicio"><Home /></Route>
            <Route path="/producto/:id/:productName" component={Producto}></Route>
            <Route path="/categoria/:catName" component={Categoria}></Route>
            <Route path="/marca/:catMar" component={Marca}></Route>
            <Route path="/carrito" component={Carrito}></Route>
            <Route path="/acerca" component={Acerca}></Route>
            <Route path="/contacto" component={Contacto}></Route>
            <Route path="/buscar/:namProd" component={Busqueda}></Route>
            <Route path="/pagos/formulario/:id" component={Formulario}></Route>
            <Route path="/pagos/confirmacion/:id/:name/:address/:email/:cel/:cod" component={Confirmacion}></Route>
        </Switch>
    </Router>
    )
}
export default Routing