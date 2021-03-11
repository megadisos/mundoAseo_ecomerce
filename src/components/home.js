import React, {useState, useEffect, useContext} from 'react'
import Header from './home/header'
import Menu from './home/menu'
import Slide from './home/slides'
import Category from './home/category'
import Brands from './home/brands'
import Featured from './home/featured'
import Bseller from './home/bseller'
import Footer from './home/footer'
import {mycontext} from './../App'
import  { Redirect, useHistory } from 'react-router-dom'
function Home(props){
    const  [publ,setPubl] = useState([])
    const [select,setSelect] = useState("Envase 250 Grs")
    const [cat, setCat] = useState([])

    const {item, marcai} = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
   
   
    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/api-ma/Publicidad/",{
    //       method: 'GET',
    //       headers: {
    //         'Content-Type':'application/json',
    //         'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
    //       }
    //     })
    //     .then( resp => resp.json())
    //     .then( resp => setPubl(resp))
    //     .catch( error => console.log(error))
    //     .then( resp => console.log(resp))

    //     fetch("http://127.0.0.1:8000/api-ma/Productos/",{
    //       method: 'GET',
    //       headers: {
    //         'Content-Type':'application/json',
    //         'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
    //       }
    //     })
    //     .then( resp => resp.json())
    //     .then( resp => setCat(resp))
    //     .catch( error => console.log(error))
    //     .then( resp => console.log(resp))

        
    //   }, [])
    useEffect(() => {
        fetch("https://www.nabtastore.com.co/api-ma/Publicidad/",{
          method: 'GET',
          headers: {
            'Content-Type':'application/json',
            'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
          }
        })
        .then( resp => resp.json())
        .then( resp => setPubl(resp))
        .catch( error => console.log(error))
        .then( resp => console.log(resp))

        fetch("https://www.nabtastore.com.co/api-ma/Productos/",{
          method: 'GET',
          headers: {
            'Content-Type':'application/json',
            'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
          }
        })
        .then( resp => resp.json())
        .then( resp => setCat(resp))
        .catch( error => console.log(error))
        .then( resp => console.log(resp))

        
      }, [])
    let history = useHistory()
    
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
    const ProductLink = (id , name) => {
        const fname = name.replace(" ","-")
        history.push(`/producto/${id}/${fname}`)
    }
    const CategoryLink = (name) => {
        history.push(`/categoria/${name}`)
    }
    const MarcaLink = (name) => {
        history.push(`/marca/${name}`)
    }
    const MundoLink = () => {
        const name = "mundo_aseo"
        history.push(`/marca/${name}`)
    }
  
    return(
        <div>
            <div className="container-fluid">
            <Header />
        </div>
        <div className="container cat">
            <Menu cat={cat} CategoryLink={CategoryLink}/>
        </div>
        <div className="container-fluid">
            <Slide publ={publ} MundoLink = {MundoLink}/>
        </div>
        <div className="container">
            <Category CategoryLink={CategoryLink}/>
            <Brands MarcaLink={MarcaLink} />
            <Featured CartAdd={CartAdd} ProductLink={ProductLink} />
            <Bseller CartAdd={CartAdd} ProductLink={ProductLink}/>
        </div>
        <div className="container-fluid">
            <Footer CategoryLink={CategoryLink} MarcaLink={MarcaLink} cat={cat} marca={marca}/>
        </div>
        </div>
    )
}
export default Home