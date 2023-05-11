import React from "react";
import {useForm} from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
    login: Yup.string()
        .min(3, "login must be > 3 symbols")
        .max(10, "login must be < 10 symbols")
        .required(),
    pass: Yup.string()
        .min(5, "password must be > 5 symbols")
        .max(15, "password must be < 15 symbols")
        .required(),
})

const ReactHookForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({resolver: yupResolver(schema)})
    const onSubmit = ({login, pass}) => {
        alert(`
                You login: ${login} 
                You password: ${pass}
            `)
    }
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="login" className="input__label">
                Login
                <input type="text"
                       className="input__input"
                       {...register("login")}
                       placeholder="Login"
                />
            </label>
            {errors.login && <span className="input__err">{errors.login.message}</span>}
            <label htmlFor="pass" className="input__label">
                Password
                <input type="text"
                       {...register("pass")}
                       className="input__input"
                       placeholder="Password"
                />
            </label>
            {errors.pass && <span className="input__err">{errors.pass.message}</span>}
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    )
}

export default ReactHookForm