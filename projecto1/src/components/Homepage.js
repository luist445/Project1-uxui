import './Homepage.css';
import world from './img/onepieceworldseeker (1).jpg';
import React from 'react';
function Homepage() {
    return (
      <div className="content">
        <h1 style={{fontFamily: "Menlo", color: "red"}}>Welcome to One Piece!</h1>
        <img src = {world} className="homepagePic" alt="world" />
        <h3 style ={{fontFamily: "Roboto"}}>
          Welcome to the World of One Piece! In this world of pirates, you will have plenty of adventures!
          To ensure that you have a wonder experience here, we suggest visitors to experience the various foods and attractions.
          After a day of adventures, you can choose your place of rest.
          Do not hesitate and explore the beauty of the One Piece World! 
        </h3>
        </div>
    );
  }
  
  export default Homepage;