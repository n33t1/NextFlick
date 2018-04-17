import { REGISTER_USER, LOGIN_USER  } from './actionTypes';

export const registerUser = (userName, password) => {
    return {
        type: REGISTER_USER,
        userName: userName,
        password: password
    };
};

export const loginUser = (userName, password) => {
    return {
        type: LOGIN_USER,
        userName: userName,
        password: password
    };
};