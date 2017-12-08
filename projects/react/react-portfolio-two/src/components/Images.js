import React from "react";

export default function HomeImg() {
  const styles = {
  Img: {
    width: "100%",
    height: "100vh"
  }
}
return (
  <div className="banner-img">
    <img
      style={styles.Img}
      src={require("../images/home-page-img.jpeg")}
      alt="home"/>
  </div>
  )
}
