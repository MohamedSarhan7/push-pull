import React, { useState } from 'react';
import axios from 'axios';
import {baseUrl} from '../../config/config.js';
function MessageForm() {

    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${baseUrl}/messages`, { message }).then(response => {
            console.log(response.data);
            setMessage('');
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Type your message here" value={message} onChange={event => setMessage(event.target.value)} />
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
    );}

    export default MessageForm;