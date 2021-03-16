import React, {useState,useContext} from 'react'
import image from './../../images/im1.jpg'
import {mycontext} from './../../App'
import logo from './../../images/LETRERO.png'
function Bseller(props){
    const {item, marcai } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
   
    return(
        <div>
            <div className="row text-center mt-2">
            <div className="col-12">
                <h2 className="titulos"> <i class="fa fa-shopping-bag icolor" aria-hidden="true"></i> Nuestros productos</h2>
            </div>
            </div>
            <center><div class="dropdown-divider in-div "></div></center>
            <div className="row mb-5">
            {items && items.map(item=>{

              if(item.get_marc !== "mundo_aseo"){
                let size = item.titulo.length
                return (
                  <div key={item.id} className="col-lg-2 col-md-2 col-sm-12 mt-5 mb-5 product">
                      <center><img src={item.get_path} onClick={()=> props.ProductLink(item.id,item.titulo)} class="img-fluid mt-2 img-prods" alt="Responsive image" />
                      <p className="precio mt-1">${item.precio}</p>
                      <p className="titulo ">{item.titulo}</p>
                     
                      <button type="button" onClick={e => props.CartAdd(item.id,item.precio) } data-toggle="modal"  data-target="#modal" class="btn btn-primary btn-cart">Agregar al carrito</button></center>

                      
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
  <button type="button" onClick={e=> window.location.href = "https://master.dphw95lv4xi23.amplifyapp.com/carrito" } class="btn btn-primary btn-cart-pop">Ir al carrito</button>
</div>
</div>
</div>
</div>

                      </div>
              )
              }
               
                
            })}
      
            </div>
        </div>
    )
}
export default Bseller