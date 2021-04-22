import React, {useState,useContext, useEffect} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'
import mision from './../../images/mision.png'
import vision from './../../images/vision.png'
import nequi from './../../images/nequi.jpg'
import what from './../../images/what.png'
import banco from './../../images/banco.jpg'
import credit from './../../images/tarjetas.jpg'

function Confirmacion(props){
    let history = useHistory()
    const {item, marcai ,cati,pedi,cl } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    const [ped, setPedi] = pedi
    const name = props.match.params.name
    const [tot,setTot] = useState("")
    const id = props.match.params.id
    const address = props.match.params.address
    const email = props.match.params.email
    const cel = props.match.params.cel
    const cod = props.match.params.cod
   
    useEffect(() => {
       let prod = {} 
       let miCookie = document.cookie.split(";")
       let tot = 0
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
       }
       prod["total"] = tot
       if(prod["total"] > 80000){
           prod["Envio"] = 0
       }else{
        prod["Envio"] = 10000
        prod["total"] = prod["total"] + 10000
       }
       console.log(document.cookie)
       setTot(prod["total"])
        const dataToSend = {
            "codigo" : cod,
            "tipo" : id,
            "estado" : "1",
            "nombre" : name,
            "celular" : cel,
            "email" : email,
            "pedido" : JSON.stringify(prod),
            "address" : address
        }
        fetch("https://www.nabtastore.com.co/api-ma/Pedidos/",{
          method: 'POST',
          headers: {
            'Content-Type':'application/json',
            'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
          },
          body: JSON.stringify(dataToSend)
        })
        .then( resp => resp.json())
        .catch( error => console.log(error))
        .then( resp => console.log(resp))
        // fetch("http://127.0.0.1:8000/api-ma/Pedidos/",{
        //   method: 'POST',
        //   headers: {
        //     'Content-Type':'application/json',
        //     'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
        //   },
        //   body: JSON.stringify(dataToSend)
        // })
        // .then( resp => resp.json())
        // .catch( error => console.log(error))
        // .then( resp => console.log(resp))

      
    }, [])
    const CategoryLink = (name) => {
        history.push(`/categoria/${name}`)
      }
      const MarcaLink = (name) => {
        history.push(`/marca/${name}`)
    }
    const giveSelection = (ivalue) =>{
        let sel1 = document.querySelector('#sel1');
        let sel2 = document.querySelectorAll('#sel2 option');
     
       
    }
  
    const texto = {
        "font-size": "20px"
    }
    if(parseInt(id) === 1){
        return(
            <div>
            <Header />
            <Menu cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
            <div className="row mb-4">
                <div className="col-12">
                    <center><h1 className="prd-name">Confirmacion Pedido No {cod}</h1></center>
                </div>
         </div>
         <div className="row mb-4">
                <div className="col-12">
                    <center>
                    <div class="card ml-5 mr-5 mb-5">
  <h5 class="card-header"><img src={nequi} width="60" height="60"></img>Pago por Nequi o Daviplata</h5>
  <div class="card-body">
    <p class="card-text prd-name">Tu total es ${tot}, puedes pagar por cualquiera de estos dos medios con el numero <label style={texto}>3212046055</label></p>
    <p class="card-text prd-name">Recuerda tienes 24 horas para ser el pago si no la reserva sera cancelada,  una vez lo hayas realizado envia la evidencia al mismo numero por whatsapp.</p>
  </div>
</div>
     </center>
                </div>
         </div>
            <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
            </div>
        )
    }else if(parseInt(id) === 2){
        return(
            <div>
            <Header />
            <Menu cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
            <div className="row mb-4">
                <div className="col-12">
                    <center><h1 className="prd-name">Confirmacion Pedido No {cod}</h1></center>
                </div>
         </div>
         <div className="row mb-4">
                <div className="col-12">
                    <center>
                    <div class="card ml-5 mr-5 mb-5">
  <h5 class="card-header"><img src={banco} width="80" height="60"></img>Consignación a cuenta bancolombia</h5>
  <div class="card-body">
    <p class="card-text prd-name">Tu total es ${tot}, puedes consignar  a la cuenta de ahorros <label style={texto}>03126008754</label> a nombre de William Hernandez. </p>
    <p class="card-text prd-name">Recuerda tienes <label style={texto}>24</label> horas para hacer el pago si no la reserva sera cancelada, una vez lo hayas realizado envia la evidencia al numero <label style={texto}>3212046055.</label></p>
  </div>
</div>
                    </center>
    
                </div>
         </div>
            <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
            </div>
        )
    }
    
}
export default Confirmacion