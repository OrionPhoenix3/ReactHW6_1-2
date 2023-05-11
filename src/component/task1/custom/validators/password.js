export const passwordValidation = (password) => {
    const reg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!password.length) {
        return "Заполните поле";
    }else if (!reg.test(password)) {
        return "Длина пароля должна быть от 6-ти до 17-ти символов ";
    }else {
        return null
    }
}