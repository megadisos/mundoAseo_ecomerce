import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'

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
        <div className="row">
            <div className="col-12">
                <center><h1 className="prd-name">Acerca de </h1></center>
            </div>
        </div>
      
        <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        </div>
    )
}
export default Acerca