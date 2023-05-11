import React from "react";
import CinemaFilms from "./CinemaFilms";
import Form from "./Form";

const Redux = () => {
    return (
        <div className="films-flex">
            <Form/>
            <CinemaFilms/>
        </div>
    )
}

export default Redux