import React from 'react';
import './project.css';

export default function project(props) {
    // console.log(props.team)
    return (
        <div className="project">
             <span>{props.name }</span>
                <p>deadline : {props.deadline}</p>
                
                {props.team.map(function(d, idx){
                return (<li key={idx}>{d}</li>)
  })}
                
        </div>
    )
}

