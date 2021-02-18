import React, { useState } from "react";
import Projects from '../projects/projects';
import './adminPage.css';
// import Modal from '../modal/modal';
import AddUser from '../addUser/addUser';
import Table from '../userTable/userTable';


export default function AdminPage() {
    
    // const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([
        {  "id":1,
           "name":"hypci",
           "deadline":30,
           "team": [
                    "malaz ,back",
                    "mhmd ,back",
                    "abir ,APIs"
                ]
    },
    {   "id":2,
        "name":"freesto",
        "deadline":10,
        "team": [
                "fadi ,frontend",
                "abir ,backend",
                "ali ,database"]
    }
    ]);

    // function OpenModal() {
    //     setShowModal(true);
        
    // };
    // function hideModal() {
    //     setShowModal(false);
        
    // };

   
    return (
        <div>
        
        <div className="projects"> 
           <h1 className="head">Projects are listed HERE</h1> 
            <Projects projects={projects}/>
        </div>

        <div className="AddUser">
            
        <AddUser />
        </div>

        <div>
            <Table />
        </div>

        </div>
    )
}
