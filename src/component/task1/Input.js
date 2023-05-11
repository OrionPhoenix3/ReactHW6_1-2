import React from "react";

const Input = ({label, type, name, placeholder, value, onChange, err}) => {
    return (
        <div className="input">
            <label className="input__label" htmlFor={name}>
                {label}
                <input
                    className="input__input"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
            {err && <span className="input__err">{err}</span>}
        </div>
    )
}

export default Input