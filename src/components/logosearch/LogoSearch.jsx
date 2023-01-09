import React from 'react';
import Logo from '..//../img/Logo.png';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className= "LogoSearch">
        <img src={Logo} className="img-logo" alt="" />
        <div className="Search">
          <input type="text" placeholder='#Eplore' />
          <div className="s-icon">
            <UilSearch/>
          </div>
        </div>
    </div>
  )
}

export default LogoSearch