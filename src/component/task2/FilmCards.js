import React from "react";

const FilmCards = ({film}) => {
    return (
        <div className="cinema__card">
            <p>{film.title}: {film.day}, {film.time}</p>
        </div>
    )
}

export default FilmCards