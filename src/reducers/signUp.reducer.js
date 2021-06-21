const PublicUserReducer = (state = [], action) => {

    switch (action.type) {

        case 'PUBLIC_SIGNUP':
            console.log(action.data);
            return Object.assign({}, state, {
                publicSignUp: action.data
            })
        case 'GOVERNMENT_SIGNUP':
            return Object.assign({}, state, {
                gvtSignUp: action.data
            })
        case 'HOSPITAL_SIGNUP':
            return Object.assign({}, state, {
                hspSignUp: action.data
            })
        case 'PUBLIC_LOGIN':
            return Object.assign({}, state, {
                publicUserLogin: action.data
            })
        case 'GOVERNMENT_LOGIN':
            return Object.assign({}, state, {
                gvtUserLogin: action.data
            })
        case 'HOSPITAL_LOGIN':
            return Object.assign({}, state, {
               hspUserLogin: action.data
            })
        case 'PUBLIC_USER_DATA':
            return Object.assign({}, state, {
                publicUserdata: action.data
            })
        case 'GOVERNMENT_USER_DATA':
            return Object.assign({}, state, {
                gvtUserdata: action.data
            })
        default:
            return state;


    }
}

export default PublicUserReducer;