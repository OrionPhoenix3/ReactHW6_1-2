export const loginValidation = (login) => {
    const regShort = /^[\w]{0,5}$/
    const regLong = /^[\w]{6,15}$/
    if (!login.length) {
        return "Заполните поле";
    }else if (regShort.test(login)) {
        return "Длина логина должна быть больше 5-ти символов";
    }else if(!regLong.test(login)){
        return "Длина логина должна быть меньше 16-ти символов";
    }else {
        return null
    }
}