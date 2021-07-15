import React, {useState,useEffect} from 'react'
import image from './../../images/cat1.jpg'
import image1 from './../../images/cat2.jpg'
import image2 from './../../images/cat3.jpg'
import {mycontext} from './../../App'
import  {Container, Row, Col,Navbar,NavDropdown,Nav,Image} from 'react-bootstrap' 
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
  const styleColor={
    "background":"#b5d485",
  }
    return(
      <Container>
             <Row>
      {categoria && categoria.map(mc=>{
              return(
                    <Col xs={12} md={12} lg={4} key={mc.id} style={styleColor}>
                        <center><Image src={mc.get_path} className="mt-3 cat-img" width="400" height="250" onClick={()=> props.CategoryLink(mc.get_name)} ></Image></center>
                        <p className="text-center">{mc.get_name}</p>
                    </Col>
                )   
            })}
        </Row>
       </Container>


    )
}
export default Category