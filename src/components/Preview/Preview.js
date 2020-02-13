import React from 'react';
import headshot from '../../headshot.png';
import './preview.css';

const Preview = (props) => {

  const userInfo = props.userInfo;

  return (
    <div className="preview">

      <h3>HCARD PREVIEW</h3>

      <div className="card">

        <div className="header">
          <h1>{userInfo['given name']} {userInfo.surname}</h1>

          <div className="photo">
            {userInfo.imgURL !== undefined
            ?
            <img src={userInfo.imgURL} alt="profile"/>
            :
            <img src={headshot} alt="avatar"/>
            }
          </div>
        </div>

        <div className="info">
          <div>
            <label>EMAIL</label>
            <span>{userInfo.email}</span>
          </div>

          <div>
            <label>PHONE</label>
            <span>{userInfo.phone}</span>
          </div>

          <div>
            <label>ADDRESS</label>
            <span>{userInfo['house name or #']} {userInfo.street}</span>
          </div>

          <div>
            <label></label>
            <span>{userInfo.suburb}
                {userInfo.suburb && userInfo.state ?
                  ", "
                  :
                  ""
                }
                {userInfo.state}</span>
          </div>

          <div className="postcode-country" >
            <label className="postcode">POSTCODE</label>
            <span>{userInfo.postcode}</span>

            <label className="country">COUNTRY</label>
            <span>{userInfo.country}</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Preview;
