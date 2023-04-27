import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
const URL = "http://localhost:3000"
const socket = io(URL);
function ChatRoom() {

    
    const [messages, setMessages] = useState([]);

    const [newMessage, setNewMessage] = useState({ message: '', itsMe: false })
    useEffect(() => {
    
        socket.on('new-message', function (data) {
                console.log(data)
            setMessages(prevMessages => [...prevMessages, data.message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    function handleSubmit(message) {
        setMessages([...messages, { message: message, itsMe: true }])
        // setNewMessage({ message: message, itsMe: true })
console.log(message)
        socket.emit('message', { message });
    }

    return (
        <div className='d-flex justify-content-center w-100 h-100 p-5 m-5'>


            <div className="d-flex flex-column justify-content-center w-100 h-100">
                <div className='w-100 h-75'>

                    <MessageList messages={messages} />
                </div>
                <div className='w-100 h-25'>

                    <MessageForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    );
}
export default ChatRoom