import React, {useState,useContext} from 'react'
import {mycontext} from './../../App'
import image from './../../images/im1.jpg'
import  { Redirect, useHistory } from 'react-router-dom'

function Featured(props){
    let history = useHistory()
    const items = useContext(mycontext)
    const ProductLink = (id , name) => {
        const fname = name.replace(" ","-")
        history.push(`/producto/${id}/${fname}`)
    }
    return(
        <div className="bg-light">
        <div className="row text-center titulos mt-2 ">
            <div className="col-12">
                <h2> Productos destacados <i class="fa fa-star icolor" aria-hidden="true"></i></h2>
            </div>
        </div>
        <center><div class="dropdown-divider in-div "></div></center>
        <div className="row">
            {items && items.map(item=>{
                if (item.destacado === true){
                    return (
                        <div  key={item.id} className="col-lg-2 col-md-2 col-sm-12 product ml-3">
                            <center><img src={item.get_path}   onClick={()=> ProductLink(item.id,item.titulo)} class="img-fluid mt-2 img-prods" alt="Responsive image" />
                            <p className="precio mt-1">${item.precio}</p>
                            <p className="titulo ">{item.titulo}</p>
                            <button type="button" class="btn btn-primary btn-cart">Agregar al carrito</button></center>
                            </div>
                    )
                }
                
            })}
           
       
        </div>
        </div>
    )
}
export default Featured