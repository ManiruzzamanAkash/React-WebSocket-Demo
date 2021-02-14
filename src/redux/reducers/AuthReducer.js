import * as Types from "../types/Types";

const initialState = {
    isLoading: false,
    message: '',
    loggedIn: false,
    access_token: '',
    userData: null,
};

const AuthReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                loggedIn: action.payload.loggedIn,
                message: action.payload.message,
                access_token: action.payload.access_token,
                userData: action.payload.userData
            };
        default:
            break;
    }
    return newState;
};

export default AuthReducer;