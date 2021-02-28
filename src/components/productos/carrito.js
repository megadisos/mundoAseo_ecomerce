import React, {useState,useContext, useEffect} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import  { Redirect, useHistory } from 'react-router-dom'

function Carrito(props){
    const {item, selecti } = useContext(mycontext)
    const [items, setItems] = item
    const [select, setSelect] = selecti
    const [can,setCan] = useState({})
    const [total,setTotal] = useState([])
    let precio = 0
    let history = useHistory()
    let cont = 0
    let pos = 0
    function getCookieValue(name) {
        let arrays = []
        let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
        return result ? result.pop() : ""
      }
    function isInCart(id){
       
        var value =  getCookieValue("prod").split(",").indexOf(id.toString())
       
        if (value >= 0){
            return true
        }else{
            return false
        }
    }
 
    function getInitial(){
        var myvalue = getCookieValue("prod").split(",")
        var total = 0
        var tmp = 0
        for (let i of items){
           if (myvalue.includes(i.id.toString())){
           
                total = total + i.precio
           }
        }
        return total
    }
    function calcPrice(id){
        console.log("Este es el id " + id + " Y este es el "+ document.getElementById(id).value)
        document.cookie = `${id}=${document.getElementById(id).value}`
        const theid = id
        setCan(prevCan => ({...prevCan,id:document.getElementById(id).value}))

        
    }     
    function deleteFromCart(id){
        var to_delete = getCookieValue("prod").split(",")
        if(to_delete.length == 1){
            document.cookie = `prod=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        }else{
            // var idx = to_delete.indexOf(id.toString())
            // console.log("Este es el dat " + idx + " y este es el " + to_delete)
            const to_delete_filter = to_delete.filter(function(item) {
                return item !== id.toString()
              })
            var to_add = to_delete_filter.join(',')
            document.cookie = `prod=${to_add}`
        }
       
        history.push(`/carrito`)
    }

    return (
        <div >
            <Header />
            <Menu />
            <center><div className="row container">
                <div className="col-12">
                <div class="alert alert-warning text-center prd-name" role="alert">
    Envios gratis desde $50.000
</div>
                </div>
            </div></center>
          
            <div className="row">
                <div className="col-12 prd-name"><center><h1>Carrito</h1></center></div>
            </div>
          <center><div className="row mt-3 container">
          <div  className="col-12">

            <table class="table prd-name">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio unitario</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Total {select}</th>
                </tr>
            </thead>
            <tbody>
            {items && items.map(it =>{
                if (isInCart(it.id)){
                    pos += 1
                    cont = cont + (parseInt(getCookieValue(it.id)) * it.precio)
                    if (it.opciones){
                        if(getCookieValue(`pr${it.id}`) === "it.precio250"){
                            precio = it.precio250
    
                        }else if(getCookieValue(`pr${it.id}`) === "it.precio500"){
                            precio = it.precio500
                        }else if(getCookieValue(`pr${it.id}`) === "it.precioGl"){
                            precio = it.precioGl
                        }else if(getCookieValue(`pr${it.id}`) === "it.precioGr"){
                            precio = it.precioGr
                        }
                    }else{
                        precio = it.precio
                    }
                   
                    return (
                        
                       
                            
                            
                            
                                <tr key={it.id}>
                                <th scope="row">{pos}</th>
                                <td><img src={it.get_path} width="40" height="40"></img> {it.titulo}</td>
                                <td>{precio}</td>
                                <td><form><input type="number" id={it.id}  min="0" max="100"  defaultValue = "1" onChange={e =>calcPrice(it.id) }></input> </form></td>
                                <td>${getCookieValue(it.id) === "" ? (precio,document.cookie = `${it.id}=1`) : precio * parseInt(getCookieValue(it.id))}   <button className="btn btn-danger" onClick={e => deleteFromCart(it.id)}>X</button></td>
                                
                                </tr>
                               
                               
                               
                            
                            
                        
                    )
                   
                    
                }
                   
            })}
            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><label>Envio  ${(isNaN(cont) ? getInitial() : cont) < 50000 ? 7000 : 0}</label></td>
                                
                                </tr>
            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><label>Total  ${(isNaN(cont) ? getInitial() : cont) < 50000 ? (isNaN(cont) ? getInitial() : cont) + 7000: (isNaN(cont) ? getInitial() : cont)}</label></td>
                                
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" class="btn btn-success">Finalizar compra</button></td>
                                
                                </tr>
            </tbody>
            </table>                         
            </div>
            </div></center>
            

            
          
          
        </div>
    )
}
export default Carrito