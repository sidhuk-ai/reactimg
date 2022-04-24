import './App.css';
import React from 'react';
import ImageComponent from './components/ImageComponent';
import Navbar from './components/Navbar';
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar/>
      <div className="container">
      <input className="me-2 border-2" type="text" placeholder="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      </div>
      <Switch>
        <Route exact path='/' ><ImageComponent key='random' query='random'/></Route>
        <Route path='/car'><ImageComponent key='car' query='car'/></Route>
        <Route path='/cat'><ImageComponent key='cat' query='cat'/></Route>
      </Switch>
    </>
  );
}

export default App;
