import * as Types from "../types/Types";

// Initial state
const initialState = {
    notifications: [],
    isLoading: false,
    message: ''
};

const NotificationReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case Types.NOTIFICATION_LIST:
            return {
                ...state,
                notifications: action.payload.notifications,
            };
        case Types.NOTIFICATION_CREATE:
            // const updatedList = action.payload !== null ? [...state.notifications, action.payload] :  state.notifications
            return {
                ...state,
                // notifications: updatedList,
                message: ''
            };
        case Types.NOTIFICATION_CREATE_WEBSOCKET:
            const updatedListWebsocket = action.payload !== null ? [...state.notifications, action.payload] :  state.notifications
            return {
                ...state,
                notifications: updatedListWebsocket,
                message: ''
            };
        case Types.CHANGE_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            break;
    }
    return newState;
};

export default NotificationReducer;