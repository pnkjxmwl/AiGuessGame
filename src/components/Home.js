import React from "react";
import robot from "../assets/robot.png";
import DescriptionBox from "./DescriptionBox";


const Home= ({onplay})=>{
 return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px 10px",
      }}
    >
      <img
        src={robot}
        alt="logo"
        style={{
          width: "75px",
          borderRadius: "35px",
          margin: "8px 0",
        }}
      />

       <h1 style={{ margin: 0, padding: 0 }}>AI Guess Challenge</h1>
      <h3 style={{ margin: "15px", padding: 0 }}>The Game</h3> 
      

        <DescriptionBox/>
      
    <div  style={{display:"flex",alignContent:"center",justifyContent:"center" }}>
      <p style={{ margin: "5px 0", padding: "20px", textAlign: "center" }}>
        Are You Ready?
      </p> 
       <button
        style={{
          fontSize: "20px",
          margin: "10px 0",
          padding: "20px",
          color: "white",
          background:"black",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          const button = document.getElementById("play-button");
          button.style.scale = "1.1";
        }}
        onMouseLeave={() => {
          const button = document.getElementById("play-button");
          button.style.scale = "1";
        }}
        id="play-button"
        onClick={() => onplay()}
      >
        PLAY
      </button> 
      </div>
    </div>
  )} 
  
  export default  Home;