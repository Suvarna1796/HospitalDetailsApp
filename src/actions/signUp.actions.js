import axios from 'axios';
import { BASE_API_URL } from '../configuration';
var token;

//public user login
export default function loginPublicUser(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`${BASE_API_URL}user/login`,
            data
        );
        return request.then(
            response => dispatch(SuccessPublicLogin(response)),
            err => dispatch(ErrPublicLogin(err.response))
        );
    }
}
const SuccessPublicLogin = (data) => {
    console.log(data, "public alogin api response");
    token=data.data.token
    // token=data;
    const PUBLIC_LOGIN = 'PUBLIC_LOGIN';
    return {
        type: PUBLIC_LOGIN,
        data: data
    }
}
const ErrPublicLogin = (data) => {
    console.log(data);
    token=''
    const PUBLIC_LOGIN = 'PUBLIC_LOGIN';
    return {
        type: PUBLIC_LOGIN,
        data: data
    }
}


//Government user login
export function loginGovernmentUser(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`https://covid-government-dashboard.herokuapp.com/user/login`,
            data
        );
        return request.then(
            response => dispatch(
                SuccessGvtLogin(response)),
            err => dispatch(ErrGvtLogin(err.response))
        );
    }
}
const SuccessGvtLogin = (data) => {
    console.log(data, "login response sucess");
    token = data;
    const GOVERNMENT_LOGIN = 'GOVERNMENT_LOGIN';
    return {
        type: GOVERNMENT_LOGIN,
        data: data
    }
}
const ErrGvtLogin = (data) => {
    console.log(data);
    token = ''
    const GOVERNMENT_LOGIN = 'GOVERNMENT_LOGIN';
    return {
        type: GOVERNMENT_LOGIN,
        data: data
    }
}


//Public User Signup
export function signupPublicUser(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`${BASE_API_URL}user/signup`,
            data
        );
        return request.then(
            response => dispatch(SuccessPublicSignUp(response.data.message)),
            err => dispatch(ErrPublicSignUp(err.response.data.message.msgBody))
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
        const request = axios.post(`https://covid-government-dashboard.herokuapp.com/user/signup`,
            data
        );
        return request.then(
            response => dispatch(SuccessGovernmentSignUp(response.data.message)),
            err => dispatch(ErrGovernmentSignUp(err.response.data.message.msgBody))
        );
    }
}
const SuccessGovernmentSignUp = (data) => {
    console.log(data);
    const GOVERNMENT_SIGNUP = 'GOVERNMENT_SIGNUP';
    return {
        type: GOVERNMENT_SIGNUP,
        data: data
    }
}
const ErrGovernmentSignUp = (data) => {
    console.log(data);
    const GOVERNMENT_SIGNUP = 'GOVERNMENT_SIGNUP';
    return {
        type: GOVERNMENT_SIGNUP,
        data: data
    }
}


export function publicUsergetList() {
    console.log(token,"token")
    var promise = new Promise((dispatch) => {
        axios
            .get(`https://public12.herokuapp.com/stats`,
            { headers:  {
                'Content-Type':'application/json',
                    'Authorization': token
                }}
            )
            .then(function (result) {
                console.log(result);
                dispatch(SuccessPublicUser(result));
            })
            .catch(error => {
                console.log(error);
                dispatch(ErrPublicUser(error));
            });
    })
    // console.log(promise);
    return promise
}
const SuccessPublicUser = (data) => {
    console.log(data);
    const PUBLIC_USER_DATA = 'PUBLIC_USER_DATA';
    return {
        type: PUBLIC_USER_DATA,
        data: data
    }
}
const ErrPublicUser = (data) => {
    console.log(data);
    const PUBLIC_USER_DATA = 'PUBLIC_USER_DATA';
    return {
        type: PUBLIC_USER_DATA,
        data: data
    }
}

export function gvtUsergetList() {
    console.log(token,"token")
    var promise = new Promise((dispatch) => {
        axios
            .get(`https://covid-government-dashboard.herokuapp.com/stats`
            // { headers:  {
            //     'Content-Type':'application/json',
            //         'Authorization': token
            //     }}
            )
            .then(function (result) {
                console.log(result);
                dispatch(SuccessGvtUser(result));
            })
            .catch(error => {
                console.log(error);
                dispatch(ErrGvtUser(error));
            });
    })
    // console.log(promise);
    return promise
}
const SuccessGvtUser = (data) => {
    console.log(data);
    const GOVERNMENT_USER_DATA = 'GOVERNMENT_USER_DATA';
    return {
        type: GOVERNMENT_USER_DATA,
        data: data
    }
}
const ErrGvtUser = (data) => {
    console.log(data);
    const GOVERNMENT_USER_DATA = 'GOVERNMENT_USER_DATA';
    return {
        type: GOVERNMENT_USER_DATA,
        data: data
    }
}
