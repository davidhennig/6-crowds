import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bios from "./Components/Bios/Bios";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";
import Merch from "./Components/Merch";
import Multi from "./Components/Multi";
import Lottie from "./Components/Bios/Lottie";
import ChloeT from "./Components/Bios/ChloeT";
import Sophia from "./Components/Bios/Sophia";
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
          <Route exact path="/Merch" component={Merch} />
          <Route exact path="/Multi" component={Multi} />
          <Route exact path="/Lottie" component={Lottie} />
          <Route exact path="/ChloeT" component={ChloeT} />
          <Route exact path="/Sophia" component={Sophia} />
          <Route exact path="/Aggs" component={Aggs} />
          <Route exact path="/Frankie" component={Frankie} />
        </div>
      </div>
    </Router>
  );
}

export default App;
