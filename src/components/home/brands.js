import React, {useState,useEffect} from 'react'
import image from './../../images/im1.jpg'
import  {Container, Row, Col,Navbar,NavDropdown,Nav,Image} from 'react-bootstrap' 
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

  console.log(marca)
    return(
        <Container>

    <Row className="mt-4" >
            <Col xs={12}>
                <h2 className="text-center titulos"><i class="fa fa-building icolor" aria-hidden="true" ></i> Compra por marca</h2>
            </Col>
            </Row>
    <div class="dropdown-divider"></div>
      <center><Row>
        
          {marca && marca.map(mc=>{
                    return (
                      
                        <Col key={mc.id} xs={12} md={12} lg={2} className="mt-2">
                      
                           <Image src={mc.get_path} onClick={()=> props.MarcaLink(mc.nombre)} width="150" height="150"  ></Image>
                            </Col>
                    )
                
            })}
         
          
      </Row></center>
            </Container>
        
    )
}
export default Brands