import React, {useState} from 'react'
import face from './../../images/face.png'
import insta from './../../images/insta.png'
import  {Container, Row, Col,Navbar,NavDropdown,Nav,Image,Button} from 'react-bootstrap' 
function Footer(props){
    return(
        <Container>
        <div class="dropdown-divider"></div>
        <center><Row className="pie bg-light mt-5">
            <Col xs={12} md={12} lg={4}>
                <h6 className="mr">Marcas</h6>
                {props.marca && props.marca.map(ct =>{
              return(
                <p  onClick={()=> props.MarcaLink(ct.nombre)} >{ct.nombre}</p>
              )
          })}
            </Col>
            <Col xs={12} md={12} lg={4}>
                <h6 className="ct">Categorias</h6>
                {props.cat && props.cat.map(ct =>{
              return(
                <p  onClick={()=> props.CategoryLink(ct.nombre)} >{ct.nombre}</p>
              )
          })}
            </Col>
            <Col xs={12} md={12} lg={4}>
            <h6 className="rd">Redes</h6>
            <p><Image src={face} className="img-fluid" width="20" height="20"></Image> facebook</p>
            <p><Image src={insta} className="img-fluid" width="20" height="20"></Image> instagram</p>
            
            </Col>
        </Row></center>
        </Container>
    )
}
export default Footer