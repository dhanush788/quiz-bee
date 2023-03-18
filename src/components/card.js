import React, { useState }  from "react";
import  { useRef } from 'react';





function Card() {
    const questions= [
        {
          question:"What is the capital of France?",
          options:[
            "London",
            "Paris",
            "Madrid",
            "Berlin"
          ],
          correctAnswer:"Paris"
        }
        ,
      {
        question: "What is the largest planet in our solar system?",
        options: [
          "Mars",
          "Venus",
          "Jupiter",
          "Saturn"
        ],
        correctAnswer: "Jupiter"
      }
      ,
      {
        question: "Who invented the telephone?",
        options: [
          "Alexander Graham Bell",
          "Thomas Edison",
          "Nikola Tesla",
          "Benjamin Franklin"
        ],
        correctAnswer: "Alexander Graham Bell"
      }
    ]






    const [currentIndex, setCurrentIndex] = useState(0);
    const [color, setColor] = useState("grey");
    const count = useRef([]);
    const buttonstate = useRef([]);
    const [countOnes, setCount] = useState(0);
    const [Next, setvar] = useState("Next");
    const [isFinished, setIsFinished] = useState(false);
    const colour=useRef([]); 

    
    // previous button
    const handlePreClick = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); 
        if (buttonstate.current[currentIndex-1] === 0 || buttonstate.current[currentIndex-1] === null){
          setColor("grey");
        }
        else if(buttonstate.current[currentIndex-1] === 1){
          setColor("green");
        }
        else if(buttonstate.current[currentIndex-1] === 2){
          setColor("red");
        }

      }
      
      setvar("Next");
    };


    // next buttton
    const handleNextClick = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        if (buttonstate.current[currentIndex+1] === 0 || buttonstate.current[currentIndex+1] === undefined){
          setColor("grey");
        }
        else if(buttonstate.current[currentIndex+1] === 1){
          setColor("green");
        }
        else if(buttonstate.current[currentIndex+1] === 2){
          setColor("red");
        }
      }
      if (currentIndex === questions.length - 2){
        setvar("Finish");
      }
      if (currentIndex === questions.length - 1){
        setIsFinished(true);
        // alert or pop up here
      }
    };



    // question button

    const handleClick = (buttonName ,temp) => {
          if(count.current[currentIndex] === undefined){
              if(buttonName === questions[currentIndex].correctAnswer){
                setColor("green");
                buttonstate.current[currentIndex] = 1;
                colour.current[currentIndex] = "green";
                setCount(countOnes+1);
              }
              else {
                setColor("red");
                buttonstate.current[currentIndex] = 2;
                colour.current[currentIndex] = "red";
              } 

              count.current[currentIndex]=1;
          }
          console.log(colour);
    };



    return (

    <div>
      {!isFinished && (
            <div className="card"  >
              <div className="card-header"  style={{ backgroundColor: color }}>
                <h3>{currentIndex+1}.{questions[currentIndex].question}</h3>
              </div>
              <div className="card-body">
                <button onClick={() => handleClick(questions[currentIndex].options[0] ,0)}>{questions[currentIndex].options[0]}</button>
                <button onClick={() => handleClick(questions[currentIndex].options[1] ,1)}>{questions[currentIndex].options[1]}</button>
                <button onClick={() => handleClick(questions[currentIndex].options[2] ,2)}>{questions[currentIndex].options[2]}</button>
                <button onClick={() => handleClick(questions[currentIndex].options[3] ,3)}>{questions[currentIndex].options[3]}</button>
                <div>
                  <button onClick={handlePreClick}>Previous</button>
                  <button onClick={handleNextClick}>{Next}</button>
                </div>
                <div>
                  <p>Score={countOnes}</p>
                  <p>time=</p>
                </div>
              </div>
            </div>
      )}    

      {isFinished && (
        <div>
          {/* Display this div when isFinished is true */}
          <p>Score={countOnes}</p>
          <p>Time=</p>
          <div>
          {Object.keys(questions).map((prop) => (
            <div>
              <h3>
                <ul>
                  <li>{questions[prop].question}</li>
                </ul>
              </h3>
              <h4 style={{ backgroundColor: colour.current[prop] }}>Ans.{questions[prop].correctAnswer}</h4>
            </div>
          ))}
          </div>
         
        </div>
      )}

      
        
    </div>
  );
}

export default Card;


