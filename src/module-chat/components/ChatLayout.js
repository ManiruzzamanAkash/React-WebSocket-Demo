import React from 'react';
import ChatSidebar from './ChatSidebar';

const ChatLayout = (props) => {
    return (
        <div className="card card-body p-3" style={{ minHeight: '80vh' }}>
            <div className="row">
                <div className="col-3" style={{ height: '80vh', background: '#cccccc2e' }}>
                    <ChatSidebar />
                </div>
                <div className="col-9">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default ChatLayout;