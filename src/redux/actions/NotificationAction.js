import axios from "axios";
import * as Types from "../types/Types";

export const getNotificationAction = () => async (dispatch) => {
    let response = {
        notifications: [],
        isLoading: true,
        message: '',
        errors: []
    };
    let url = '';
    // url = '';
    try {
        // await Axios.get(url)
        //     .then((res) => {
        //         const { data, message, status } = res.data;
        //         response.notifications = data;
        //         response.isLoading = false;
        //     })
        //     .catch((err) => {

        //     });
        const fakeNotifications = [
            {
                id: 1,
                message: "Test Notification",
            },
            {
                id: 2,
                message: "Test Notification 2",
            }
        ];
        response.notifications = fakeNotifications;
    } catch (error) {
        response.message = 'Something Went Wrong !';
    }
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
        if(res.data !== null)
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