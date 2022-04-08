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
 
          <div className="container">
            <a href="/home">
                <img src={logo} alt="Logo" width='0.1em'/>
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
          <a href="/signin"><Button className="btn--outline">Sign In</Button></a>
          <a href="/signup"><Button>Sign Up</Button></a>
        </div>
      </nav>


    );
  }
}

export default Navbar