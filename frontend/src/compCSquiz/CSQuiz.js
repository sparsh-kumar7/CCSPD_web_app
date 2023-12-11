import { useState, useContext } from "react";
import { CSQuestions as Questions} from "../helperQuiz/CSQuestions";
import { GameStateContext } from "../helperQuiz/Contexts";
import "../QApp.css";
import Quiz from "../componentsQuiz/Quiz";
import axios from "axios";
function CSQuiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const {score, setScore, gameState, setGameState } = useContext(GameStateContext);

    const chooseOption = (option) => {
        setOptionChosen(option);
    };

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }

        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen("");
    };

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    const finishQuiz = () => {
        var newCount = score;
        if (Questions[currentQuestion].answer === optionChosen) {
            newCount = score + 1;
            setScore(newCount);
        }
        var myObj = {
            username: localStorage.getItem("name"),
            quiz_name: "CS",
            points: newCount
        }
        axios
        .post("http://localhost:8000/api/Leaderboard/",myObj)
        .then(() => {
        setGameState("finishedcs");
        })
    };

    return (
        <div className="Quiz">
            <div className="qHeadandScore">
                <h2>
                    {currentQuestion + 1} / {Questions.length}
                </h2>
                <h2 className="questionsAhead">{Questions[currentQuestion].prompt}</h2>
            </div>
            <div className="questions">
                <button
                    className={`qbutton ${optionChosen === "optionA" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionA");
                    }}
                >
                    {Questions[currentQuestion].optionA}
                </button>
                <button
                    className={`qbutton ${optionChosen === "optionB" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionB");
                    }}
                >
                    {Questions[currentQuestion].optionB}
                </button>
                <button
                    className={`qbutton ${optionChosen === "optionC" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionC");
                    }}
                >
                    {Questions[currentQuestion].optionC}
                </button>
                <button
                    className={`qbutton ${optionChosen === "optionD" ? "selected" : ""}`}
                    onClick={() => {
                        chooseOption("optionD");
                    }}
                >
                    {Questions[currentQuestion].optionD}
                </button>
            </div>

            {currentQuestion === Questions.length - 1 ? (
                <button className="qbutton qfinish" onClick={finishQuiz}>
                    Finish Quiz
                </button>
            ) : (
                <button className="qbutton qnext qb200px nextQuestion" onClick={nextQuestion}>
                    Next Question
                </button>
            )}

            <button className="qbutton qrestart" onClick={restartQuiz}>
                Restart Quiz
            </button>

        </div>
    );
}

export default CSQuiz;