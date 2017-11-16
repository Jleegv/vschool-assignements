import React from "react";

function Img(){
  const styles = {
    Img: {
      width: "100%"
    }
  }
  return (
    <img style={styles.Img} src={require("./images/ar-main.jpeg")} alt="reefles" />
  )
}
export default Img;
