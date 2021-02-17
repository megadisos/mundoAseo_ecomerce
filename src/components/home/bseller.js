import React, {useState,useContext} from 'react'
import image from './../../images/im1.jpg'
import {mycontext} from './../../App'

function Bseller(props){
    const items = useContext(mycontext)
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
                            <img src={item.get_path} class="img-fluid mt-2 img-prods" alt="Responsive image" />
                            <p className="precio mt-1">${item.precio}</p>
                            <p className="titulo ">{item.titulo}</p>
                            <button type="button" class="btn btn-primary btn-cart">Agregar al carrito</button>
                            </div>
                    )
                
            })}
      
            </div>
        </div>
    )
}
export default Bseller