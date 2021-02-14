import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from 'react-bootstrap';
import { getChatUserListActions } from '../actions/ChatAction';

const ChatSidebar = (props) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.chat.users);

    useEffect(() => {
        dispatch(getChatUserListActions());
    }, []);

    console.log('users', users);
    

    return (
        <ListGroup as="ul" style={{ maxHeight: '78vh', overflowY: 'auto' }}>
            {
                users.map((user, index) => (
                    <ListGroup.Item as="li" className={ index === 0 ? 'active' : ''}>
                        <div className="float-left pointer">
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <div className="float-right">
                            {user.name}
                        </div>
                    </ListGroup.Item>
                )) 
            }

            {/* <ListGroup.Item as="li">
                <div className="float-left">
                    <i className="fa fa-user-circle"></i>
                </div>
                <div className="float-right">
                    Farid Uddin
                </div>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <div className="float-left">
                    <i className="fa fa-user-circle"></i>
                </div>
                <div className="float-right">
                    Abir Ahmed
                </div>
            </ListGroup.Item> */}
        </ListGroup>
    );
}

export default ChatSidebar;