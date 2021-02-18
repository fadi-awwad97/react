import React,{useState} from 'react';
import UserProjects from '../userProjects/userProjects';
import './userInterface.css';

export default function UserInterface() {

    const [projects, setProjects] = useState([
        {  "id":1,
           "projectName":"fraudMoniter",
           "task":[
               'set the header',
               'set the footer',
               'finish the table'
           ],
            "done":false  },
     
    {
    "id":2,
    "projectName":"fraudMonitering",
    "task":[
        'doo 123',
        'do the database',
        'do the forms'
    ],
    "done":false
    }
    ]);

    return (
        <div className="userInterface">
        
           <h1 className="title1">TASKS</h1> 
            <UserProjects projects={projects}/>
        
            
        </div>
    )
}
