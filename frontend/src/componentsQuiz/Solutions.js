import React, { useState } from "react";
import "../QApp.css";
import { useContext } from "react";
import { GameStateContext } from "../helperQuiz/Contexts";
import { Questions } from "../helperQuiz/Questions";
import Quiz from "./Quiz";

const SolutionPage = ({ question, questionNumber,}) => (
    <div className="SolutionPage">
        <div className="inlinediv"  >
            <h3>{questionNumber}. &nbsp;{question.prompt}</h3>
        </div>
        <button className={`qbutton ${question.answer === "optionA" ? "correct" : "wrong"}`}>
            {question.optionA} {question.answer === "optionA"}
        </button>
        <button className={`qbutton ${question.answer === "optionB" ? "correct" : "wrong"}`}>
            {question.optionB} {question.answer === "optionB"}
        </button>
        <button className={`qbutton ${question.answer === "optionC" ? "correct" : "wrong"}`}>
            {question.optionC} {question.answer === "optionC"}
        </button>
        <button className={`qbutton ${question.answer === "optionD" ? "correct" : "wrong"}`}>
            {question.optionD} {question.answer === "optionD"}
        </button>
    </div>
);

const Solutions = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const { setScore, setGameState } = useContext(GameStateContext);
    const totalQuestions = Questions.length;

    const goToNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const goToPrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    const goToResults = () => {
        setGameState("finished");
    };

    return (
        <div className="Solutions">
            <h1 className="qsol">Quiz Solutions</h1>
            <SolutionPage question={Questions[currentQuestionIndex]} questionNumber={currentQuestionIndex + 1}/>
            {currentQuestionIndex > 0 && (
                <button className="qbutton qprev qb200px" onClick={goToPrevQuestion}>
                    Previous
                </button>
            )}
                {(currentQuestionIndex === 0 || currentQuestionIndex === totalQuestions -1) && (
                    <button className="qbutton qrestart qb200px" onClick={goToResults}>
                        Back to Results
                    </button>
                )}

                {currentQuestionIndex < totalQuestions - 1 && (
                    <button className="qbutton qsnext qb200px" onClick={goToNextQuestion}>
                        Next
                    </button>
                )}
            <button className="qbutton qbackmenu" onClick={restartQuiz}>
                Back to Menu
            </button>
        </div>
    );
};

export default Solutions;


/*

--- for the Previous and Next buttons to be side by side ---
(also Back to Results and Next{on first Question} and Previous and Back to Results{on Last Question})

   return (
        <div className="Solutions">
            <h1 className="qsol">Quiz Solutions</h1>
            <SolutionPage question={Questions[currentQuestionIndex]} questionNumber={currentQuestionIndex + 1} />
            {currentQuestionIndex === 0 && (
                <div className="inlinediv">
                    <button className="qbutton qback" onClick={goToResults}>
                        Back to Results
                    </button>
                    <button className="qbutton qsnext" onClick={goToNextQuestion}>
                        Next
                    </button>
                </div>
            )}
            {currentQuestionIndex > 0 && currentQuestionIndex < totalQuestions - 1 && (
                <div className="inlinediv">
                    <button className="qbutton qprev" onClick={goToPrevQuestion}>
                        Previous
                    </button>
                    <button className="qbutton qsnext" onClick={goToNextQuestion}>
                        Next
                    </button>
                </div>
            )}
            {currentQuestionIndex === totalQuestions - 1 && (
                <div className="inlinediv">
                    <button className="qbutton qprev" onClick={goToPrevQuestion}>
                        Previous
                    </button>
                    <button className="qbutton qback" onClick={goToResults}>
                        Back to Results
                    </button>
                </div>
            )}
            <button className="qbutton qback qrestart" onClick={restartQuiz}>
                Back to Menu
            </button>
        </div>
    );

 */