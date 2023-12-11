import React, { useEffect, useState } from "react";
import '../../App.css'

import { Link } from "react-router-dom";

function LogIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showQuizButton, setShowQuizButton] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
        setShowQuizButton(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
        setShowQuizButton(false);
        localStorage.clear();
        window.location.reload();
    };

    useEffect(() => {
        const email = localStorage.getItem("email");
        if (email) {
            setIsLoggedIn(true);
            setShowQuizButton(true);
        }
    }, []);

    return (
        <div className="text-center wow fadeIn container row col-md-12 col-sm-12">
            {isLoggedIn && (
                <div className="button-group" style={{ whiteSpace: 'nowrap' }}>
                    <button className="Allbutton" id="logoutbutt" onClick={handleLogoutClick}>
                        Logout
                    </button>
                    {showQuizButton && (
                        <Link to="/quizApp">
                            <button className="Allbutton">
                                Quiz
                            </button>
                        </Link>
                    )}
                </div>
            )}
            {!isLoggedIn && (
                <button className="Allbutton" onClick={handleLoginClick}>
                    Login
                </button>
            )}
        </div>
    );
}

export default LogIn;