import "../QApp.css";
import { useContext, useState, useEffect } from "react";
import { GameStateContext } from "../helperQuiz/Contexts";
import Quiz from "./Quiz";
import PDQuiz from "../compPDquiz/PDQuiz";
import CSQuiz from "../compCSquiz/CSQuiz";
import SSQuiz from "../compSSquiz/SSQuiz";
import Leaderboard from "./Leaderboard";
import axios from "axios";

function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );
    const [users,setUsers] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");

    const handleStartQuiz = () => {
        if (selectedTopic === "cs") {
            setGameState("playingcs");
        } else if (selectedTopic === "pd") {
            setGameState("playingpd");
        } else if (selectedTopic === "ss") {
            setGameState("playingss");
        } else {
            setGameState("playing");
        }
    };

    const handleSelectTopic = (event) => {
        setSelectedTopic(event.target.value);
    };
    function refreshlist() {
        axios
            .get("http://localhost:8000/api/Leaderboard/")
            .then(res => {
              const result = Object.values(res)
              setUsers([...result[0]])
            })
            .catch(error => console.log(error));
          }
    useEffect(() => {
        refreshlist();
    }, []);
    return (
        <div>
        <div className="Menu">
            <div>
                <h1 id="quizhead">Quiz App</h1>
                <div>
                    <label className="qmenulabel">Choose a Topic :</label>
                    <select onChange={handleSelectTopic}>
                        <option value="">General</option>
                        <option value="cs">Communication Skills</option>
                        <option value="pd">Personality Development</option>
                        <option value="ss">Soft Skills</option>
                    </select>
                    <br />
                    <button className="qbutton" onClick={handleStartQuiz}>
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
        <Leaderboard users={users}/>
        </div>
    );
}


export default Menu;
