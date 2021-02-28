import React, {useState, useEffect} from 'react'
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
    const ProductLink = (id , name) => {
        const fname = name.replace(" ","-")
        history.push(`/producto/${id}/${fname}`)
    }
    return(
        <div>
            <div className="container-fluid">
            <Header />
        </div>
        <div className="container cat">
            <Menu />
        </div>
        <div className="container-fluid">
            <Slide publ={publ}/>
        </div>
        <div className="container">
            <Category />
            <Brands/>
            <Featured CartAdd={CartAdd} ProductLink={ProductLink}/>
            <Bseller CartAdd={CartAdd}/>
        </div>
        <div className="container-fluid">
            <Footer />
        </div>
        </div>
    )
}
export default Home