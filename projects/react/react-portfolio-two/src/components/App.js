import React from "react";
import Navigate from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";
import "../styles/Styles.css";

export default function App() {
    return (
      <div>
        <Navigate />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        <Footer />

      </div>
    )
  }
