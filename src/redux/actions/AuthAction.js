import axios from "axios";
import { toast } from "react-toastify";
import * as Types from "../types/Types";

export const checkLoginAction = (data) => (dispatch) => {
    let responseData = {
        isLoading: true,
        loggedIn: false,
        message: '',
        access_token: '',
        userData: null,
    };
    dispatch({ type: Types.LOGIN, payload: responseData });
    responseData.isLoading = false;
    try {
        axios.post('http://localhost:8000/api/login', data)
            .then(res => {
                responseData.access_token = res.data.token;
                responseData.userData = res.data.user;
                responseData.loggedIn = true;
                responseData.message = "Logged in successfully !";
                toast.success(responseData.message)
                dispatch({ type: Types.LOGIN, payload: responseData });
            })
            .catch(err => {
                responseData.message = JSON.parse(err.request.response).message;
                toast.error(responseData.message)
                dispatch({ type: Types.LOGIN, payload: responseData });
            });
    } catch (error) {
        toast.error('Something went wrong, Please try again');
    }
}
