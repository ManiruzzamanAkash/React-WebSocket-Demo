import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import NotificationReducer from "./reducers/NotificationReducer";

const RootReducer = combineReducers({
    notification: NotificationReducer,
    auth: AuthReducer,
});

export default RootReducer;