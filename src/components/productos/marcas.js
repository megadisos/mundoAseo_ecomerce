import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import Mundo from './../../images/MUNDO.png'
import  { useHistory } from 'react-router-dom'

function Marcas(props){
    const categoria = props.match.params.catMar
    const {item, marcai,cati} = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    let history = useHistory()
    const ProductLink = (id , name) => {
     const fname = name.replace(" ","-")
     history.push(`/producto/${id}/${fname}`)
   }
   const CategoryLink = (name) => {
    history.push(`/categoria/${name}`)
  }
  const MarcaLink = (name) => {
    history.push(`/marca/${name}`)
}
    return(
        <div>
        <Header />
        <Menu cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        <div className="row">
        <div className="col-12">
           
                {marca && marca.filter(m => m.nombre === categoria).map(mc=>{
                   
                        return (
                        
                            <center><img src={mc.get_path}  className="img-fluid mt-1 mb-3" alt="Responsive image" width="50" height="50"/></center>
                            
                        )
                    
                   
                })}
               </div>
            
        </div>
        <center><div class="dropdown-divider in-div "></div></center>
        <div className="row">
            {items && items.filter(it => it.get_marc === categoria).map(ite =>{
                return (
                    <div key={ite.id} className="col-lg-3 col-md-3 col-sm-3">
                     <center><img src={ite.get_path} onClick={()=> ProductLink(ite.id,ite.titulo)} class="img-fluid mt-2 img-prods" alt="Responsive image" />
                            <p className="precio mt-1">${ite.precio}</p>
                            <p className="titulo ">{ite.titulo}</p>
                           
                            <button type="button" onClick={e => props.CartAdd(ite.id) } class="btn btn-primary btn-cart">Agregar al carrito</button></center>
                </div>
                )
            })}
           
        </div>
        <Footer cat={cat} marca={marca} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        </div>
    )
}
export default Marcas