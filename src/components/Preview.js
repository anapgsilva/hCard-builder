import React from 'react';

const Preview = (props) => {

  const userInfo = props.userInfo;

  return (
    <div className="preview">

      <h3>HCARD PREVIEW</h3>

      <div className="card">

        <div className="header">
          <h1>{userInfo['given name']} {userInfo.surname}</h1>
          {userInfo.imgURL !== undefined
            ?
            <div className="photo">
              <img src={userInfo.imgURL} alt="profile"/>
            </div>
            : ''
          }
        </div>

        <div className="info">
          <div>
            <label>EMAIL</label>
            {userInfo.email}
          </div>

          <div>
            <label>PHONE</label>
            {userInfo.phone}
          </div>

          <div>
            <label>ADDRESS</label>
            {userInfo['house name or #']} {userInfo.street}
          </div>

          <div>
            <label></label>
            {userInfo.suburb}
            {userInfo.suburb && userInfo.state ?
              ", "
              :
              ""
            }
            {userInfo.state}
          </div>

          <div>
            <label>POSTCODE <span>{userInfo.postcode}</span></label>

            <label>COUNTRY <span>{userInfo.country}</span></label>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Preview;
