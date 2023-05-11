import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import FilmCards from "./FilmCards"
import {fetchFilm} from "../../redux/actions";

const CinemaFilms = () => {
    const dispatch = useDispatch();
    const fetchedFilms = useSelector(state => state.films.fetchedFilms);
    const loading = useSelector(state => state.app.loading);
    const [err, setErr] = useState(false)

    const handleSubmit = () => {
        dispatch(fetchFilm())
        if (fetchedFilms === []) {
            setErr(true)
        }
    }

    if (loading) {
        return (
            <div className="loader">Loading...</div>
        )
    }

    if (!fetchedFilms.length) {
        return (
            <div className="cinema__container">
                <h3>Что интересного в Cinema City:</h3>
                <span className="cinema__span">Загрузите фильмы чтобы увидеть!</span>
                <button className="submit-btn cinema__btn" onClick={() => handleSubmit()}>Загрузить фильмы</button>
            </div>
        )
    }

    return (
        <div className="cinema__container">
            <h3>Что интересного в Cinema City:</h3>
            {err ?  <span>Ошибка при загрузке фильмов</span> : 
            fetchedFilms.map(fetchedFilm => <FilmCards key={fetchedFilm.id} film={fetchedFilm}/>)}
            <button className="submit-btn cinema__btn" onClick={() => dispatch(fetchFilm())}>Загрузить фильмы</button>
        </div>
    )
}

export default CinemaFilms