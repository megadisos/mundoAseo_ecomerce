import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'
import mision from './../../images/mision.png'
import vision from './../../images/vision.png'
function Acerca(props){
    let history = useHistory()
    const {item, marcai ,cati,cl } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    
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
        <div className="row mb-4">
            <div className="col-12">
                <center><h1 className="prd-name">Acerca de </h1></center>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <center><img src={mision} width="40" height="40"></img><h4 className="prd-name">Nuestra Mision </h4></center>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-12">
            <center><p > EL MUNDO DEL ASEO W&R SAS se propone brindar a sus clientes los más altos estandares de calidad en cuanto a productos de aseo industrial y hogar;<br></br> también brindamos la mejor atención a nuestros clientes; innovamos cada día según la necesidad del usuario </p></center>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <center><img src={vision} width="40" height="40"></img><h4 className="prd-name">Nuestra Vision </h4></center>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-12">
            <center><p>Mejorar  cada día y así poder ofrecer  calidad en nuestros productos y brindarle una excelente orientación a nuestro s clientes </p></center>
            </div>
        </div>
        <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        </div>
    )
}
export default Acerca