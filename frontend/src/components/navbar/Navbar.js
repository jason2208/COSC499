import React, {} from "react";

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
        <div className="sign-up-buttons">
          <Button className="btn--outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>


    );
  }
}

export default Navbar