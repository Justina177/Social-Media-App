import React from 'react';
import './ProfileCard.css';
import bg from '../../img/cover.jpg';
import pexel1 from '../../img/img2.png'


const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={bg} alt="" />
            <img src={pexel1} alt="" />
        </div>

        <div className="ProfileName">
          <span>Katrine Zius</span>
          <span>Senior Frontend Developer</span>
        </div>


        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>7,930</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>11</span>
              <span>Followers</span>
            </div>

          </div>
          <hr />
      
        </div>
        <span>My Profile</span>

    </div>
  )
}

export default ProfileCard