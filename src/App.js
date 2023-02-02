
import "./App.css";
import { useState } from "react";
import { getAIImage, getNormalImages } from "./components/api";
import { getTopic } from "./topic";
import Home from "./components/Home";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import Result from "./components/Result";

const App = () => {
     
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("");
  const [resultMessage, setResultMessage] = useState(null);
  const [realImgOpacity, setRealImgOpacity] = useState(0);
  const [aiImgOpacity, setAiImgOpacity] = useState(0);
  const [scoreBackgroundColor, setScoreBackgroundColor] = useState("#76A5BE");
  const [scoreScale, setScoreScale] = useState("1.0");
  const [showButton, setShowButton] = useState(true);
  const [score, setScore] = useState(0);


  const play = async () => {

    setShowButton(false);
    setLoading(true);
    setImages([]);
    setRealImgOpacity(0);
    setAiImgOpacity(0);
    const topic = getTopic();

    let normalImgs = await getNormalImages(topic);
    let aiImages = await getAIImage(topic);
    const imgs = createImgArray(normalImgs, aiImages);

    setTheme(topic.type);

    setImages(imgs);

    setTimeout(() => {
      setLoading(false);
      setRealImgOpacity(1);
      setAiImgOpacity(1);
    }, 200);
  };

  const createImgArray = (normalImages, aiImages) => {
    
    let randomIndex = Math.floor(Math.random() * aiImages.length);
    let randomAIImage = aiImages[randomIndex];

    let normalImgs = [];
    for (let i = 0; i < 5; i++) {
      let randomIndex = Math.floor(Math.random() * normalImages.length);
      let randomNormalImage = normalImages[randomIndex];

      if (!normalImgs.includes(randomNormalImage)) {
        normalImgs.push(randomNormalImage);
      }
    }
    const imageSmall = randomAIImage.srcSmall;
    let imgArr = normalImgs.map((img) => {
      return {
        url: img.urls.small,
        isAI: false,
      };
    });
    
    imgArr.push({
      url:imageSmall,
      isAI: true,
    });
    imgArr = imgArr.sort(() => Math.random() - 0.5);

    return imgArr;
  };


  const scored = () => {
    const scoreMessage = ["You got it!", "Correct!", "Nice!", "Good job!","Well Done"];
    const randomIndex = Math.floor(Math.random() * scoreMessage.length);
    const message = scoreMessage[randomIndex];
    setResultMessage(message);
    setScore(score + 1);
    setScoreScale("1.1");
    setTimeout(() => {
      setScoreScale("1.0");
    }, 500);
  };
  
  

  const lose = () => {
    const loseMessage = ["Wrong!", "Nope!", "Incorrect!"];
    const randomIndex = Math.floor(Math.random() * loseMessage.length);
    let message = loseMessage[randomIndex];
    message += " start over!!";
    setResultMessage(message);
    setScore(0);
    
    setScoreBackgroundColor("red");
    setScoreScale("0.9");
    setTimeout(() => {
      setScoreBackgroundColor("#76A5BE");
    }, 600);
  };

  return (

    <div>
      {showButton &&  <Home onplay={play}/>}
        
      
      {theme && <Header theme={theme} score={score} scoreBackgroundColor={scoreBackgroundColor} scoreScale={scoreScale}/> }
      {!showButton && !theme && <Header theme={"....."} score={0} scoreBackgroundColor={scoreBackgroundColor} scoreScale={scoreScale}/>}
        

      {!showButton && !resultMessage && (<ImageContainer loading={loading} images={images} scoreBackgroundColor={scoreBackgroundColor} scoreScale={scoreScale} aiImgOpacity={aiImgOpacity} realImgOpacity={realImgOpacity} setRealImgOpacity={setRealImgOpacity} scored={scored} lose={lose} /> )}
        
      {resultMessage && (<Result resultMessage= {resultMessage} images={images} setResultMessage={setResultMessage} play={play} score={score}/> )}
        
    </div>
      ) 
};

export default App;