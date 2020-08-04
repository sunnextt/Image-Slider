import React, {useState} from 'react';
import './App.css';
import images from './assets/photo-data.json';

function App() {
  const carouselStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    // overflow: "hidden",
  };
  const scrollStyle = {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
  };
  const buttonStyle = {
    position: "absolute",
    top: "calc(50% - (10vh / 2))",
    height: "10vh",
    width: "80px",
    border: "none",
    outline: "none",
    color: "#ffffff",
    fontWeight: "900",
    boxSizing: "border-box",
  };
  const indicatorStyle = {
    position: "absolute",
    top: "0",
    left: "calc(50% - (30px / 2))",
    width: "50px",
    height: "30px",
    backgroundColor: "#ffffff",
    color: "#282c34",
    boxShadow: "-1px 1px 3px 2px #282c34aa",
  };
  const [ imgCountState, setImgCountState ] = useState(0);
  let currentImage = images[imgCountState];
  return (
    <div className="App">
      <section style={carouselStyle}>
        <div className="Carousel-Indicator" style={indicatorStyle}>
          {imgCountState + 1}/{images.length}
        </div>
        <button className="Prev" style={buttonStyle} onClick={() => {
          if (imgCountState > 0) {
            setImgCountState(imgCountState - 1);
          }
        }}>{"<"}</button>
        <button className="Next" style={buttonStyle} onClick={() => {
          if (imgCountState !== images.length - 1) {
            setImgCountState(imgCountState + 1);
          }
        }}>{">"}</button>
        <div className="Img-Scroll" style={scrollStyle}>
          <img src={currentImage.src} alt={currentImage.description} title={currentImage.title} style={imgStyle} />
        </div>
      </section>
    </div>
  );
}

export default App;
