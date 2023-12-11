import React, { useState } from "react";
import './QApp.css'
import "./App.css";
import Menu from "./componentsQuiz/Menu";
import Quiz from "./componentsQuiz/Quiz";
import EndScreen from "./componentsQuiz/EndScreen";
import { GameStateContext } from "./helperQuiz/Contexts";
import Solutions from "./componentsQuiz/Solutions";

import CSQuiz from "./compCSquiz/CSQuiz";
import CSEndScreen from "./compCSquiz/CSEndScreen";
import CSSolutions from "./compCSquiz/CSSolutions";

import SSQuiz from "./compSSquiz/SSQuiz";
import SSEndScreen from "./compSSquiz/SSEndScreen";
import SSSolutions from "./compSSquiz/SSSolutions";

import PDQuiz from "./compPDquiz/PDQuiz";
import PDEndScreen from "./compPDquiz/PDEndScreen";
import PDSolutions from "./compPDquiz/PDSolutions";

const QApp = () => {
    const [gameState, setGameState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div className="QApp">
            <GameStateContext.Provider
                value={{
                    gameState,
                    setGameState,
                    userName,
                    setUserName,
                    score,
                    setScore,
                }}
            >
                {gameState === "menu" && <Menu />}
                {gameState === "playing" && <Quiz />}
                {gameState === "finished" && <EndScreen />}
                {gameState === "solutions" && <Solutions />}

                {gameState === "playingss" && <SSQuiz />}
                {gameState === "finishedss" && <SSEndScreen />}
                {gameState === "solutionsss" && <SSSolutions />}

                {gameState === "playingcs" && <CSQuiz />}
                {gameState === "finishedcs" && <CSEndScreen />}
                {gameState === "solutionscs" && <CSSolutions />}

                {gameState === "playingpd" && <PDQuiz />}
                {gameState === "finishedpd" && <PDEndScreen />}
                {gameState === "solutionspd" && <PDSolutions />}

            </GameStateContext.Provider>
        </div>
    );
};

export default QApp;


