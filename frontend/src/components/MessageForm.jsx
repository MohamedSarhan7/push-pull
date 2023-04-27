import React, { useState } from 'react';

function MessageForm({ onSubmit }) {
    const [message, setMessage] = useState('');

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (message) {
            onSubmit(message);
            setMessage('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="message" className="">
                    Message
                </label>
            </div>
            <div className='d-flex '>
                <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary">
                    Send
                </button>
            </div>
        </form>
    );
}

export default MessageForm;