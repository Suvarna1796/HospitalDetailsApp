const PublicUserReducer = (state = [], action) => {

    switch (action.type) {
       
        case 'PUBLIC_SIGNUP':
        console.log(action.data);
            return Object.assign({}, state, {
                publicUserList: action.data
            })
      
        default:
            return state;


    }
}

export default PublicUserReducer;