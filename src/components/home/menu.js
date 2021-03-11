import React, {useState} from 'react'
import logo from './../../images/LETRERO.png'
import menu from './../../images/menu.png'
import  { Redirect, useHistory , useLocation, Link} from 'react-router-dom'

function Menu(props){
  const location = useLocation();
    return(
      
       <center><nav className="navbar nav-menu navbar-expand-lg navbar-expand-md ">
  <a className="navbar-brand mt-3" href="#"><img src={logo} className="img-fluid" width="200" height="80"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><img src={menu} className="img-fluid" width="40" height="40"></img></span>
  </button>
  <div className="navbar collapse navbar-collapse " id="navbarNavAltMarkup" >
    <div className="navbar-nav">
      <a className={location.pathname === "/" ? "nav-item it-menu nav-link active":"nav-item nav-link active"}  href="#"><Link to="/">INICIO</Link> <span className="sr-only">(current)</span></a>
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          CATEGORIA
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {props.cat && props.cat.map(ct =>{
              return(
                <a class="dropdown-item" onClick={()=> props.CategoryLink(ct.nombre)} >{ct.nombre}</a>
              )
          })}
          
        </div>
      <a className={location.pathname === "/acerca" ? "nav-item it-menu nav-link":"nav-item nav-link active"} href="#"><Link to="/acerca">ACERCA</Link></a>
      <a className={location.pathname === "/contacto" ? "nav-item  it-menu nav-link":"nav-item  nav-link"} href="#"><Link to="/contacto">CONTACTO</Link></a>
    </div>
  </div>
</nav></center> 
    )
}
export default Menu