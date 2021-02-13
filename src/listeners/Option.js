
import Pusher from 'pusher-js';

window.Pusher = require('pusher-js');

const MIX_PUSHER_APP_ID = "AKIJTESTPUSHERAPP";
const MIX_PUSHER_APP_KEY = "AKIJTESTPUSHERAPP";
const MIX_PUSHER_APP_SECRET = "AKIJTESTPUSHERAPPAKIJTESTPUSHERAPPAKIJTESTPUSHERAPPAKIJTESTPUSHERAPP";
const MIX_PUSHER_APP_CLUSTER = "mt1";
const MIX_HOST_NAME = "mt1";
const MIX_HOST_ADDRESS = "127.0.0.1";

export function Option() {
    return {
        broadcaster: 'pusher',
        key: MIX_PUSHER_APP_KEY,
        cluster: MIX_PUSHER_APP_CLUSTER,
        forceTLS: false,
        encrypted: false,
        wsHost: MIX_HOST_ADDRESS,
        wsPort: 6001,
        //authEndpoint is your apiUrl + /broadcasting/auth
        // authEndpoint: 'https://iapps.akij.net/broadcasting/auth',
    }
}