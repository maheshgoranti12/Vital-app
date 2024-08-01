import React from 'react';
import './Courses.css';
// import './Fonts.css';



export default function Courses({ isDisabled }) {
  if (isDisabled) {
    return null;
  }


  return (
    <>
      <div style={{ backgroundColor: '#3e7f91' }} >
        <div className='newConta'>
          <div className="left">
            <img className='proImg' src={require('../img/program.png')} />
          </div>

          <div className="right">
            <h2 className="hero_title" id='Vital'> EXPLORE  THE <br />
              INTERNALS <br />
              OF CODE </h2>
          </div>

        </div>
      </div>



    </>
  );
};     