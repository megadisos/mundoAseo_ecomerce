import React, {useState,useContext,useEffect} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { Redirect, useHistory } from 'react-router-dom'
function Producto(props){
    useEffect(() => {
        setSelect("Envase 250 Grs")
        
    }, [])
    const name = props.match.params.productName
    const id = props.match.params.id
    const {item, marcai,selecti } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [select, setSelect] = selecti
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
    let history = useHistory()
    const CategoryLink = (name) => {
        history.push(`/categoria/${name}`)
    }
    const CartAdd = (id,op,pr,p250,p500,pgl,pgr) =>{
        console.log("si entro con id" + id)
        var arr = [id]
        var current = getCookieValue("prod")
        if (current === ""){
            document.cookie = `prod=${id}`
            document.cookie = `${id}=1,${select}`
          
        }else{
            if(checkRepeated(id) === false){
                document.cookie = `prod=${current},${id}`
                document.cookie = `${id}=1,${select}`
           
                
            }
            
        }
        if (op){
            if (select === "Envase 250 Grs"){
                
                document.cookie = `${id}=1,${p250}`
            }else if(select === "Envase 500 Grs"){
               
                document.cookie = `${id}=1,${p500}`
            }else if(select === "Galon(4 litros)"){
               
                document.cookie = `${id}=1,${pgl}`
            }else{
                
                document.cookie = `${id}=1,${pgr}`
            }
        }else{
            
            document.cookie = `${id}=1,${pr}`
        }
        
        
    }

    return (
        <div >
        <Header />
        <Menu />
        
        {items && items.filter(product => product.id == id).map(it =>{
            
                return(
                    <div>
                    <div className="row mt-2 bg-light " key={it.id}>
                        <div className="col-12">
                            <center><h1 className="prd-name">{it.titulo}</h1></center>
                        </div>
                    </div>
                    <center><div class="dropdown-divider in-div "></div></center>
                    <center><div className="row container mt-2 bg-light" >
                      <div className="col-lg-6 col-md-6 col-dm-12 img-box">
                      
                        <img src={it.get_path}   className="mt-2 img-det"  />
                      
                       
                        </div>
                        <div className="col-lg-6 col-md-6 col-dm-12">
                            <h5 className="prd-name text-left">Descripcion</h5>
                                <p className="prd-name text-left">{it.descripcion}</p>
                               
                                
                                { it.opciones ?
                                 <form>
                                 <div class="form-group">
                                <label for="tamanio">Tamaño</label>
                                <select onChange={e => setSelect(e.target.value)} class="form-control" id="tamanio">
                                    <option>Envase 250 Grs</option>
                                    <option>Envase 500 Grs</option>
                                    <option>Galon(4 litros)</option>
                                    <option>Garrafa (20 litros)</option>
                                </select>
                                
                                 </div>
                                 </form>
                                 : <br></br> }
                               
                                
                                <p className="prd-pre text-left"> ${ it.opciones ? select === "Envase 250 Grs" ? it.precio250 : select === "Envase 500 Grs" ?  it.precio500 : select === "Galon(4 litros)" ? it.precioGl :select === "Garrafa (20 litros)" ? it.precioGr: it.precio : it.precio}  </p>
                                                                        
                                                                        
                                                                        
                                                                        
                                <button type="button" onClick={e => CartAdd(it.id,it.opciones,it.precio,it.precio250,it.precio500,it.precioGl,it.precioGr) }class="btn btn-primary bt-pos btn-cart mt-5 ">Agregar al carrito</button>
                                
                        </div>
                    </div></center>
                    </div>
                )
        })}
        <p className="mt-5 mb-5"></p>
        <Footer />
        </div>
    )
}
export default Producto