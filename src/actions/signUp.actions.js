import axios from 'axios';
import { BASE_API_URL } from '../configuration';
var token;
var userID;

// let cookie = Cookies.load('access_token')
//public user login
export default function loginPublicUser(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`${BASE_API_URL}user/login`,
            // const request = axios.post(`http://localhost:3001/user/login`,

            data,
        );
        return request.then(
            response => dispatch(SuccessPublicLogin(response)),
            err => dispatch(ErrPublicLogin(err.response))
        );
    }
}
const SuccessPublicLogin = (data) => {
    console.log(data, "public alogin api response");
    token = data.data.token;
    console.log('token: ', token);
    userID = data.data.objectid;
    var info = data.data.user.username;
    // Cookies.save('access_token', token,  {withCredentials: true},{path:'/'})
    sessionStorage.setItem('userInfo', info);

    localStorage.setItem('token', token)
    localStorage.setItem('userID', userID)
    // token=data;
    const PUBLIC_LOGIN = 'PUBLIC_LOGIN';
    return {
        type: PUBLIC_LOGIN,
        data: data
    }
}
const ErrPublicLogin = (data) => {
    console.log(data);
    token = ''
    const PUBLIC_LOGIN = 'PUBLIC_LOGIN';
    return {
        type: PUBLIC_LOGIN,
        data: data
    }
}
//Hospital user login
export function loginHospitalUser(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`https://covid-dash-combined.herokuapp.com/hospital/user/login`,
            data
        );
        return request.then(
            response => dispatch(
                SuccessHspLogin(response)),
            err => dispatch(ErrHspLogin(err.response))
        );
    }
}
const SuccessHspLogin = (data) => {
    console.log(data, "login response sucess");
    token = data;
    const HOSPITAL_LOGIN = 'HOSPITAL_LOGIN';
    return {
        type: HOSPITAL_LOGIN,
        data: data
    }
}
const ErrHspLogin = (data) => {
    console.log(data);
    token = ''
    const HOSPITAL_LOGIN = 'HOSPITAL_LOGIN';
    return {
        type: HOSPITAL_LOGIN,
        data: data
    }
}

//Public User Signup
export function signupPublic(data) {
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
//hospital user signup
export function signupHospital(data) {
    console.log(data);
    return function action(dispatch) {
        const request = axios.post(`https://covid-dash-combined.herokuapp.com/hospital/user/signup`,
            data
        );
        return request.then(
            response => dispatch(SuccessHospitalSignUp(response.data.message)),
            err => dispatch(ErrHospitalSignUp(err.response.data.message.msgBody))
        );
    }
}
const SuccessHospitalSignUp = (data) => {
    console.log(data);
    const HOSPITAL_SIGNUP = 'HOSPITAL_SIGNUP';
    return {
        type: HOSPITAL_SIGNUP,
        data: data
    }
}
const ErrHospitalSignUp = (data) => {
    console.log(data);
    const HOSPITAL_SIGNUP = 'HOSPITAL_SIGNUP';
    return {
        type: HOSPITAL_SIGNUP,
        data: data
    }
}
//axios.defaults.withCredentials = true;
//public user details

// const instance = axios.create({
//     withCredentials: true
// })
// const axiosConfig = {
//     headers: {
//         'content-Type': 'application/json',
//         "Accept": "/",
//         "Cache-Control": "no-cache",
//         "Cookie": document.cookie
//     },
//     credentials: "same-origin"
// };
// axios.defaults.withCredentials = true;
export function publicUsergetList() {
    var publicUserid = localStorage.getItem('userID');
    var publicToken = localStorage.getItem('token');
    console.log('publicToken: ', publicToken);
    // sessionStorage.setItem('test', 1);
    // var cookie_value = 'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJOb29iQ29kZXIiLCJzdWIiOiI2MGQyZDQyMDgzNDYzMDAwMTVjMmRjZjMiLCJpYXQiOjE2MjQ0NDAwMDksImV4cCI6MTYyNDQ0MzYwOX0.EWDkF5VHjXlrCgvH5v8y9fCNC0kIIvs2Sq8s41qq9tA; Path=/; SameSite=Strict'
    // console.log('cookie_value: ', cookie_value);
    // console.log('publicToken: ', publicToken);
    //expressApp.use(cors({ credentials: true, origin: "http://localhost:3000" }));
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET','https://public12.herokuapp.com/stats/',true)
    // xhr.withCredentials = true;
    // xhr.send(null);
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJOb29iQ29kZXIiLCJzdWIiOiI2MGQyZDQyMDgzNDYzMDAwMTVjMmRjZjMiLCJpYXQiOjE2MjQ1MDkwNjMsImV4cCI6MTYyNDUxMjY2M30.59qZkOzgjDQnyvTpk6YF1reO4l1I-if7OdDrMzKltl0
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJOb29iQ29kZXIiLCJzdWIiOiI2MGQyZDQyMDgzNDYzMDAwMTVjMmRjZjMiLCJpYXQiOjE2MjQ1MDkwNjMsImV4cCI6MTYyNDUxMjY2M30.59qZkOzgjDQnyvTpk6YF1reO4l1I-if7OdDrMzKltl0
    var promise = new Promise((dispatch) => {
        axios
            .get(`https://public12.herokuapp.com/stats/`,
                {
                    headers: {
                        'Cookie': "access_token=" + publicToken + '; Path=/; SameSite=Strict'
                    }
                }
                //     // , headers: { 'Access-Control-Allow-Origin': ' http://localhost:3000/' }
                // }
                //cookie_value
                // {
                //     headers: {
                //     }
                // }
                // {
                // Cookie: "cookie1=value; cookie2=value; cookie3=value;",
                // headers: {
                //     'Content-Type': 'application/json',
                //     // 'Accept': 'application/json',
                //     'Authentication': publicToken,
                // }
                // }
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






//Government user login
export function loginGovernmentUser(data) {
    console.log(data);
    return function action(dispatch) {
        //const request = axios.post(`https://covid-government-dashboard.herokuapp.com/user/login`,
        //const request = axios.post(`http://192.168.43.203:3000/user/login`,
        const request = axios.post(`http://localhost:3000/user/login`,
            //http://192.168.43.203:3006/
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
    token = data.data.token.token;
    console.log('token: ', token);
    userID = data.data.objectid;
    var info = data.data.user.username;
    // Cookies.save('access_token', token,  {withCredentials: true},{path:'/'})
    sessionStorage.setItem('userInfo', info);

    localStorage.setItem('token', token)
    localStorage.setItem('userID', userID)
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

axios.defaults.withCredentials = true;
export function gvtUsergetList(dispatch) {
    var promise = new Promise((reject) => {
        axios
            //.get(`https://covid-government-dashboard.herokuapp.com/stats`, {
            //.get(`http://192.168.43.203:3000/stats`, {
            .get(`http://localhost:3000/stats`, {
                withCredentials: true,
                headers: { 'Authentication': 'Bearer' + localStorage.getItem('token') }
            })
            .then(function (result) {
                // resolve(result.data);
                dispatch(SuccessGvtUser(result));
            })
            .catch(error => {
                dispatch(ErrGvtUser(error))
            });
    })
    console.log(promise);
    return promise
}
const SuccessGvtUser = (data) => {
    // console.log(data);
    const GOVERNMENT_USER_DATA = 'GOVERNMENT_USER_DATA';
    return {
        type: GOVERNMENT_USER_DATA,
        data: data.data
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