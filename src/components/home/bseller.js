import React, {useState,useContext} from 'react'
import image from './../../images/im1.jpg'
import {mycontext} from './../../App'

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
            <div className="row">
            {items && items.slice(0).reverse().map(item=>{
                    return (
                        <div key={item.id} className="col-lg-2 col-md-2 col-sm-12 product">
                            <center><img src={item.get_path} onClick={()=> props.ProductLink(item.id,item.titulo)} class="img-fluid mt-2 img-prods" alt="Responsive image" />
                            <p className="precio mt-1">${item.precio}</p>
                            <p className="titulo ">{item.titulo}</p>
                            <button type="button" onClick={e => props.CartAdd(item.id) } class="btn btn-primary btn-cart">Agregar al carrito</button></center>
                            </div>
                    )
                
            })}
      
            </div>
        </div>
    )
}
export default Bseller