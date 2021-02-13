import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";

// Import reducer
import { Provider } from "react-redux";

// Import Store
import Store from "./redux/Store";

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { createNotificationWebsocketAction } from './redux/actions/NotificationAction';

const MIX_PUSHER_APP_ID = "AKIJTESTPUSHERAPP";
const MIX_PUSHER_APP_KEY = "AKIJTESTPUSHERAPP";
const MIX_PUSHER_APP_SECRET = "AKIJTESTPUSHERAPPAKIJTESTPUSHERAPPAKIJTESTPUSHERAPPAKIJTESTPUSHERAPP";
const MIX_PUSHER_APP_CLUSTER = "mt1";
const MIX_HOST_NAME = "mt1";
const MIX_HOST_ADDRESS = "127.0.0.1";

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: MIX_PUSHER_APP_KEY,
//   cluster: MIX_PUSHER_APP_CLUSTER,
//   wsHost: MIX_HOST_ADDRESS,
//   wsPort: 6001,
//   disableStats: true,
//   forceTLS: false,
//   encrypted: false,
// });

// window.Echo.channel('user.created')
//   .listen('UserCreated', (e) => {
//     console.log('User Created: ', e)
//   })

console.log('MIX_PUSHER_APP_KEY', MIX_PUSHER_APP_KEY);

const pusher = new Pusher(MIX_PUSHER_APP_KEY, {
  cluster: MIX_PUSHER_APP_CLUSTER,
});

const options = {
  broadcaster: 'pusher',
  key: MIX_PUSHER_APP_KEY,
  cluster: MIX_PUSHER_APP_CLUSTER,
  forceTLS: false,
  encrypted: false,
  wsHost: MIX_HOST_ADDRESS,
  wsPort: 6001,
  //authEndpoint is your apiUrl + /broadcasting/auth
  // authEndpoint: 'https://iapps.akij.net/broadcasting/auth',
};

const echo = new Echo(options);
echo.channel('user.created')
  .listen('UserCreated', (e) => {
    console.log('User Created: ', e)
  })

echo.channel('notification.created')
  .listen('NotificationCreated', (e) => {
    Store.dispatch(createNotificationWebsocketAction(e.notification));
  })

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
