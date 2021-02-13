import React from 'react';
import Websocket from 'react-websocket';
import { useSelector, useDispatch } from "react-redux";
import { getNotificationAction } from '../redux/actions/NotificationAction';
import NotificationCreateModal from './NotificationCreateModal';
import { Spinner } from 'react-bootstrap';

const NotificationList = (props) => {
    const dispatch = useDispatch();
    const localUrl = 'ws://10.3.203.191:8200/tutorial/akij-test-learning/public:6001/app/AKIJTESTPUSHERAPP?protocol=7&client=js&version=4.4.0&flash=false';
    const localUrl3 = 'ws://127.0.0.1:6001/app/AKIJTESTPUSHERAPP?protocol=7&client=js&version=4.3.1&flash=false';
    const localUrl2 = 'ws://127.0.0.1:6001/app/AKIJTESTPUSHERAPP?protocol=7&client=js';

    const isLoading = useSelector((state) => state.notification.isLoading);
    const notifications = useSelector((state) => state.notification.notifications);

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
            {
                !isLoading &&
                <div className="row justify-content-center">
                    <div className="col-6">
                        {
                            notifications && notifications.map((notification, index) => (
                                <div key={index} className="card card-body mb-3">
                                    {notification.message}
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            {
                isLoading &&
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card card-body mt-5">
                            <h4>Loading Notifications...</h4>
                            <div className="text-center">
                                <Spinner animation="grow" />
                            </div>
                        </div>
                    </div>
                </div>
            }

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