import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bios from "./Components/Bios/Bios";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";
import Shop from "./Components/Shop";
import Multi from "./Components/Multi";
import Lottie from "./Components/Bios/Lottie";
import ChloeT from "./Components/Bios/ChloeT";
import Sofia from "./Components/Bios/Sofia";
import Aggs from "./Components/Bios/Aggs";
import Frankie from "./Components/Bios/Frankie";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="GreyBG">
          <Route exact path="/Bios" component={Bios} />
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/Multi" component={Multi} />
          <Route exact path="/Lottie" component={Lottie} />
          <Route exact path="/ChloeT" component={ChloeT} />
          <Route exact path="/Sofia" component={Sofia} />
          <Route exact path="/Aggs" component={Aggs} />
          <Route exact path="/Frankie" component={Frankie} />
        </div>
      </div>
    </Router>
  );
}

export default App;
