import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Calorie Counting", "Virtual Recipe Book", "BMI Calculator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="img-container">
        <img src="assets/intro.png" alt="" />
      </div>
      <div className="inner-container">
        <div className="wrapper">
          <h2>Welcome to your new</h2>
          <h1>Food Diary</h1>
          <h3>
            This includes <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
