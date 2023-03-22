import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = ({updateState}) => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === "tlc") {
            updateState("on")
            navigate("/")

            localStorage.setItem("user", name)
        }
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return <div className="login">

        <h1>Welcome to our page! </h1>
        <h2>please set your Name and enter correct password </h2>
        <p>If you don't have password please contact: &nbsp; <a className="link" href="mailto:serwinkarol@gmail.com"> serwinkarol@gmail.com</a></p>
        <div className="login-form">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="login-form-inputWrap">
                <span>Name</span>
                <input type="text" name="Name" value={name} onChange={handleChangeName}/>
                </div>
                <div className="login-form-inputWrap">
                <span>Password</span>
                <input type="password" name="Password" value={password} onChange={handleChangePassword}/>
                </div>
                <button className="login-form-btn" type="submit" >Let's go</button>
            </form>
        </div>
    </div>
}
export {Login}