const PublicUserReducer = (state = [], action) => {

    switch (action.type) {

        case 'PUBLIC_SIGNUP':
            console.log(action.data);
            return Object.assign({}, state, {
                publicUserList: action.data
            })
        case 'PUBLIC_LOGIN':
            return Object.assign({}, state, {
                publicUserLogin: action.data
            })
        case 'GOVERNMENT_LOGIN':
            return Object.assign({}, state, {
                gvtUserLogin: action.data
            })


        default:
            return state;


    }
}

export default PublicUserReducer;