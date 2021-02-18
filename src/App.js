import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Login from './containers/Login';
import Home from './components/home/home';
import AdminPage from './components/adminPage/adminPage';
import UserPage from './components/userInterface/userInterface';
import ManagerPage from './components/projectMgInterface/projectMgInterface';
function App() {
    return (
  
      // <main>
               
          
              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/adminPg" component={AdminPage}  />
                  <Route path="/userPg" component={UserPage}  />
                  <Route path="/managerPg" component={ManagerPage}  />
                  
               
               
              </Switch>
       
  
     
    );
  }
  
  export default App;
