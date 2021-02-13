import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { changeMessageAction, createNotificationAction } from '../redux/actions/NotificationAction';

const NotificationCreateModal = (props) => {
    const dispatch = useDispatch();
    const { handleClose, show } = props;
    const message = useSelector((state) => state.notification.message);

    const createNotification = () => {
        if (message.length > 0) {
            dispatch(createNotificationAction(message));
            handleClose();
        }
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Send Notification
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea
                    className="form-control"
                    placeholder="Enter Notification Message"
                    value={message}
                    onChange={(e) => dispatch(changeMessageAction(e.target.value))}
                ></textarea>
                <Button
                    variant="primary" className="mt-5 btn-block"
                    onClick={() => createNotification()}>
                    Send Now
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default NotificationCreateModal;