import React, {useState,useContext} from 'react'
import {mycontext} from './../../App'
import image from './../../images/im1.jpg'
import logo from './../../images/LETRERO.png'
import  {Container, Row, Col,Navbar,NavDropdown,Nav,Image,Button} from 'react-bootstrap' 
function Featured(props){
    
    const {item, marcai } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
 
    return(
        <Container>
        <Row className="text-center titulos mt-2">
            <Row xs={12}>
                <h2> Productos destacados <i class="fa fa-star icolor" aria-hidden="true"></i></h2>
            </Row>
        </Row>
        <center><div class="dropdown-divider in-div "></div></center>
        <Row>
            {items && items.filter(pr => pr.get_marc === "mundo_aseo").map(item=>{
                if (item.destacado === true){
                    return (
                        <Col  key={item.id} xs={12} md={12} lg={3} className="mt-2 mb-4 text-center" >
                          <Row>
                            <Col><Image src={item.get_path}  width="150" height="150" onClick={()=> props.ProductLink(item.id,item.titulo)}  ></Image></Col>
                          </Row>
                         <Row>
                         <p className="precio mt-1">${item.precio}</p>
                            <p className="titulo ">{item.titulo}</p>
                         </Row>
                           <Row>
                             <Col>
                             <Button type="button" onClick={e => props.CartAdd(item.id,item.precio) }  data-toggle="modal"  data-target="#modal" aria-expanded="false" aria-controls="collapseExample" variant="outline-primary" >Agregar al carrito</Button>
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
export default Featured