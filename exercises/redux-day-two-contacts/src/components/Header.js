import React from "react";

const styles = {
  header:{
    textAlign:"center",
    background: "#42275a",
    background: "linear-gradient(to right, #42275a, #734b6d)",
    color:"whitesmoke",
    height:"50px",
    border:"2px solid #eee"
  },
  heading:{
    margin:"5px"
  }
}

export default function Header(props) {
  return (
    <header style={styles.header}>
      <h1 style={styles.heading}>
        Contacts
      </h1>
    </header>
  )
}
