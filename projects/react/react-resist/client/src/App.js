import React from 'react';
import Navigate from "./components/Navbar";
import Home from "./components/Home";
// import Info from "./components/Info";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Switch, Route} from "react-router-dom";
import "./styles/Styles.css";


export default function App() {
  return (
    <div>
      <Navigate />
        <Switch>
          <Route exact path="/home" component={Home} />
          {/* <Route path="/info" component={Info} /> */}
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      <Footer />
    </div>
  )
}
