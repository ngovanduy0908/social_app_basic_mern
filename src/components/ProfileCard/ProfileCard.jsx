import React from 'react';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" className="img-one" />
        <img src={Profile} alt="" className="img-two" />
      </div>

      <div className="ProfileName">
        <span>NgoVanDuy DJ</span>
        <span>Fullstack Developers</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1000</span>
            <span>followers</span>
          </div>

          <div className="vl"></div>

          <div className="follow">
            <span>1</span>
            <span>following</span>
          </div>
        </div>

        <hr />
      </div>

      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
