import React from 'react';
import Logoo from '..//../img/logoo.png';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className= "LogoSearch">
        <img src={Logoo} className="img-logo" alt="" />
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