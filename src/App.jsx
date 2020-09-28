import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon} from '@material-ui/core';
import UserTable from './components/UserTable'
import { v1 as uuidv4 } from 'uuid'
import AddUserForm from './components/AddUserForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {

  const usersData = [
    { id: uuidv4(), name: 'tannia', username: 'perromonchis'},
    { id: uuidv4(), name: 'Craig', username: 'lel'},
    { id: uuidv4(), name: 'Been', username: 'cronchis'},
  ] 
  //state

  const [users, setUsers] = useState(usersData);

  //  Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, user
    ])
  }

  return (
    <Router>

      <div>
        <DeleteIcon color="primary" />
        <Icon>
          start
        </Icon>
      </div>

      <Button color="secondary">Este es</Button>
      <Button variant="contained" color="primary" href="https:www.google.com" size="large">
        lel
      </Button>
      <Switch>

        <Route path="/" exact>
          <div className="jumbotron">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4"></hr>
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </Route>

        <Route path="/Insertar">
          <div className="container">
            <AddUserForm addUser = { addUser }/>
          </div>
        </Route>

        <Route path="/Nosotros" >
          <UserTable users={users} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
