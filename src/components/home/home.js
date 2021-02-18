import React, { Component } from 'react';
import './homee1.css';
import Signup from '../signup/signup';
import Login from '../login/login';


export default class home1 extends Component {
    render() {
        return (
         
            <body>
            <div className="container">

          <div className="box-1">
            <h1>All of your projects, in one place.</h1>
            <p>FAAMY Brings your team together to plan, track, and collaborate on any project — all in one place</p>
            <p>Organize projects at a glance</p>
            <p>Collaborate with your team</p>
            <p>Track progress and goals</p>
          </div>


          <div className="box-2">
            <h1>"Project managers fall in love with FAAMY"</h1>
          </div>



          <div className="main-block-title">
          <div className="triangle-down"></div>
          <div className="title"> ADD YOUR COMPANY HERE</div>
          </div>

              

         <div className="side-block-title">
         <div className="heart"></div>
          <div className="title"> ALREADY REGISTERED :) </div>
          </div>



          



          <div className="side-block" >
            <Login />
        </div>
        <div className="main-block" >
        <Signup />
      </div>

            </div>
            </body>
          
        )
    }
}
