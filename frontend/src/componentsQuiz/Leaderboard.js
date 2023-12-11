import React from "react";
import "./Leaderboard.css";

const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard">
      <h2 className="header">Leaderboard</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-item">
            <span className="username">{user.username}</span>
            <span className="score">{user.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
