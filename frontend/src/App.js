import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import SoftSkills from "./Pages/softskills";
import Communication from "./Pages/communication";
import PastEvents from "./Pages/PastEvents";
import discuss from "./Pages/discuss";
import QApp from "./QApp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/softskills" component={SoftSkills} />
            <Route exact path= "/communication" component={Communication} />
            <Route exact path= "/pastevents" component={PastEvents} />
            <Route exact path="/discuss" component={discuss} />
            {isLoggedIn ? (
              <Route exact path="/quizApp" component={QApp} />
            ) : (
              <Route exact path="/quizApp" component={Home} />
            )}
          </Switch>
        </ScrollToTop>
        {/* <Footer /> */}
      </Router>
    </React.StrictMode>
  );
}

export default App;