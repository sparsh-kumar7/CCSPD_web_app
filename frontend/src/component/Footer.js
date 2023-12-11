import React from "react";
//import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
//import 'firebaseui/dist/firebaseui.css';
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="copyright">
          <h3>&copy; {currYear}, Developed and maintained by: <a href="mailto:20uec008@lnmiit.ac.in"> Aditya Singh</a> and <a href="mailto:20uec133@lnmiit.ac.in"> Sparsh Kumar</a></h3>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
