import React from 'react';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft.jsx';
import ProfileCard from '../../components/profileCard/ProfileCard.jsx';
import PostSide from '../../components/postside/PostSide';
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft />
        
        <div className="Profile-center">
          <ProfileCard />
          <PostSide/>
          
        </div>

        <RightSide />
    </div>
  )
}

export default Profile