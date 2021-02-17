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
