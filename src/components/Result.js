import React from "react";

const Result =({resultMessage,images,setResultMessage,play,score})=>{
  return (  
    <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>{resultMessage}</h3>

          {images
            .filter((image) => image.isAI)
            .map((image, index) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                key={index}
              >
                <img
                  src={`data:image/png;base64,${image.code}`}
                  key={index}
                  alt="winner"
                  style={{ width: "250px", margin: "10px" }}
                />
              </div>
            ))}

          <div
            onClick={() => {
              setResultMessage(null);
              play();
            }}
            // add a nice blue  background
            style={{
              borderRadius: "10px",
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {score > 0 ? "Next" : "Play again"}
          </div>
        </div>
      )}

export default Result;