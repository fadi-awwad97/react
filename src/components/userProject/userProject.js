import React from 'react';
import './userPrject.css';

export default function Project(props) {

    return (
        // <div className="project">
        <div className="projectUser">
             <span>{props.projectName }</span>
                <p>done : {props.done}</p>
                
                {props.task.map(function(d, idx){
                return (<li key={idx}>{d}</li>)
  })}
                
        </div>
    )
}

