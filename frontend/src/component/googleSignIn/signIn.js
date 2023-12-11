import React, {useEffect, useState} from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import LogIn from "./logIn";

function SignIn() {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    return (
        <div className="text-center wow fadeIn container row col-md-12 col-sm-12 ">
            {value ? <LogIn/> :
                <button className="Allbutton" onClick={handleClick}>Login</button>
            }
        </div>
    )
}
export default SignIn;
