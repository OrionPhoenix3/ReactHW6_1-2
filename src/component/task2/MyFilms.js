import React from "react";
import {useSelector} from "react-redux";
import Film from "./Film";

const MyFilms = () => {
    const addedFilms = useSelector(state => state.films.films);

    if (addedFilms.length === 0) {
        return <h4 className="films__subheading">Список пуст, увы</h4>
    }

    return (
        <div>
            <h4>Мой список фильмов к просмотру</h4>
            {addedFilms.map(film => <Film key={film.id} title={film.title}></Film>)}
        </div>
    )
}

export default MyFilms