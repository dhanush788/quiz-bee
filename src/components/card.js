import React, { useState }  from "react";
import  { useRef } from 'react';





function Card() {
  const questions = [
    {
      "question": "What is the capital city of Canada?",
      "options": [
        "Toronto",
        "Vancouver",
        "Ottawa",
        "Montreal"
      ],
      "correctAnswer": "Ottawa"
    },
    {
      "question": "What is the tallest mammal in the world?",
      "options": [
        "Elephant",
        "Giraffe",
        "Rhinoceros",
        "Hippopotamus"
      ],
      "correctAnswer": "Giraffe"
    },
    {
      "question": "What is the smallest country in the world?",
      "options": [
        "Monaco",
        "Vatican City",
        "Nauru",
        "Liechtenstein"
      ],
      "correctAnswer": "Vatican City"
    },
    {
      "question": "Who wrote the Harry Potter book series?",
      "options": [
        "J.K. Rowling",
        "Stephenie Meyer",
        "Suzanne Collins",
        "Veronica Roth"
      ],
      "correctAnswer": "J.K. Rowling"
    },
    {
      "question": "What is the largest country in South America by area?",
      "options": [
        "Brazil",
        "Argentina",
        "Colombia",
        "Peru"
      ],
      "correctAnswer": "Brazil"
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
                <button className="option" onClick={() => handleClick(questions[currentIndex].options[0] ,0)}>{questions[currentIndex].options[0]}</button>
                <button className="option" onClick={() => handleClick(questions[currentIndex].options[1] ,1)}>{questions[currentIndex].options[1]}</button>
                <button className="option" onClick={() => handleClick(questions[currentIndex].options[2] ,2)}>{questions[currentIndex].options[2]}</button>
                <button className="option" onClick={() => handleClick(questions[currentIndex].options[3] ,3)}>{questions[currentIndex].options[3]}</button>
                <div>
                  <button className="option" onClick={handlePreClick}>Previous</button>
                  <button className="option" onClick={handleNextClick}>{Next}</button>
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


