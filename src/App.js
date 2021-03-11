import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Routing from './components/routing'
import { CookiesProvider } from 'react-cookie'
import  { useHistory } from 'react-router-dom'

export const mycontext = React.createContext()
function App() {
  let history = useHistory()
 const [item,setItem] = useState([])
 const [select,setSelect] = useState("Envase 250 Grs")
 const [marca, setMarca] = useState([])
 const [cat, setCat] = useState([])
 const CategoryLink = (name) => {
  history.push(`/categoria/${name}`)
}
 useEffect(() => {
   fetch("https://www.nabtastore.com.co/api-ma/Items/",{
     method: 'GET',
     headers: {
       'Content-Type':'application/json',
       'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
     }
   })
   .then( resp => resp.json())
   .then( resp => setItem(resp))
   .catch( error => console.log(error))
   .then( resp => console.log(resp))
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
        .then( resp => console.log(resp))
fetch("https://www.nabtastore.com.co/api-ma/Productos/",{
                    method: 'GET',
                    headers: {
                      'Content-Type':'application/json',
                      'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
                    }
                  })
                  .then( resp => resp.json())
                  .then( resp => setCat(resp))
                  .catch( error => console.log(error))
                  .then( resp => console.log("ESTA ES LA RESPUESTA DEL CATI" + resp))
 }, [])
// useEffect(() => {
//   fetch("http://127.0.0.1:8000/api-ma/Items/",{
//     method: 'GET',
//     headers: {
//       'Content-Type':'application/json',
//       'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
//     }
//   })
//   .then( resp => resp.json())
//   .then( resp => setItem(resp))
//   .catch( error => console.log(error))
//   .then( resp => console.log(resp))

//   fetch("http://127.0.0.1:8000/api-ma/Marca/",{
//           method: 'GET',
//           headers: {
//             'Content-Type':'application/json',
//             'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
//           }
//         })
//         .then( resp => resp.json())
//         .then( resp => setMarca(resp))
//         .catch( error => console.log(error))
//         .then( resp => console.log(resp))
//   fetch("http://127.0.0.1:8000/api-ma/Productos/",{
//           method: 'GET',
//           headers: {
//             'Content-Type':'application/json',
//             'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
//           }
//         })
//         .then( resp => resp.json())
//         .then( resp => setCat(resp))
//         .catch( error => console.log(error))
//         .then( resp => console.log(resp))
// }, [])

  return (
    <mycontext.Provider value={{item: [item,setItem],marcai:[marca,setMarca],selecti:[select,setSelect],cati:[cat,setCat],cl:CategoryLink}}>
      <CookiesProvider>
      <Routing />
      </CookiesProvider>
      </mycontext.Provider>
      
  );
}

export default App;
