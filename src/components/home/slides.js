import React, {useState} from 'react'
import fondo from './../../images/mainpub.png'
import  {Image,Container} from 'react-bootstrap' 
function Slide(props){
    return(
        <Container fluid className="mt-2 mb-3">
            {props.publ && props.publ.filter(pb => pb.id === 1).map(pub =>{
                return (
                    <div key={pub.id}>
                    <Image src={pub.get_path} width="100%" onClick={()=> props.MundoLink()} className="img-fluid"></Image>
                   
                    </div>
                )
            })}
  
</Container>
    )
}
export default Slide