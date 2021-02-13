import React from 'react';
import Websocket from 'react-websocket';
import { useSelector, useDispatch } from "react-redux";
import { getNotificationAction } from '../redux/actions/NotificationAction';
import NotificationCreateModal from './NotificationCreateModal';
import { Spinner } from 'react-bootstrap';

const NotificationList = (props) => {
    const dispatch = useDispatch();
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
        </>
    );
}

export default NotificationList;