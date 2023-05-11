import React, {useState, useEffect} from "react";
import MyFilms from "./MyFilms"
import { addFilm } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const Form = () => {
    const addedFilms = useSelector(state => state.films.films);
    const [films, setFilms] = useState(addedFilms)
    const [newFilm, setNewFilm] = useState('')
    const [err, setErr] = useState(false)
    const dispatch = useDispatch();
    

    useEffect( () => {setFilms(addedFilms)}, [addedFilms])

    const handleChange = (e) => {
        e.preventDefault();
        const inputFilm = e.target.value
        setNewFilm(inputFilm)
        setErr(false)
    }

    const handleSubmit = (e) => {
        if (newFilm === '') {
            setErr(true) 
        } else {
        let film = {
            title: newFilm,
            id: Date.now().toString(),
        }       
        dispatch(addFilm(film))}
    }
    
        return (
        <div className="films__container">
            <form className="films__form" onSubmit={e => e.preventDefault()}>
                <h3>Что я хочу посмотреть?</h3>
                <input
                        className="films__input input__input"
                        id="films-input"
                        name="name"
                        type="text"
                        onChange={e => handleChange(e)}
                />
                {err && <span className="input__err">Пожалуйста, введите название фильма</span>}
                <button className="submit-btn films__btn" type="submit" onClick={e =>
                    handleSubmit(e)}>Добавить</button>
            </form>
            <MyFilms myFilms={films}></MyFilms>
        </div>
        )
    }


export default Form