import React, {} from "react";
//import { Link } from "router";

import { MenuItems } from "./MenuItems";
import { Component } from "react/cjs/react.production.min";
import './Navbar.css';
import logo from '../../Images/logo.png';
import {Button} from '../Button/button';

class Navbar extends React.Component{


  render(){
    return(

      <nav className="NavbarItems">
 
          <div class="container">
            <a href="/home">
                <img src={logo} alt="Logo" />
            </a>
          </div>

        <div className="menu-icon">
        </div>
        
        <ul className={'nav-menu'}>
          {MenuItems.map((item,index)=>{
              return(
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
          })}
         
        </ul>
      </nav>


    );
  }
}

export default Navbar