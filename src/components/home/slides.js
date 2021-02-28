import React, {useState} from 'react'
import fondo from './../../images/mainpub.png'
function Slide(props){
    return(
        <div class="jumbotron">
            {props.publ && props.publ.filter(pb => pb.id === 1).map(pub =>{
                return (
                    <div>
                    <img src={pub.get_path} className="img-fluid img-pr"></img>
                   
                    </div>
                )
            })}
  
</div>
    )
}
export default Slide