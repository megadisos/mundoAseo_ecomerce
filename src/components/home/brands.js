import React, {useState,useEffect} from 'react'
import image from './../../images/im1.jpg'
function Brands(props){
  const [marca,setMarca] = useState([])
  useEffect(() => {
    fetch("https://www.nabtastore.com.co/api-ma/Marca/",{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
      }
    })
    .then( resp => resp.json())
    .then( resp => setMarca(resp))
    .catch( error => console.log(error))
  }, [])
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api-ma/Marca/",{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type':'application/json',
  //       'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
  //     }
  //   })
  //   .then( resp => resp.json())
  //   .then( resp => setMarca(resp))
  //   .catch( error => console.log(error))
  // }, [])
  console.log(marca)
    return(
        <div>
        {/* <div className="row mt-2">
            <div className="col-12">
                <h2 className="text-center titulos">Compra por marca</h2>
            </div>
            </div>
            <div class="dropdown-divider"></div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active"> */}
    <div className="row mt-2">
            <div className="col-12">
                <h2 className="text-center titulos"><i class="fa fa-building icolor" aria-hidden="true" ></i> Compra por marca</h2>
            </div>
            </div>
    <div class="dropdown-divider"></div>
      <div className="row">
        
          {marca && marca.map(mc=>{
                    return (
                      
                        <div key={mc.id} className="col-lg-2 ">
                      
                           <img src={mc.get_path} onClick={()=> props.MarcaLink(mc.nombre)} className="img-fluid mt-2 img-prods" alt="Responsive image" />
                            </div>
                    )
                
            })}
         
          
      </div>
    {/* </div>
    <div className="carousel-item">
    <h1>Hola</h1>
      </div>
    <div className="carousel-item">
    <h1>Hola</h1>
      </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a> */}
{/* </div> */}

            </div>
        
    )
}
export default Brands