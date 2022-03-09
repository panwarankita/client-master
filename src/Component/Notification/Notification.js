/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './notification.css';
import Nav_side from '../Nav_side';

export default function Notification() {
    return (
      <div>
          <Nav_side/>
        <div id="w">
        <div id="contentt">
            <div id='notii'>
            <h2 className='notificationn'>Notification</h2>
            </div>
     
        <div className="notifyy successbox">
        <h2>From Company</h2>
        <p>Interview Request <br></br> 8min</p>
      </div>
      
      <div class="errorboxx">
        <h2>From Company</h2>
    
        <p>Interview Request<br></br> One Day Ago</p>
        <p></p>
      </div>
      
      
    </div>
  </div>

        </div>
    )
}
