import { combineReducers } from "redux";
import ChatReducer from "../module-chat/reducers/ChatReducer";
import AuthReducer from "./reducers/AuthReducer";
import NotificationReducer from "./reducers/NotificationReducer";

const RootReducer = combineReducers({
    notification: NotificationReducer,
    auth: AuthReducer,
    chat: ChatReducer,
});

export default RootReducer;