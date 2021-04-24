import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'
import ubicacion from './../../images/ubicacion.png'
import phone from './../../images/phone.png'
import what from './../../images/what.png'
function Contacto(props){
    let history = useHistory()
    const {item, marcai, cati } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    const CategoryLink = (name) => {
        history.push(`/categoria/${name}`)
      }
      const MarcaLink = (name) => {
        history.push(`/marca/${name}`)
    }
    const mystyle = {
        "color": "black",
        "text-decoration": "none"
    }
    return(
        <div>
        <Header />
        <Menu cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        <div className="row mb-5">
            <div className="col-12">
                <center><h1 className="prd-name">Contactanos </h1></center>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <center><img src={ubicacion} width="40" height="40"></img><h4 className="prd-name">Donde encontrarnos ? </h4></center>
            </div>
        </div>
        <div className="row mb-5">
        <div class="col-12">
              <center><div className="map"><iframe width="50%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Kra%20114%20No%20152d-76+(El%20mundo%20del%20aseo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></center>
              </div>
              </div>
              <div className="row mb-4">
            <div className="col-12">
                <center><img src={phone} width="40" height="40"></img><h4 className="prd-name">Nuestros numeros </h4></center>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-12"><center><img src={what} width="20" height="20"></img><a style={mystyle} href="https://api.whatsapp.com/send?phone=573212046055&text=Hola%2C%20quisiera%20infromacion">3212046055</a></center></div>
        </div>
        <div className="row mb-5">
            <div className="col-12"><center><img src={what} width="20" height="20"></img><a style={mystyle} href="https://api.whatsapp.com/send?phone=573115291717&text=Hola%2C%20quisiera%20infromacion">3115291717</a></center></div>
        </div>
        <div className="row mb-5">
            <div className="col-12"><center><img src={what} width="20" height="20"></img>7962392</center></div>
        </div>
        <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        </div>
    )
}
export default Contacto