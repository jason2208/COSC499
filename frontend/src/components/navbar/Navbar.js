import React from 'react';

import { MenuItems } from './MenuItems';
import './Navbar.css';
import logo from '../../Images/logo.png';
import { Button } from '../Button/button';

class Navbar extends React.Component {
  render() {
    return(
      <nav className='navbar-items'>
        <div className='container'>
          <a href='/home'>
              <img src={logo} alt='Logo' width='0.1em'/>
          </a>
        </div>
        <div className='menu-icon'></div>
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
        <div className='sign-up-buttons'>
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </nav>
    )
  }
}

export default Navbar