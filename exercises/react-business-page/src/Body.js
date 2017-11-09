import React from "react";

function App() {
  return (
    <div>
    <nav className="navbar">
      <div className="box">
        Black Rifles Matter
      </div>
      <ul className="className">
        <li>
          <a href="home">
            Home
          </a>
        </li>
        <li>
          <a href="info">
            Info
          </a>
        </li>
        <li>
          <a href="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>


    <img className="img" src={require("./blackrifle.jpg")} alt="reefles"/>

    <div className="boxTwo">
      <footer className="foot">
        Foots
      </footer>
    </div>
  </div>
);
}

export default App;
