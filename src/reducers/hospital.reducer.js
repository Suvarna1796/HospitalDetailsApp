const HospitalUserReducer = (state = [], action) => {

    switch (action.type) {

        case 'HOSPITAL_USER_DATA':
            console.log(action.data);
            return Object.assign({}, state, {
                hspUserDetails: action.data
            })
        case 'HOSPITAL_USER_BASIC_DETAILS':
            console.log(action.data);
            return Object.assign({}, state, {
                hspUserBasicDetails: action.data
            })
        default:
            return state;


    }
}

export default HospitalUserReducer;