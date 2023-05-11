export const nameValidation = (name) => {
    if (!name.length) {
        return "Заполните поле";
    } else if (name.length < 3) {
        return "Длина имени должна быть больше 2-х символов";
    }else {
        return null
    }
}