import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from "react-redux";

import NotificationList from '../components/NotificationList';
import { getNotificationAction } from '../redux/actions/NotificationAction';
import NotificationCreateModal from '../components/NotificationCreateModal';

const Notification = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const notifications = useSelector((state) => state.notification.notifications);

    useEffect(() => {
        dispatch(getNotificationAction());
    }, []);

    return (
        <Layout>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="float-left">
                        <h3>
                            Notifications
                            <span className="badge badge-warning">{notifications.length}</span>
                        </h3>
                    </div>
                    <div className="float-right">
                        <button onClick={() => setShowModal(true)} className="btn btn-info btn-sm">
                            + Create New
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

            <NotificationList />

            <NotificationCreateModal
                show={showModal}
                handleClose={() => setShowModal(false)}
            />
        </Layout>
    );
}

export default Notification;