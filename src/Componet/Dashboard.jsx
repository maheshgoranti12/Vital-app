import React from 'react';
import { Link } from 'react-router-dom';
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessageDots } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

export default function Dashboard() {
  return (
    <>
      <div className="main">
        <div className="left">
          <div className="LoGo">
            <img className='img1' src={require('../img/logo.png')} alt="Logo" />
            <img className='img2' src={require('../img/Vitalcode.png')} alt="Logo" />
          </div>
          <div className="mid">
            <Link className='link'><h5>Dashboard</h5></Link>
            <Link className='link'><h5>Quizes</h5></Link>
            <Link className='link'><h5>Setting</h5></Link>
            <Link className='link'><h5>Calender</h5></Link>
            <Link className='link'><h5>Transaction</h5></Link>
          </div>

          <div className="Profile">
            <div className="circle"></div>
          </div>

          <div className="logout">
            <Link className='link'><h6>Log out</h6></Link>
          </div>
        </div>
        <div className="right">
          <div className="navbar1">
            <div className="nav">
              <h1>Dashboard</h1>
              <p>14 aug 2023</p>
            </div>
            <div className="mn-icons">
              <div className='notification'>
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className='message'>
                <FontAwesomeIcon icon={faCommentDots} />
              </div>
            </div>
            <div className="Profile1">
              <div className="circle1"></div>
              <p>name</p>
            </div>
          </div>
          <div className="boxrow">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </div>
    </>
  );
}
