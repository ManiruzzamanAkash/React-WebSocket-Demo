import React from 'react';
import Layout from '../components/Layout';
import NotificationList from '../components/NotificationList';
const Notification = (props) => {
    return (
        <Layout>
            <h3>Notifications</h3>
            <NotificationList />
        </Layout>
    );
}

export default Notification;