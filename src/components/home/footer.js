import React, {useState} from 'react'
import face from './../../images/face.png'
import insta from './../../images/insta.png'
function Footer(props){
    return(
        <div>
        <div class="dropdown-divider"></div>
        <center><div className="row  pie bg-light">
            <div className="col-lg-4 col-md-4 col-sm-12 ">
                <h6 className="mr">Marcas</h6>
                <p>marca 1</p>
                <p>marca 2</p>
                <p>marca 3</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 ">
                <h6 className="ct">Categorias</h6>
                <p>categoria 1</p>
                <p>categoria 2</p>
                <p>categoria 3</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 ">
            <h6 className="rd">Redes</h6>
            <p><img src={face} className="img-fluid" width="20" height="20"></img> facebook</p>
            <p><img src={insta} className="img-fluid" width="20" height="20"></img> instagram</p>
            
            </div>
        </div></center>
        </div>
    )
}
export default Footer