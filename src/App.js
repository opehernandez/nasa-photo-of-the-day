import React, {useEffect, useState} from "react";
import "./App.css";
import apis from './const'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import Nav from './Nav'

//App Pages
import HomePage from "./HomePage";
import ApodPage from "./ApodPage";
import RoversPage from "./RoversPage";
import GalleryPage from "./GalleryPage";

function App() {
return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/apod" component={ApodPage}/>
          <Route exact path="/rovers" component={RoversPage}/>
          <Route exact path="/gallery" component={GalleryPage}/>
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
