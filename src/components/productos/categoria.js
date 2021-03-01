import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'

function Categoria(props){
    const categoria = props.match.params.catName
    const {item, selecti } = useContext(mycontext)
    const [items, setItems] = item
    let history = useHistory()
    const ProductLink = (id , name) => {
     const fname = name.replace(" ","-")
     history.push(`/producto/${id}/${fname}`)
   }
    return(
        <div>
        <Header />
        <Menu />
        <div className="row">
            <div className="col-12">
                <center><h1 className="prd-name">{categoria}</h1></center>
            </div>
        </div>
        <center><div class="dropdown-divider in-div "></div></center>
        <div className="row">
            {items && items.filter(it => it.get_cat === categoria).map(ite =>{
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
        <Footer />
        </div>
    )
}
export default Categoria