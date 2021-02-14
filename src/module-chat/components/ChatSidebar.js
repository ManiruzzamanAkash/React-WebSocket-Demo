import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const ChatSidebar = (props) => {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                <div className="float-left pointer">
                    <i className="fa fa-user-circle"></i>
                </div>
                <div className="float-right">
                    Maniruzzaman Akash
                </div>
            </ListGroup.Item>
            <ListGroup.Item as="li">
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
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ChatSidebar;