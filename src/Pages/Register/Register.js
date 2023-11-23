import React from "react";
import "./register.css";


function Register() {

    return (
        <div className="register-main">
            <div className="main-text"> Create an account</div>
            <div className="right-container">
                <div className="form-container">
                    <form>
                        <fieldset>
                            <legend>Full Name</legend>
                            <input type="text" name="name" id="name" />
                        </fieldset>
                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" name="email" id="email" />
                        </fieldset>
                        <fieldset>
                            <legend>Password</legend>
                            <input type="password" name="password" id="password" />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register