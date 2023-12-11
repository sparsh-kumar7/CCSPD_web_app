import React from "react";
import SignIn from "./googleSignIn/signIn";
import { useEffect, useState } from "react";
import { auth, provider } from "./googleSignIn/config";
import { signInWithPopup } from "firebase/auth";
import { getAuth, reauthenticateWithCredential } from "firebase/auth";
import { Link } from "react-router-dom";
import './header.css'
import axios from 'axios'; 

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showQuizButton, setShowQuizButton] = useState(false);

  const handleLoginClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("name", data.user.displayName);
      localStorage.setItem("email", data.user.email);
      const auth = getAuth();
      const user = auth.currentUser;
       if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      var myObj = {
        name: displayName,
        email: email
      }
      axios
        .post("http://localhost:8000/api/Users/",myObj)
        .then(() =>{
      setIsLoggedIn(true);
      setShowQuizButton(true);})
      }
    });
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setShowQuizButton(false);
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const email = localStorage.getItem("name");
    if (email) {
      setIsLoggedIn(true);
      setShowQuizButton(true);
    }
  }, []);

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("stickyclass")
        : setStickyClass("relative");
    }
  };

  return (
    <React.StrictMode>
      <div className="menubar">
        <div className="menubar-content">
          <nav
            className={`navbar navbar-default navbar-fixed-top ${stickyClass}`}
            id="headerFile"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a href="/" style={{ textDecoration: "none" }}>
                      <h3>C-CSPD</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul
                      className="nav navbar-nav"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <li>
                        <a href="/" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/#about">About</a>
                      </li>
                      <li>
                        <a href="/#announcements">Announcements</a>
                      </li>
                      <li>
                        <a href="/#resources">Resources</a>
                      </li>
                      <li>
                        <a href="/pastevents">Past&nbsp;Events</a>
                      </li>
                      <li>
                        <a href="/#contact">Contact</a>
                      </li>
                      <li>
                        <a href="/discuss">Discuss</a>
                      </li>
                      <div
                        className="logincss"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {isLoggedIn ? (
                          <li>
                            <button
                              className="Allbutton"
                              id="logoutbutt"
                              onClick={handleLogoutClick}
                            >
                              Logout
                            </button>
                            {showQuizButton && (
                              <Link to="/quizApp">
                                <button className="Allbutton">Quiz</button>
                              </Link>
                            )}
                          </li>
                        ) : (
                          <button
                            className="Allbutton"
                            style={{ marginLeft: "15px" }}
                            onClick={handleLoginClick}
                          >
                            Login
                          </button>
                        )}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </React.StrictMode>
  );
}
export default Header;
