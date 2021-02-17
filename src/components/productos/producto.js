import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'

function Producto(props){
    const name = props.match.params.productName
    const id = props.match.params.id
    const items = useContext(mycontext)
    
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
    const CartAdd = (id) =>{
        console.log("si entro con id" + id)
        var arr = [id]
        var current = getCookieValue("prod")
        if (current === ""){
            document.cookie = `prod=${id}`
            document.cookie = `${id}=1`
        }else{
            if(checkRepeated(id) === false){
                document.cookie = `prod=${current},${id}`
                document.cookie = `${id}=1`
            }
            
        }
        
        
    }

    return (
        <div className="container">
        <Header />
        <Menu />
        
        {items && items.filter(product => product.id == id).map(it =>{
                return(
                    <div className="row" key={it.id}>
                        {it.id} {it.titulo}
                        <img src={it.get_path}   class="img-fluid mt-2 img-prods" alt="Responsive image" />
                        {it.descripcion}
                        <button type="button" onClick={()=> CartAdd(it.id)} class="btn btn-primary">Agregar al carrito</button>
                    </div>
                )
        })}
       
        </div>
    )
}
export default Producto