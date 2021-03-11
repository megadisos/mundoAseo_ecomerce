import React, {useState, useContext} from 'react'
import {mycontext} from './../../App'
import  { Redirect, useHistory , useLocation, Link} from 'react-router-dom'
function Header(props){
    const valor = useContext(mycontext);
    return(
        <div>
        <nav className="nav-header navbar navbar-expand-lg navbar-expand-md navbar-light ">
          <ul class="navbar-nav mr-auto header-info">
      <li class="nav-item active">
        <a class="nav-link header-lk" data-toggle="modal" data-target="#exampleModal" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i>  Cra. 114 #152d-82, Bogotá <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link header-lk" href="#"><i class="fa fa-phone" aria-hidden="true"></i> 321 2096055</a>
      </li>
      <li class="nav-item input">
          <form class="form-group ">
          
          <input type="text" class="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Buscar" size="30" /> 
          <i class="fa fa-search" aria-hidden="true"></i>
        </form>
      </li>
      <li class="nav-item">
      <a href="https://master.dphw95lv4xi23.amplifyapp.com/carrito"><i class="fa fa-shopping-cart " aria-hidden="true"></i></a>
      </li>
      </ul>
        </nav>
      
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Encuentranos aca</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <div className="map"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Kra%20114%20No%20152d-82+(El%20mundo%20del%20aseo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
              </div>
             
            </div>
          </div>
        </div>
        </div>
    )
}
export default Header