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