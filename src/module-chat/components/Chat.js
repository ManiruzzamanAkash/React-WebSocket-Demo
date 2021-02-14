import React from 'react';

const Chat = (props) => {
    // const user = props.user ? props.user : null;
    const user = { 'test': 'test' };
    return (
        <div className="card card-body" style={{ height: '78vh' }}>
            {
                user !== null &&
                <>
                    <div className="item-right text-right">
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
                    </div>

                </>
            }

            <div className="message-area">
                <div className="float-left" style={{ width: '90%' }}>
                    <textarea className="form-control sms-textbox" placeholder="Write Message and Hit Enter or Click Send"></textarea>
                </div>
                <div className="float-right">
                    <button className="btn btn-primary btn-lg btn-send">
                        <i className="fa fa-send"></i>
                    </button>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Chat;