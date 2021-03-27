import styles from "./Styles/App.module.css";
import api from "./api/";
import React, { useState, useEffect } from "react";
import Section from "./components/Section";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [status, setStatus] = useState("loading");
  const [points, setPoints] = useState(0);
  const [color, setColor] = useState("");
  const question = questions[currentQuestion];

  const pointFunc = (answer) => {
    if (answer === question.correct_answer) {
      setColor(answer);
      switch (question.type) {
        case "multiple": {
          setPoints(points + 10);
          break;
        }
        case "boolean": {
          setPoints(points + 5);
          break;
        }
        default:
          return;
      }
    }
    if (currentQuestion + 1 === questions.length) {
      setStatus("finished");
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    api.call().then((question) => {
      setQuestions(question);
      setStatus("pending");
    });
  }, []);

  console.log(status);
  if (status === "loading") return <span>Loading...</span>;
  if (status === "finished") {
    return (
      <div className={styles.playAgain}>
        <span>Your points earned: ${points}</span>
        <button onClick={() => window.location.reload()}>Play again</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Section
        category={question.category}
        difficulty={question.difficulty}
        questio={question.question}
        num={`${currentQuestion + 1} / ${questions.length} `}
      ></Section>
      {[...question.incorrect_answers, question.correct_answer]
        .sort((a, b) => a.localeCompare(b))
        .map((answer) => (
          <button
            key={answer}
            style={{
              backgroundColor: color === answer ? "green" : "",
            }}
            onClick={() => pointFunc(answer)}
          >
            {answer}
          </button>
        ))}
    </div>
  );
}

export default App;
