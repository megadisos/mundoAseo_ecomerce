import React, {useState,useContext} from 'react'
import image from './../../images/im1.jpg'
import {mycontext} from './../../App'
import logo from './../../images/LETRERO.png'
import  {Container, Row, Col,Navbar,NavDropdown,Nav,Image,Button} from 'react-bootstrap' 
function Bseller(props){
    const {item, marcai } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
   
    return(
        <Container>
            <Row className="text-center mt-2">
            <Col>
                <h2 className="titulos"> <i class="fa fa-shopping-bag icolor" aria-hidden="true"></i> Nuestros productos</h2>
            </Col>
            </Row>
            <center><div class="dropdown-divider in-div "></div></center>
            <Row className="mb-5">
            {items && items.map(item=>{

              if(item.get_marc !== "mundo_aseo"){
                let size = item.titulo.length
                return (
                  <Col key={item.id} xs={12} md={12} lg={3} className="text-center mt-5 mb-5">
                    <Row>
                      <Col>
                      <Image src={item.get_path} onClick={()=> props.ProductLink(item.id,item.titulo)} width="150" height="150" ></Image>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <p className="precio mt-1">${item.precio}</p>
                      <p className="titulo ">{item.titulo}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <Button type="button" onClick={e => props.CartAdd(item.id,item.precio) } data-toggle="modal"  data-target="#modal" variant="outline-primary">Agregar al carrito</Button>
                      </Col>
                    </Row>
                
                     
                     
  

                      
                      <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title" id="exampleModalLabel"><img src={logo} width="150" height="30"></img></h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body titulos" >
  El producto fue agregado a tu carrito. Que quieres hacer?
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary btn-cart-cont"  data-dismiss="modal">Seguir comprando</button>
  <button type="button" onClick={e=> window.location.href = "https://www.elmundodelaseo.com/carrito" } class="btn btn-primary btn-cart-pop">Ir al carrito</button>
</div>
</div>
</div>
</div>

                      </Col>
              )
              }
               
                
            })}
      
            </Row>
        </Container>
    )
}
export default Bseller