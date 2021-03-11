import React, {useState,useEffect} from 'react'
import image from './../../images/cat1.jpg'
import image1 from './../../images/cat2.jpg'
import image2 from './../../images/cat3.jpg'
import {mycontext} from './../../App'
function Category(props){
    const [categoria,setCategoria] = useState([])
  
  useEffect(() => {
    fetch("https://www.nabtastore.com.co/api-ma/Categorias/",{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
      }
    })
    .then( resp => resp.json())
    .then( resp => setCategoria(resp))
    .catch( error => console.log(error))
  }, [])
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api-ma/Categorias/",{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'application/json',
  //       'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
  //     }
  //   })
  //   .then( resp => resp.json())
  //   .then( resp => setCategoria(resp))
  //   .catch( error => console.log(error))
  // }, [])
    return(
        <div className="row cat">
             
          {categoria && categoria.map(mc=>{
              if(mc.id === 1){
                    return(
                        <div key={mc.id} className="col-lg-3 col-md-3 col-sm-12 main-cat mb-3">
                            <center><img src={mc.get_path} class="img-fluid mt-2 img-pro" onClick={()=> props.CategoryLink(mc.get_name)} alt="Responsive image" />
                            <p className="text-center">{mc.get_name}</p></center>
                        </div>
                    )
            }else if (mc.id === 2){
                return(
                <div key={mc.id} className="col-lg-3 col-md-3 col-sm-12 main-cat1 mb-3">
                <center><img src={mc.get_path} onClick={()=> props.CategoryLink(mc.get_name)} class="img-fluid mt-2 img-pro"  alt="Responsive image" />
                <p className="text-center">{mc.get_name}</p></center>
            </div>
                )
            }else {
                return(
                <div key={mc.id} className="col-lg-3 col-md-3 col-sm-12 main-cat2">
                            <center><img src={mc.get_path} onClick={()=> props.CategoryLink(mc.get_name)} class="img-fluid mt-2 img-pro"  alt="Responsive image" />
                            <p className="text-center">{mc.get_name}</p></center>
                        </div>
                        )
            }
                  
                
            })}
           </div>
    )
}
export default Category