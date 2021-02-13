import * as Types from "../types/Types";

// Initial state
const initialState = {
    notifications: [],
};

const NotificationReducer = (state = initialState, action) => {
    const newState = {...state };

    switch (action.type) {
        case Types.NOTIFICATION_LIST:
            return {
                ...state,
                notifications: action.payload.notifications,
            };
        default:
            break;
    }
    return newState;
};

export default NotificationReducer;