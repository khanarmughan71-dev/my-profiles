"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

const bugQuestions = [
  {
    code: [
      { text: 'chai = "ready"' },
      { text: "if chai:" },
      { text: 'print("Ek Cut Chai!")', bug: true },
      { text: 'print("Full Kettle")' },
    ],
    options: [
      "Change chai to a list",
      "Indent the print line under the if",
      "Add a semicolon after if",
    ],
    answer: 1,
    explanation: "Bilkul! Python needs that line tucked inside the if block.",
  },
  {
    code: [
      { text: 'name = "Armughan"' },
      { text: 'greeting = "Hello, {name}!"', bug: true },
      { text: "print(greeting)" },
      { text: '# Python prints the braces as-is' },
    ],
    options: [
      "Rename name to self",
      "Put name inside a list",
      'Add f before the greeting string',
    ],
    answer: 2,
    explanation: "Spot on! The f tells Python to fill in the name.",
  },
  {
    code: [
      { text: "def make_chai(cups):" },
      { text: "return cups + 1", indent: 1 },
      { text: "cups = 2" },
      { text: "make_chai()", bug: true },
    ],
    options: [
      "Pass a cups value when calling make_chai",
      "Add a semicolon after return",
      "Rename cups to chai",
    ],
    answer: 0,
    explanation: "Correct! The function is waiting for its cups argument.",
  },
];

export default function IntroSection() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const question = bugQuestions[questionIndex];
  const hasAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.answer;
  const isComplete = questionIndex === bugQuestions.length - 1 && hasAnswered;

  const selectAnswer = (answerIndex) => {
    if (hasAnswered) {
      return;
    }

    setSelectedAnswer(answerIndex);

    if (answerIndex === question.answer) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const nextQuestion = () => {
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer(null);
  };

  const playAgain = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  };

  return (
    <Reveal as="section" className="intro-section">
      <div className="intro-copy">
        <p className="eyebrow">Waise, main Armughan hoon</p>

        <h2>
          Karachi se hoon.
          <br />
          <span>Code karta hoon.</span>
        </h2>

        <p className="intro-description">
          Zyada tar Python aur full-stack projects pe kaam karta hoon.
          Naya idea mile toh pehle chai, phir laptop khulta hai.
          Bug aa jaye? Thori debugging, thori chai — aur bas yehi hoon mein
        </p>

        <a href="#work" className="intro-link">
          Chalo, thori apki skills bhi dekhlein? <Icon name="arrowRight" size={16} />
        </a>
      </div>

      <div className="intro-code">
        <div className="intro-code-header">
          <span className="intro-code-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>spot_the_bug.py</span>
          <span className="intro-code-language">PYTHON</span>
        </div>

        <div className="intro-quiz-heading">
          <div>
            <h3 className="intro-quiz-title">
              Let&apos;s test your Python skills.
            </h3>
            <p className="intro-quiz-instruction">
              Find the bug in the highlighted line, then choose the fix.
            </p>
          </div>
          <span>
            {String(questionIndex + 1).padStart(2, "0")} /{" "}
            {String(bugQuestions.length).padStart(2, "0")}
          </span>
        </div>

        <div className="intro-code-lines" aria-label="Python quiz code">
          {question.code.map((line, index) => (
            <span
              className={`code-line${line.indent ? " code-indent" : ""}${line.bug ? " is-bug" : ""}`}
              key={`${questionIndex}-${index}`}
              aria-label={line.bug ? `Line ${index + 1}, find the mistake` : undefined}
            >
              <span className="intro-code-line-number">{index + 1}</span>
              {line.text}
            </span>
          ))}
        </div>

        <fieldset className="intro-quiz-options" disabled={hasAnswered}>
          <legend>Choose the correct fix</legend>
          {question.options.map((option, index) => {
            let answerState = "";

            if (hasAnswered && index === question.answer) {
              answerState = " is-correct";
            } else if (hasAnswered && index === selectedAnswer) {
              answerState = " is-incorrect";
            }

            return (
              <button
                className={`intro-quiz-option${answerState}`}
                type="button"
                key={option}
                aria-pressed={selectedAnswer === index}
                onClick={() => selectAnswer(index)}
              >
                <span className="intro-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </button>
            );
          })}
        </fieldset>

        <div className="intro-quiz-feedback" role="status" aria-live="polite">
          {hasAnswered ? (
            <>
              <span className={isCorrect ? "is-correct" : "is-incorrect"}>
                {isCorrect ? "Sahi jawab!" : "Close, boss!"}
              </span>
              <span>
                {isCorrect
                  ? question.explanation
                  : `Correct answer: ${question.options[question.answer]}. ${question.explanation}`}
              </span>
            </>
          ) : (
            <span>Noone is here to judge you, Go ahead! ☕</span>
          )}
        </div>

        {hasAnswered &&
          (isComplete ? (
            <div className="intro-quiz-complete">
              <span>
                Score: {score}/{bugQuestions.length} —{" "}
                {score === bugQuestions.length ? "Ustaad!" : "Nice try, boss!"}
              </span>
              <button type="button" onClick={playAgain}>
                Play again <span aria-hidden="true">↻</span>
              </button>
            </div>
          ) : (
            <button
              className="intro-quiz-next"
              type="button"
              onClick={nextQuestion}
            >
              Next bug <Icon name="arrowRight" size={15} />
            </button>
          ))}
      </div>
    </Reveal>
  );
}
