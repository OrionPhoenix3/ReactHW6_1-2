import React, {useState} from "react";
import Input from "../Input";
import {nameValidation} from "./validators/name";
import {loginValidation} from "./validators/login";
import {passwordValidation} from "./validators/password";
import {inputs} from "./inputs";

const Form = () => {
    const [state, setState] = useState({
        name: "",
        login: "",
        password: "",
    });

    const [err, setErr] = useState({
        name: "",
        login: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setState({...state, [e.target.name]: e.target.value})
    }

    const errCheck = () => {
        const {password, login, name} = state;
        let errName = nameValidation(name);
        let errLogin = loginValidation(login);
        let errPass = passwordValidation(password);

        if (errName != null || errLogin != null || errPass != null) {
            setErr({
                name: errName,
                login: errLogin,
                password: errPass
            })
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, login, password} = state;
        if (errCheck()) {
            setState({
                name: "",
                login: "",
                password: ""
            })
            setErr({
                name: "",
                login: "",
                password: ""
            })
            alert(`
                Name: ${name} 
                Login: ${login} 
                Pass: ${password}
            `)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {inputs.map(input =>
                <Input
                    key={input.id}
                    err={err[input.name]}
                    value={state[input.name]}
                    onChange={handleChange}
                    {...input}
                />)
            }
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    )
}

export default Form