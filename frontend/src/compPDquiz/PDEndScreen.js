import React, { useContext } from "react";
import { GameStateContext } from "../helperQuiz/Contexts";
import { PDQuestions} from "../helperQuiz/PDQuestions";
import "../QApp.css";

const PDEndScreen = () => {
    const { score, setScore, setGameState, userName } = useContext(
        GameStateContext
    );

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    const answers = () => {
        setGameState("solutionspd");
    };

    return (
        <div className="EndScreen">
            <div>
                <h1 className="quizendhead qb400px">Quiz Finished</h1>
                <h3 className="Qh3">{userName}</h3>
                <div class="qscore">
                    <h3 style={{ display: "inline-block", marginRight: "10px" }}>Score :</h3>
                    <h1 style={{ display: "inline-block", marginRight: "7px" }}>{score}</h1>
                    <h3 style={{ display: "inline-block" }}> / {PDQuestions.length}</h3>
                </div>
                <div>
                    <div style={{ display: 'block' }}>
                        <button className="qbutton viewanswers" onClick={answers}>
                            View Answers
                        </button>
                    </div>
                    <div style={{ display: 'block' }}>
                        <button className="qbutton qrestart qb200px" onClick={restartQuiz}>
                            Restart Quiz
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PDEndScreen;
