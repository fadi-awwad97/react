import React from 'react';
import UserProject from '../userProject/userProject';
import './userProjects.css';

export default function Projects(props) {
    return (
        <div className="userProjects">
             {props.projects.map(c => <UserProject key={c.id} projectName={c.projectName} task={c.task} done={c.done} />)}
        </div>
    )
}