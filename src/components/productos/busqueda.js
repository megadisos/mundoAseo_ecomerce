import React, {useState,useContext} from 'react'
import Header from '../home/header'
import Menu from '../home/menu'
import {mycontext} from '../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'
import logo from './../../images/LETRERO.png'

function Busqueda(props){
    const name = props.match.params.namProd
    const categoria = props.match.params.catName
    const {item, marcai,cati } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    let history = useHistory()
    const ProductLink = (id , name) => {
        const fname = name.replace(" ","-")
        history.push(`/producto/${id}/${fname}`)
    }
   function getCookieValue(name) {
    let arrays = []
    let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
    return result ? result.pop() : ""
  }
function checkRepeated(id){
    var data= getCookieValue("prod").split(",")
    for (let i of data){
        if (id === parseInt(i)){
            return true
        }
        console.log("Esta es la data " + i) 
    }
    return false
    
} 
const CartAdd = (id,precio) =>{
        
    var arr = [id]
    var current = getCookieValue("prod")
    if (current === ""){
        document.cookie = `prod=${id}`
        document.cookie = `${id}=1,${precio}`
        
    }else{
        if(checkRepeated(id) === false){
            document.cookie = `prod=${current},${id}`
            document.cookie = `${id}=1,${precio}`
            
        }
        
    }
    
    
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
                <h1 className="prd-name">Resultado Busqueda [{name}] </h1>
            </div>
        </div>
        <div className="row">
            {items && items.map(item =>{
                let titulo = item.titulo.toLowerCase()
                if(titulo.includes(name.toLowerCase())){
                    return(
                        <div  key={item.id} className="col-lg-2 col-md-2 col-sm-12 product ml-3">
                            <center><img src={item.get_path}   onClick={()=> ProductLink(item.id,item.titulo)} class="img-fluid mt-2 img-prods" alt="Responsive image" />
                            <p className="precio mt-1">${item.precio}</p>
                            <p className="titulo ">{item.titulo}</p>
                            <button type="button" onClick={e => CartAdd(item.id,item.precio) }  data-toggle="modal"  data-target="#modal" aria-expanded="false" aria-controls="collapseExample" class="btn btn-primary btn-cart">Agregar al carrito</button></center>
                            
                          
                            
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

                            </div>
                    )
                }
               
            })}
        </div>
      
        <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        </div>
    )
}
export default Busqueda