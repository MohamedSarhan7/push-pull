import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config/config.js';

function MessageList() {
    const [messages, setMessages] = useState([]);
    const [lastMessage, setlastMessage] = useState('')
    const lastMessageRef = useRef(lastMessage);

    // const myFunc = () => {

    // }
    useEffect(() => {
            axios.get(`${baseUrl}/messages`)
                .then(response => {
                    setMessages((prevMessages) => [...prevMessages, response.data]);
                    // const msg = response.data[response.data.length - 1]
                    setlastMessage(msg.createdAt);
                    lastMessageRef.current = msg.createdAt;


                }).catch(error => {
                    console.error(error);
                });

  


        // return () => clearInterval(myIn);
    }, [messages]);

    return (
        <ul className="list-group">
            {messages.map((message, index) => (
                <li key={index} className="list-group-item">{message.message}</li>
            ))}
        </ul>
    );
}

export default MessageList;