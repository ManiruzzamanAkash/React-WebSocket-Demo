import Axios from "axios";
import * as Types from "../types/Types";

export const getNotificationAction = (page, searchText = null, isPublic = false) => async (dispatch) => {
    let response = {
        notifications: [],
        isLoading: true,
        message: '',
        errors: []
    };
    dispatch({ type: Types.NOTIFICATION_LIST, payload: response });
    let url = '';
    url = '';
    try {
        await Axios.get(url)
            .then((res) => {
                const { data, message, status } = res.data;
                response.notifications = data;
                response.isLoading = false;
            })
            .catch((err) => {

            });
    } catch (error) {
        response.message = 'Something Went Wrong !';
    }
    response.isLoading = false;
    dispatch({ type: Types.NOTIFICATION_LIST, payload: response });
};
