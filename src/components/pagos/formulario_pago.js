import React, {useState,useContext} from 'react'
import Header from './../home/header'
import Menu from './../home/menu'
import {mycontext} from './../../App'
import { useCookies } from 'react-cookie'
import Cookies from 'universal-cookie'
import Footer from '../home/footer'
import  { useHistory } from 'react-router-dom'
import mision from './../../images/mision.png'
import vision from './../../images/vision.png'
import envio from './../../images/envio.png'
function Formulario(props){
    let history = useHistory()
    const {item, marcai ,cati,pedi,cl } = useContext(mycontext)
    const [items, setItems] = item
    const [marca, setMarca] = marcai
    const [cat, setCat] = cati
    const [ped,setPed] =pedi
    const [cod,setCod] = useState("")
    const id = props.match.params.id
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cel, setCel] = useState("");
    const [dir, setDir] = useState("");

    const CategoryLink = (name) => {
        history.push(`/categoria/${name}`)
      }
      const MarcaLink = (name) => {
        history.push(`/marca/${name}`)
    }
    const giveSelection = (ivalue) =>{
        let sel1 = document.querySelector('#sel1');
        let sel2 = document.querySelectorAll('#sel2 option');
     
       
    }
    const Confirmacion = () =>{
        var nExist = false
        var com = 0
        while (!nExist){
            var numberCode = Math.floor(Math.random() * (9999 - 1000)) + 1000
            ped && ped.map(pd=>{
                if(pd.codigo === "REF_"+numberCode.toString()){
                    com = 1
                }
            })
            if(com === 0){
                nExist = true
                
            }
        }
        history.push(`/pagos/confirmacion/${id}/${name}/${dir}/${email}/${cel}/${"REF_"+numberCode.toString()}`)
       
        

    }
    const hide = {
        "display":"none"
    }
    return(
        <div>
        <Header />
        <Menu cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        
        <div className="row mb-4">
            <div className="col-12">
                <center>
                <div class="card ml-5 mr-5 mb-5">
  <h2 class="card-header"><img src={envio} width="40" height="40"></img> Informacion de envio</h2>
  <div class="card-body">
  <form className="ml-5 mr-5">
  <div class="form-group ">
    <label for="name">Nombre Completo:</label>
    <input type="text" onChange={e => setName(e.target.value)} required class="form-control" id="form_name"  placeholder="Digite Nombre"></input>
  </div>
  <div class="form-group ">
    <label for="email">Email:</label>
    <input type="email" onChange={e => setEmail(e.target.value)} required class="form-control" id="form_email"  placeholder="Digite Email"></input>
  </div>
  <div class="form-group ">
    <label for="number">Celular:</label>
    <input type="number" onChange={e => setCel(e.target.value)} required class="form-control" id="form_cel"  placeholder="Digite Cel"></input>
  </div>
  <div class="form-group">
    <label for="Direccion">Direccion</label>
    <input onChange={e => setDir(e.target.value)}  required type="text" class="form-control" id="direccion" placeholder="Digita tu direccion"></input>
  </div>
  <button type="submit" onClick={e => Confirmacion()} class="btn btn-primary">Confirmar</button>
</form>

     </div>
</div>
              
                </center>
            </div>
        </div>
        <Footer marca={marca} cat={cat} CategoryLink={CategoryLink} MarcaLink={MarcaLink}/>
        </div>
    )
}
export default Formulario