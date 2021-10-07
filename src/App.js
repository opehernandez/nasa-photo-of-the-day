import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Nav from './Nav'


//App Pages
import HomePage from "./HomePage";
import ApodPage from "./ApodPage";
import RoversPage from "./RoversPage";
import GalleryPage from "./GalleryPage";



function App() {
  

return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={HomePage  } />
            <Route exact path="/apod" component={ApodPage}/>
            <Route exact path="/rovers" component={RoversPage}/>
            <Route exact path="/gallery" component={GalleryPage}/>
            <Redirect to="/404" />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
