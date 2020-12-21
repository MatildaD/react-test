import React from "react";
import "./Quiz.css";

import {
  GENERAL,
  QUOTES,
  NAMES_PLACES,

} from "./Questions";

export default function QuizSplashScreen({ onQuizRequest }) {
  return (
    <div className="quiz-splash">
      <div className="info-big-title">Quiz</div>
      <div className="quiz-splash-text">
        Take the quiz, why don't you? Choose from one of the categories below.
      </div>
      <div className="info-title">Quiz Categories</div>
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(GENERAL)}
      >
        General Quiz
      </button>
      
      <div className="quiz-category-buttons">
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(NAMES_PLACES)}
      >
        Names & Places
      </button>
      <button
        type="button"
        className="quiz-start-button"
        onClick={() => onQuizRequest(QUOTES)}
      >
        Quotes
      </button>

      </div>

    </div>
  );
}
