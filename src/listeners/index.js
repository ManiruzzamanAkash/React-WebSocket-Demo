
import Echo from 'laravel-echo';
import { createNotificationWebsocketAction } from '../redux/actions/NotificationAction';
import Store from '../redux/Store';
import {Option} from './Option';

const echo = new Echo(Option());

echo.channel('user.created')
    .listen('UserCreated', (e) => {
        console.log('User Created: ', e)
    })

echo.channel('notification.created')
    .listen('NotificationCreated', (e) => {
        // new Notification(e.notification.message);
        console.log('e', e)
        Store.dispatch(createNotificationWebsocketAction(e.notification));
    })