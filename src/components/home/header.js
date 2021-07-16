import React, {useState, useContext} from 'react'
import {mycontext} from './../../App'
import  { Redirect, useHistory , useLocation, Link} from 'react-router-dom'
import  {Container, Row, Col} from 'react-bootstrap' 
function Header(props){
    const valor = useContext(mycontext);
    let history = useHistory()
    const goFind = () =>{
      const bus = document.getElementById("busqueda").value
      history.push(`/buscar/${bus}`)
    }
    const stylebas = {
      "color": "black",
      "text-decoration": "none"
  }
  const displayStyle = {
      "display": "inline",
  }
  
    return(
          <Container fluid className="header-menu">
            <Row  >
              <Col style={displayStyle} xs={12} md={12} lg={2}>
                    <i class="fa fa-map-marker icolor" aria-hidden="true"></i>  Cra. 114 #152d-76, Bogotá <span class="sr-only">(current)</span>
              </Col>
              <Col xs={12} md={12} lg={1}>
              <i class="fa fa-mobile icolor" aria-hidden="true"></i> <a style={stylebas} href="https://api.whatsapp.com/send?phone=573212046055&text=Hola%2C%20quisiera%20infromacion"> 3212046055</a>
              </Col>
              <Col xs={12} md={12} lg={1}>
              <i class="fa fa-mobile icolor" aria-hidden="true"></i><a style={stylebas} href="https://api.whatsapp.com/send?phone=573115291717&text=Hola%2C%20quisiera%20infromacion"> 3115291717</a>
              </Col>
              <Col xs={12} md={12} lg={1}>
              <i class="fa fa-phone icolor" aria-hidden="true"></i> <a  href="#" style={stylebas}> 7962392</a>
              </Col>
              <Col xs={12} md={12} lg={3} className="buscar-btn">
                  <input type="text" class="form-control binput" id="busqueda" aria-describedby="emailHelp" placeholder="Buscar" size="30" /> 
                  <i class="fa fa-search" aria-hidden="true" onClick={goFind}></i>
              </Col>
              <Col xs={12} md={12} lg={4} className="col-cart">
              <a href="https://www.nabtastore.com.co/admin/login/?next=/admin/"><i class="fa fa-lock mr-3" aria-hidden="true"></i></a>
                <a href="http://www.elmundodelaseo.com.co:3000/carrito"><i class="fa fa-shopping-cart " aria-hidden="true"></i></a>
                
              </Col>
            </Row>
          </Container>
    
      
        
    )
}
export default Header