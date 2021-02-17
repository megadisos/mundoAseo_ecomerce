import React, {useState,useContext, useEffect} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import  { Redirect, useHistory } from 'react-router-dom'

function Carrito(props){
    const items = useContext(mycontext)
    const [can,setCan] = useState({})
    const [total,setTotal] = useState([])
    let history = useHistory()
    let cont = 0
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
        <div className="container">
            <Header />
            <Menu />
          
            {items && items.map(it =>{
                if (isInCart(it.id)){
                    cont = cont + (parseInt(getCookieValue(it.id)) * it.precio)
                    return (
                        
                        <div key={it.id}>
                            <form>
                                
                            {it.titulo} {it.id} ${it.precio}
                            <input type="number" id={it.id}  min="0" max="100"  defaultValue = "1" onChange={e =>calcPrice(it.id) }></input>
                            
                            {getCookieValue(it.id) === "" ? (it.precio,document.cookie = `${it.id}=1`) : it.precio * parseInt(getCookieValue(it.id))}
                            <button onClick={e => deleteFromCart(it.id)}>Delete</button>
                            
                            </form>
                           
                        </div>
                    )
                   
                    
                }
                   
            })}
            

            
           ESTE ES EL Total {isNaN(cont) ? getInitial() : cont}
          
        </div>
    )
}
export default Carrito