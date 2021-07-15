import React, {useState} from 'react'
import fondo from './../../images/mainpub.png'
import  {Jumbotron,Image} from 'react-bootstrap' 
function Slide(props){
    return(
        <Jumbotron>
            {props.publ && props.publ.filter(pb => pb.id === 1).map(pub =>{
                return (
                    <div key={pub.id}>
                    <Image src={pub.get_path} width="100%" onClick={()=> props.MundoLink()} className="img-fluid"></Image>
                   
                    </div>
                )
            })}
  
</Jumbotron>
    )
}
export default Slide