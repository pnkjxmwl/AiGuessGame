import React from "react"
import robot from "../assets/robot.png";


const Header=({theme,score,scoreBackgroundColor,scoreScale})=>{
 return (   
 <div 
          style={{
           
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            Theme
            <div
              style={{
                backgroundColor: "#181D20",
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                margin: "5px",
              }}
            >
              {theme}
            </div>
          </div>
          <img
          alignItems="center"
            src={robot}
            alt="logo"
            style={{  width: "75px", borderRadius: "35px", marginRight:"40px", margin: "20px 0" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: scoreBackgroundColor,
                color: "white",
                padding: "10px 20px",
                borderRadius: "10px",
                margin: "5px",
                scale: scoreScale,
              }}
            >
              {score}
            </div>
            Score
          </div>
        </div>
      )}

export default Header;