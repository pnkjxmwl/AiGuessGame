import React from "react";
import { InfinitySpin} from  'react-loader-spinner'


const ImageContainer=({loading,images,aiImgOpacity,realImgOpacity,setRealImgOpacity,scored,lose})=>{
 return (
 <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="images-container"
        >
          {loading && (
           <div style={
            { 
              marginLeft:"14px"

            }
           }> 
            <InfinitySpin
              width='200'
            color="#4fa94d"
            />
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {images.map((image, index) => (
                 
              <img
                src= { image.url.length===0 ? `data:image/png;base64,${image.code}` : image.url }
                key={index}
                alt="logo"
                style={{
                  margin: "10px",
                  cursor: "pointer",
                  width: "250px",
                  opacity: image.isAI ? aiImgOpacity : realImgOpacity,
                }}
                onMouseEnter={() => {
                  const img = document.getElementById(`img-${index}`);
                  img.style.scale = "1.1";
                }}
                onMouseLeave={() => {
                  const img = document.getElementById(`img-${index}`);
                  img.style.scale = "1";
                }}
                id={`img-${index}`}
                onClick={() => {
                  console.log("clicked");
                  console.log("image", image);
                  setRealImgOpacity(0);

                  setTimeout(() => {
                    if (image.isAI) scored();
                    else lose();
                  }, 1000);
                }}
              />
            ))}
          </div>
        </div>
      )}

export default ImageContainer;