import axios from 'axios';
var token;

export default function hspUsergetList() {
    console.log(token, "token")
    var promise = new Promise((dispatch) => {
        axios
            .get(`https://covid-dash-combined.herokuapp.com/hospital/stats/patientdetails`,
                {
                    headers: {
                        //     'Content-Type':'application/json',
                        // 'Authorization': token
                    }
                }
            )
            .then(function (result) {
                console.log(result);
                dispatch(SuccessHspUser(result));
            })
            .catch(error => {
                console.log(error);
                dispatch(ErrHspUser(error));
            });
    })
    // console.log(promise);
    return promise
}
const SuccessHspUser = (data) => {
    console.log(data);
    const HOSPITAL_USER_DATA = 'HOSPITAL_USER_DATA';
    return {
        type: HOSPITAL_USER_DATA,
        data: data
    }
}
const ErrHspUser = (data) => {
    console.log(data);
    const HOSPITAL_USER_DATA = 'HOSPITAL_USER_DATA';
    return {
        type: HOSPITAL_USER_DATA,
        data: data
    }
}

//
export function hspUserBasicdetails(data) {
    console.log(token, "token")
    // var promise = new Promise((dispatch) => {
    //     axios
    //         .post(` https://covid-dash-combined.herokuapp.com/hospital/stats/basicdetails`, data,
    //        )
    //         .then(function (result) {
    //             console.log(result);
    //             dispatch(SuccessHspUserBasic(result));
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             dispatch(ErrHspUserBasic(error));
    //         });
    // })
    // return promise
    return function action(dispatch) {
        const request = axios.post(`https://covid-dash-combined.herokuapp.com/hospital/stats/basicdetails`,
            data
        );
        return request.then(
            response => dispatch(SuccessHspUserBasic(response)),
            err => dispatch(ErrHspUserBasic(err.response))
        );
    }
    // console.log(promise);
}
const SuccessHspUserBasic = (data) => {
    console.log(data);
    const HOSPITAL_USER_BASIC_DETAILS = 'HOSPITAL_USER_BASIC_DETAILS';
    return {
        type: HOSPITAL_USER_BASIC_DETAILS,
        data: data
    }
}
const ErrHspUserBasic = (data) => {
    console.log(data);
    const HOSPITAL_USER_BASIC_DETAILS = 'HOSPITAL_USER_BASIC_DETAILS';
    return {
        type: HOSPITAL_USER_BASIC_DETAILS,
        data: data
    }
}
