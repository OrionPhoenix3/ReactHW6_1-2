import React from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";

const FormikForm = () => {
    const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            login: "",
            pass: ""
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(3, "login mast be > 3 symbols")
                .max(10, "login mast be < 10 symbols")
                .required(),
            pass: Yup.string()
                .min(5, "password mast be > 5 symbols")
                .max(15, "password mast be < 15 symbols")
                .required(),
        }),
        onSubmit: ({login, pass}) => {
            alert(`
                You login: ${login} 
                You password: ${pass}
            `)
        }
    })
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="login" className="input__label">
                Login
                <input type="text"
                       className="input__input"
                       name="login"
                       placeholder="Login"
                       value={values.login}
                       onChange={handleChange}
                       onBlur={handleBlur}
                />
            </label>
            {touched.login && errors.login ? (<span className="input__err">{errors.login}</span>) : null}
            <label htmlFor="pass" className="input__label">
                Password
                <input type="text"
                       name="pass"
                       className="input__input"
                       placeholder="Password"
                       value={values.pass}
                       onChange={handleChange}
                       onBlur={handleBlur}
                />
            </label>
            {touched.pass && errors.pass ? (<span className="input__err">{errors.pass}</span>) : null}
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    )
}

export default FormikForm