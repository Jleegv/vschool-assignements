import React, {Component} from "react";
import Navigate from "./Navbar";
import Footer from "./Footer";
import BannerTxt from "./Banner_txt";

class App extends Component {
  render(){
    return(
      <div>
        <Navigate />
        <div className="banner">
          <BannerTxt />
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;
