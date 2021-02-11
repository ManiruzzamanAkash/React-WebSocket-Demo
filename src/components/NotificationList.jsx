import React, { useState } from 'react';
import Websocket from 'react-websocket';

const NotificationList = (props) => {
    const [notifications, setNotifications] = useState([]);
    const localUrl = 'ws://10.3.203.191:8200/tutorial/akij-test-learning/public:6001/app/AKIJTESTPUSHERAPP?protocol=7&client=js&version=4.4.0&flash=false';
    const localUrl3 = 'ws://127.0.0.1:6001/app/AKIJTESTPUSHERAPP?protocol=7&client=js&version=4.3.1&flash=false';
    const localUrl2 = 'ws://127.0.0.1:6001/app/AKIJTESTPUSHERAPP?protocol=7&client=js';


    const handleData = (data) => {
        // let result = JSON.parse(data);
        console.log('get data', data);
        // this.setState({ count: this.state.count + result.movement });
    }

    const handleOpen = () => {
        console.log("connected:)");
    }
    const handleClose = () => {
        console.log("disconnected:(");
    }

    return (
        <>
            <Websocket url={localUrl2}
                onOpen={handleOpen} 
                onClose={handleClose}
                reconnect={true} debug={true}
                onMessage={(data) => handleData(data)}
            />
        </>
    );
}

export default NotificationList;