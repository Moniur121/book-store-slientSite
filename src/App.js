import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin/Admin'; 
import Order from './components/Order/Order';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import ManageBooks from './components/ManageBooks/ManageBooks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 // import Home from './components/Home/Home';
import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CheckOut from './components/CheckOut/CheckOut';
import AddForm from './components/Admin/AddForm';
export const UserContext = createContext();
function App() {
  const[loggedInUser,setLoggedInUser]= useState({});
  return (
    <div className="App">
        <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
           <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            
            <PrivateRoute path="/order">
            <Order></Order>
            
            </PrivateRoute>
              
            <PrivateRoute path="/admin">
            <Admin></Admin>
            <AddForm></AddForm>
            </PrivateRoute> 
            <Route path="/addBooks">
            <Admin></Admin>
            <AddForm></AddForm>
            </Route> 
            <Route path="/manageBooks">
            <Admin></Admin>
            <ManageBooks></ManageBooks>
            </Route>
            <PrivateRoute path="/checkout/:id">
                <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/details">
              <Details></Details>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/">
               <Home></Home>
            </Route>
          </Switch>
        </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
