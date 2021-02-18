import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link,Switch,Redirect, } from "react-router-dom"
import Routing from './components/routing'
import { CookiesProvider } from 'react-cookie'

export const mycontext = React.createContext()
function App() {
 const [item,setItem] = useState([])
 useEffect(() => {
   fetch("http://127.0.0.1:8000/api-ma/Items/",{
     method: 'GET',
     headers: {
       'Content-Type':'application/json',
       'Authorization': `Token 8056a54741f0eda31a7780ad71d24ef9667ce71c`
     }
   })
   .then( resp => resp.json())
   .then( resp => setItem(resp))
   .catch( error => console.log(error))
   .then( resp => console.log(resp))
 }, [])
 
  return (
    <mycontext.Provider value={item}>
      <CookiesProvider>
      <Routing />
      </CookiesProvider>
      </mycontext.Provider>
      
  );
}

export default App;
