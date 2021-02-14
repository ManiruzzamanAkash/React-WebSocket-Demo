import * as Types from "../types/Types";

// Initial state
const initialState = {
    users: [],
    messages: [],
    isLoading: false,
    message: ''
};

const ChatReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case Types.GET_CHAT_USER_LIST:
            return {
                ...state,
                users: action.payload.users,
                isLoading: action.payload.isLoading
            };

        case Types.CHAT_LIST:
            return {
                ...state,
                messages: action.payload,
                isLoading: action.payload.isLoading
            };

        case Types.CREATE_CHAT:
            const messages = action.payload !== null ? [action.payload, ...state.messages] : state.messages
            return {
                ...state,
                messages,
                message: ''
            };

        case Types.DELETE_CHAT:
            return {
                ...state,
                message: action.payload,
            };

        default:
            break;
    }
    return newState;
};

export default ChatReducer;