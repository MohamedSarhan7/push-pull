import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { useState } from 'react';

function ChatRoom() {


    return (
        <div>
            <MessageList />
            <MessageForm  />
        </div>
    );
}

export default ChatRoom;