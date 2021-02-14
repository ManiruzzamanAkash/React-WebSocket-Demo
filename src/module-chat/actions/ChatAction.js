import axios from 'axios';
import * as Types from "../types/Types";

export const getChatUserListActions = () => async (dispatch) => {
    let response = {
        users: [],
        isLoading: true,
    };
    dispatch({ type: Types.GET_CHAT_USER_LIST, payload: response });

    await axios.get(`${process.env.REACT_APP_API_URL}users-list`)
        .then((res) => {
            response.users = res.data;
            console.log('res.data', res.data);

        })

    response.isLoading = false;
    dispatch({ type: Types.GET_CHAT_USER_LIST, payload: response });
};

export const sendMessageAction = (message, receiver) => async (dispatch) => {
    let response = {
        isLoading: true,
    };
    // dispatch({ type: Types.GET_CHAT_USER_LIST, payload: response });
    const data = {
        "message": message,
        "receiver_id": receiver.id
    }
    await axios.post(`${process.env.REACT_APP_API_URL}chats`, data)
        .then((res) => {
            console.log('res.data after SMS send', res.data);
        })

    response.isLoading = false;
    dispatch({ type: Types.CREATE_CHAT, payload: response });
};

export const updateActiveReceiverAction = (user) => async (dispatch) => {
    // Grab all the messages between these two peoples
    await axios.get(`${process.env.REACT_APP_API_URL}chats?receiver_id=${user.id}`)
        .then((res) => {
            console.log('res.data get sms data', res.data);
            dispatch({ type: Types.UPDATE_ACTIVE_RECEIVER, payload: user });
            dispatch({ type: Types.UPDATE_ACTIVE_MESSAGES, payload: res.data });
        })
};

export const updateMessageAction = (message) => async (dispatch) => {
    dispatch({ type: Types.UPDATE_MESSAGE, payload: message });
};