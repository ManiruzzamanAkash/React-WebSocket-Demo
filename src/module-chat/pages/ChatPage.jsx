import React from 'react';
import Layout from '../../components/Layout';
import Chat from '../components/Chat';
import ChatLayout from '../components/ChatLayout';
const ChatPage = (props) => {
    return (
        <Layout>
            <ChatLayout>
                <Chat />
            </ChatLayout>
        </Layout>
    );
}

export default ChatPage;