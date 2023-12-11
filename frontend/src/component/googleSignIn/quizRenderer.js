import React from "react";
import ReactDOM from "react-dom";
import QApp from "../../QApp"
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Footer";

const QuizRenderer = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Header />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={QApp} />
                    </Switch>
                </ScrollToTop>
                <Footer />
            </Router>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

export default QuizRenderer;
