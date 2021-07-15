import React, {useState} from 'react'
import logo from './../../images/LETRERO.png'
import menu from './../../images/menu.png'
import  { Redirect, useHistory , useLocation, Link} from 'react-router-dom'
import  {Container, Row, Col,Navbar,NavDropdown,Nav,Image} from 'react-bootstrap' 
function Menu(props){
  const location = useLocation();
  const styleLink = {
    "text-decoration":"none",
    "color":"black",
    
  }
  const styleCurrent = {
    "text-decoration":"none",
    "color":"black",
    "background":"#b5d485",
  }
    return(
      <Container >
        <Row >
          <Col xs={8} md={8} lg={8} >
          <Image  src={logo} width="200" className="mt-3"></Image>
          </Col>
          <Col xs={4} md={4} lg={4} >
          <Navbar bg="light" expand="lg">
         
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto"  >
        <Nav.Link className={ location.pathname === "/" ? "link-selected":"link"}><Link to="/" style={styleLink} >Inicio</Link> <span className="sr-only">(current)</span></Nav.Link>
        <NavDropdown title="Categoria" id="basic-nav-dropdown" className="link">

        {props.cat && props.cat.map(ct =>{
              return(
                <NavDropdown.Item>
                <a onClick={()=> props.CategoryLink(ct.nombre)} >{ct.nombre}</a>
                </NavDropdown.Item>
              )
          })}

        </NavDropdown>
        <Nav.Link className={ location.pathname === "/acerca" ? "link-selected":"link"} ><Link to="/acerca" style={styleLink}>Acerca</Link></Nav.Link>
        <Nav.Link className={ location.pathname === "/contacto" ? "link-selected":"link"}><Link to="/contacto"  style={styleLink}>Contacto</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>
          </Col>
        </Row>
      </Container>
    
   
   
    )
}
export default Menu