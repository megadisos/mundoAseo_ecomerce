import React, {useState,useContext, useEffect} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import Footer from '../home/footer'
import  { Redirect, useHistory } from 'react-router-dom'
import logo from './../../images/LETRERO.png'
import nequi from './../../images/nequi.jpg'
import what from './../../images/what.png'
import banco from './../../images/banco.jpeg'
import credit from './../../images/tarjetas.jpg'
function Carrito(props){
    useEffect(() => {
        let prod = getCookieValue("prod").split(",")
        prod.map(pr =>{
            let precio = getCookieValue(pr).split(",")[1]
            document.cookie = `${pr}=1,${precio}`
         })
        let ftotal = getTotal() < 80000 ? getTotal() + 10000: getTotal()
        document.cookie = `total=${ftotal}`
        console.log("ESTE ES EL TOTAL "+ ftotal)
    }, [])
    const {item, selecti,marcai,cati } = useContext(mycontext)
    const [items, setItems] = item
    const [select, setSelect] = selecti
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    const [can,setCan] = useState({})
    const [getId,setGetId] = useState([])
    const [total,setTotal] = useState([])
    const [ctvalue,setCtvalue] = useState(1)
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
        
        const precio = document.getElementById(`precio${id}`).value
        document.cookie = `${id}=${document.getElementById(id).value},${precio}`
        const theid = id
        
        
        setCan(prevCan => ({...prevCan,precio:document.getElementById(id).value}))
       
        
        
    }  
  
    function getParcial(id){
        
        console.log("Este es el ID al comienzo" + id)
        
        console.log("ESTO ES EL contador" + ctvalue)
       
        if (isNaN(parseInt(getCookieValue(id).split(",")[0]))){
        
            let co = document.cookie.split(";")[2].split("=")[1].split(",")
            return parseInt(co[0]) * parseInt(co[1])
        }else{
            console.log("ESTO ES EL ID" + id)
            let c = getCookieValue(id).split(",")
            console.log("ESTO ES " + c)
            let total = parseInt(c[0]) * parseInt(c[1])
            
            return total
        }
       
        
       
    }
    function getTotal(){
        let total = 0
        let ids = getCookieValue("prod").split(",")
        
        ids.map(id => {
            let getValues = getCookieValue(id).split(",")
            total = total + (parseInt(getValues[0]) * parseInt(getValues[1]))
        })

        return total

    }
    
   
    function deleteFromCart(id){
        var to_delete = getCookieValue("prod").split(",")
        if(to_delete.length == 1){
            document.cookie = `prod=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
            document.cookie = `pr${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
            document.cookie = `pr=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
            document.cookie = `${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        }else{
            // var idx = to_delete.indexOf(id.toString())
            // console.log("Este es el dat " + idx + " y este es el " + to_delete)
            const to_delete_filter = to_delete.filter(function(item) {
                return item !== id.toString()
              })
            var to_add = to_delete_filter.join(',')
            document.cookie = `prod=${to_add}`
            document.cookie = `${id}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
        }
       
        history.push(`/carrito`)
    }
    function buttonClick(total,id){
        if(id === 0){
            let prod = {} 
            let miCookie = document.cookie.split(";")
            let tot = 0
            let msg = "Hola%2C%20Quisiera%20comprar%20estos%20productos:"
            miCookie.forEach(e =>{
                if(parseInt(e[1])){
                    items && items.filter(pr => pr.id === parseInt(e[1])).map(it=>{
                     prod[it.titulo]  = e.split("=")[1]
                    })
                
                    
                } 
            })
            for (let [key, value] of Object.entries(prod)){
                let temp = parseInt(value.split(",")[0]) * parseInt(value.split(",")[1])
                tot = tot + temp
                msg = msg + "%20"+key
            }
            prod["total"] = tot
            if(prod["total"] > 80000){
                prod["Envio"] = 0
            }else{
             prod["Envio"] = 10000
             prod["total"] = prod["total"] + 10000
            }
            
            window.location.href = `https://api.whatsapp.com/send?phone=573212096025&text=${msg}`
        }else{
            history.push(`/pagos/formulario/${id}`)
        }
        
    }
    const CategoryLink = (name) => {
        history.push(`/categoria/${name}`)
    }
    const MarcaLink = (name) => {
        history.push(`/marca/${name}`)
    }
    const customStyle = {
        "width" : "150px"
    }
    return (
        <div >
            <Header />
            <Menu  cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
            <center><div className="row container">
                <div className="col-12">
                <div class="alert alert-warning text-center prd-name" role="alert">
    Envios gratis desde $80.000
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
                        precio = parseInt(getCookieValue(`${it.id}`).split(",")[1])
                  
                    }else{
                        precio = it.precio
                    }
                   
                    return (
                        
                       
                            
                            
                            
                                <tr key={it.id}>
                                <th scope="row">{pos}</th>
                                <td><img src={it.get_path} width="40" height="40"></img> {it.titulo}</td>
                                
                                <td><form><input type="number" disabled id={`precio${it.id}`} value={precio}/> </form></td>
                                <td><form> <input type="number" id={it.id}  min="0" max="100"  defaultValue = "1" min="1" onChange={e =>calcPrice(it.id) }></input> </form></td>
                                <td> {getParcial(it.id)}   <button className="btn btn-danger" onClick={e => deleteFromCart(it.id)}>X</button></td>
                                
                                </tr>
                               
                               
                               
                            
                            
                        
                    )
                   
                    
                }
                   
            })}
            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><label>Envio  ${getTotal() < 80000 ? 10000 : 0}</label></td>
                                
                                </tr>
            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><label >Total  ${isNaN(getTotal()) ? 0 : getTotal() < 80000 ? getTotal() + 10000 : getTotal()}</label></td>
                                
                                </tr>
                                <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" data-toggle="modal"  data-target="#modal"  class="btn btn-success">Finalizar compra</button></td>
                                
                                </tr>
            </tbody>
            </table>   
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
  <label className="mb-2">Ya casi esta. Como deseas finalizar tu compra?</label>
  <div className="row">
      <div className="col-6">
          <img src={nequi} width="150" height="120"></img>
          <p><button type="button" data-dismiss="modal" onClick={evt => buttonClick(isNaN(getTotal()) ? 0 : getTotal() < 80000 ? getTotal() + 10000 : getTotal(),1)} style={customStyle} class="btn btn-primary btn-cart-pop">Pagar por daviplata o nequi</button></p>

      </div>
      <div className="col-6">
      <img src={what} width="70" className="mt-2 mb-5" height="70"></img>
          <p><button type="button" data-dismiss="modal" onClick={evt => buttonClick(isNaN(getTotal()) ? 0 : getTotal() < 80000 ? getTotal() + 10000 : getTotal(),0)} class="btn btn-primary btn-cart-pop">Hacer pedido por whatsapp</button></p>
      </div>
  </div>
  <div className="row">
      <div className="col-6">
          <img src={banco} width="150" height="120"></img>
          <p><button type="button"  data-dismiss="modal" onClick={evt => buttonClick(isNaN(getTotal()) ? 0 : getTotal() < 80000 ? getTotal() + 10000 : getTotal(),2)} style={customStyle} class="btn btn-primary btn-cart-pop">Consignacion a cuenta bancaria</button></p>

      </div>
      <div className="col-6">
      <img src={credit} width="70" className="mt-2 mb-5" height="70"></img>
          <p><button type="button" data-dismiss="modal" onClick={evt => buttonClick(isNaN(getTotal()) ? 0 : getTotal() < 80000 ? getTotal() + 10000 : getTotal(),3)} style={customStyle} class="btn btn-primary btn-cart-pop">Pago con tarjeta de credito</button></p>
      </div>
  </div>
</div>
<div class="modal-footer">
</div>
</div>
</div>
</div>                      
            </div>
            </div></center>
            

            
          <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
          
        </div>
    )
}
export default Carrito