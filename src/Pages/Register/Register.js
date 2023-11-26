import React, { useState } from "react";
import "./register.css";


function Register() {

    const [visiblePass, setVisiblePass] = useState(true);
  
    function toggleVisiblePass () {
        setVisiblePass(!visiblePass);
    }

    return (
        <div className="register-main">
            <div className="main-text"> Create an account</div>
            <div className="right-container">
                <div className="form-container">
                <h2>Registration Form</h2>
                    <form>
                        <div className="fieldset">
                            <label> * Full Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="fieldset">
                            <label> * Email address</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="fieldset">
                            <label>Country</label>
                            <input type="country" name="country" id="country" />
                        </div>
                        <div className="fieldset">
                            <label> * Password</label>
                            <input type={ visiblePass ?  "password" : "text"} name="password" id="password" />
                            <i class={ visiblePass ? "bi bi-eye-slash" : "bi bi-eye"} onClick={toggleVisiblePass}></i>
                        </div>
                        <div className="pass-description">Password must have upper and lower case letters, at least 1 number, special character and be at least 8 characters  long.</div>
                        <button className="register-btn">Create account</button>
                    </form>
                    <div className="already-registered-text">Already have an account? <span className="signin-link"> Sign in</span></div>
                </div>
            </div>
        </div>
    )
}

export default Register