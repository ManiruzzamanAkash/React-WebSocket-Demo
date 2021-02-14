import axios from "axios";
import * as Types from "../types/Types";

export const getNotificationAction = () => async (dispatch) => {
    let response = {
        notifications: [],
        isLoading: true,
    };
    dispatch({ type: Types.NOTIFICATION_LIST, payload: response });

    await axios.get(`${process.env.REACT_APP_API_URL}notifications`)
        .then((res) => {
            response.notifications = res.data;
        })

    response.isLoading = false;
    dispatch({ type: Types.NOTIFICATION_LIST, payload: response });
};


export const createNotificationAction = (message) => async (dispatch) => {
    let postData = {
        "user_id": 1,
        "message": message
    }
    let responseData = null;
    await axios.post('http://localhost:8000/api/notification-create', postData)
        .then(res => {
            if (res.data !== null)
                responseData = res.data;
        })
        .catch(err => {
            alert('Something went wrong to send notification')
        });

    dispatch({ type: Types.NOTIFICATION_CREATE, payload: responseData });
}

export const changeMessageAction = (message) => async (dispatch) => {
    dispatch({ type: Types.CHANGE_MESSAGE, payload: message });
}

export const createNotificationWebsocketAction = (notification) => async (dispatch) => {
    dispatch({ type: Types.NOTIFICATION_CREATE_WEBSOCKET, payload: notification });
}