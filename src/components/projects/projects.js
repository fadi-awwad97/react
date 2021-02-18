import React from 'react';
import Project from '../project/project';
import './projects.css';

export default function projects(props) {
    return (
        <div className="projects">
             {props.projects.map(c => <Project key={c.id} name={c.name} deadline={c.deadline} team={c.team} />)}
        </div>
    )
}
