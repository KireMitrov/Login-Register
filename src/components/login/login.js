import React, { useContext, useState } from "react"
import "./login.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"


function Login() {

    const {showLogin, setShowLogin} = useContext(AuthContext);  
    
    return (
        <div className={ showLogin ? "show" : "hidden"}>
            <div className="background"></div>
            <div className="login-container">
                <div className="login-title">
                    <button className="close-btn"  onClick={() => setShowLogin(false)}>
                        <svg viewBox="0 0 28 28" class="close-button"><path d="M5.522 5.48c.14-.141.308-.252.5-.333.194-.08.393-.128.596-.142.204-.014.403.009.596.068.193.06.36.16.5.3l6.28 6.28 6.273-6.273c.14-.14.31-.242.506-.306.197-.063.399-.086.606-.068.207.017.411.07.611.158.2.087.378.209.532.363.14.14.251.307.332.5.08.194.128.392.142.596a1.59 1.59 0 01-.074.6 1.242 1.242 0 01-.305.507l-6.273 6.273 6.269 6.269c.14.14.242.309.305.506.063.196.088.397.074.6a1.868 1.868 0 01-.143.596 1.54 1.54 0 01-.332.5c-.155.155-.33.275-.527.36a1.838 1.838 0 01-.6.147 1.491 1.491 0 01-.596-.079 1.295 1.295 0 01-.5-.31l-6.27-6.27-6.305 6.305c-.14.14-.307.24-.5.3s-.392.083-.596.069a1.866 1.866 0 01-.595-.142 1.538 1.538 0 01-.5-.332 1.726 1.726 0 01-.364-.532c-.088-.2-.14-.404-.158-.611a1.568 1.568 0 01.063-.601c.06-.193.16-.36.3-.5l6.306-6.305-6.28-6.28a1.249 1.249 0 01-.306-.495 1.518 1.518 0 01-.073-.59c.014-.204.063-.405.148-.601.084-.197.203-.373.358-.527z" fill-rule="evenodd"></path></svg>
                    </button>
                    <div className="login-text">
                        Log in
                    </div>
                </div>
                <div className="credentials-container">
                    <div className="inputs-wrapper">
                        <label>Email</label>
                        <input type="email" name="email" id="email"  required/>
                    </div>
                    <div className="inputs-wrapper">
                        <label>Password</label>
                        <input type="text" name="password" id="password"  required/>
                    </div>
                </div>
                <button className="login-btn">
                    Log in
                </button>
                <div className="register">
                    <p className="register-text">No account yet?</p>
                    <Link to="register" className="signup-link" onClick={() => setShowLogin(false)} >Sign up for free</Link>
                </div>
            </div>
        </div>
    )
}

export default Login

