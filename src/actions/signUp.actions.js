import axios from 'axios';
import { BASE_API_URL } from '../configuration';

//user login
export default function signupLogin(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`${BASE_API_URL}user/login`,
            data
        );
        return request.then(
            response => dispatch(SuccessPublicLogin(response.data)),
            err => dispatch(ErrPublicLogin(err.response.data.message))
        );
    }
}
const SuccessPublicLogin = (data) => {
    console.log(data);
    const PUBLIC_LOGIN = 'PUBLIC_LOGIN';
    return {
        type: PUBLIC_LOGIN,
        data: data
    }
}
const ErrPublicLogin = (data) => {
    console.log(data);
    const PUBLIC_LOGIN = 'PUBLIC_LOGIN';
    return {
        type: PUBLIC_LOGIN,
        data: data
    }
}


//Public User Signup
export  function signupPublicUser(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`${BASE_API_URL}user/signup`,
            data
        );
        return request.then(
            response => dispatch(SuccessPublicSignUp(response.data.message)),
            err => dispatch(ErrPublicSignUp(err.response.data.message))
        );
    }
}
const SuccessPublicSignUp = (data) => {
    console.log(data);
    const PUBLIC_SIGNUP = 'PUBLIC_SIGNUP';
    return {
        type: PUBLIC_SIGNUP,
        data: data
    }
}
const ErrPublicSignUp = (data) => {
    console.log(data);
    const PUBLIC_SIGNUP = 'PUBLIC_SIGNUP';
    return {
        type: PUBLIC_SIGNUP,
        data: data
    }
}
//government user signup
export function signupGovernment(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`${BASE_API_URL}user/signup`,
            data
        );
        return request.then(
            response => dispatch(SuccesssignupGovernment(response.data.message)),
            err => dispatch(ErrPublicsignupGovernment(err.response.data.message))
        );
    }
}
const SuccesssignupGovernment = (data) => {
    console.log(data);
    const PUBLIC_SIGNUP = 'PUBLIC_SIGNUP';
    return {
        type: PUBLIC_SIGNUP,
        data: data
    }
}
const ErrPublicsignupGovernment = (data) => {
    console.log(data);
    const PUBLIC_SIGNUP = 'PUBLIC_SIGNUP';
    return {
        type: PUBLIC_SIGNUP,
        data: data
    }
}
