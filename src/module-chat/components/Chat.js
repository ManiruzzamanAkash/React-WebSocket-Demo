import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { sendMessageAction, updateMessageAction } from '../actions/ChatAction';

const Chat = (props) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const messages = useSelector((state) => state.chat.messages);
    const message = useSelector((state) => state.chat.message);
    const receiver = useSelector((state) => state.chat.receiver);

    // const user = props.user ? props.user : null;
    const sendMessage = (e) => {
        e.preventDefault();
        dispatch(sendMessageAction(message, receiver));
    }

    useEffect(() => {
        const userData = localStorage.getItem('userData');
        setUser(JSON.parse(userData));
    }, []);


    return (
        <div className="card card-body" style={{ height: '78vh' }}>
            {
                receiver !== null &&
                <>
                    {/* <div className="item-right text-right">
                        <div className="right-section-message">
                            <div className="float-right">
                                <p className="ml-5 mr-2">
                                    Hello akash
                                </p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="item-left text-left">
                        <div className="left-section-message">
                            <div className="float-left">
                                <i className="fa fa-user"></i>
                            </div>
                            <div className="float-left">
                                <p className="ml-1 mr-2 pr-5">
                                    Hello Polash
                                </p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div> */}

                    {
                        messages.length === 0 &&
                        <div className="text-muted">
                            <i className="fa fa-comment" style={{ fontSize: 50 }}></i>
                            <br />
                            <br />
                            No Message Found.
                            Please Send a Message !!
                        </div>
                    }

                    {
                        messages.map((message, index) => (
                            <>
                                {
                                    message.sender_id === user.id &&
                                    <div className="item-right text-right">
                                        <div className="right-section-message">
                                            <div className="float-right">
                                                <p className="ml-5 mr-2">
                                                    {message.message}
                                                </p>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                }

                                {
                                    message.sender_id !== user.id &&
                                    <div className="item-left text-left">
                                        <div className="left-section-message">
                                            <div className="float-left">
                                                <i className="fa fa-user"></i>
                                            </div>
                                            <div className="float-left">
                                                <p className="ml-1 mr-2 pr-5">
                                                    {message.message}
                                                </p>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                }
                            </>

                        ))
                    }

                </>
            }


            {
                receiver === null &&
                <>
                    <div className="text-muted">
                        <i className="fa fa-user-circle" style={{ fontSize: 50 }}></i>
                        <br />
                        <br />
                        No Receiver Selected.
                        Please Select a Receiver From Left Side!!
                    </div>
                </>
            }

            <div className="message-area">
                <div className="float-left" style={{ width: '90%' }}>
                    <textarea
                        className="form-control sms-textbox"
                        placeholder="Write Message and Hit Enter or Click Send"
                        value={message}
                        onChange={(e) => dispatch(updateMessageAction(e.target.value))}
                    ></textarea>
                </div>
                <div className="float-right">
                    <button className="btn btn-primary btn-lg btn-send" onClick={sendMessage}>
                        <i className="fa fa-send"></i>
                    </button>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Chat;