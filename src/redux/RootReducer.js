import { combineReducers } from "redux";
import NotificationReducer from "./reducers/NotificationReducer";

const RootReducer = combineReducers({
    notification: NotificationReducer,
});

export default RootReducer;