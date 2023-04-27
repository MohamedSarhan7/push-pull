import React from 'react';

function MessageList({ messages }) {
    console.log(messages)
    return (
        <div className="w-100 h-100  border rounded-lg p-4 mb-4">
            {messages.map((msg, index) => (

                <div key={index} className=" d-flex mb-2" >
                    {
                        'itsMe' in msg ?
                            <div className='bg-danger'>{msg.message}</div>
                            :
                            <div className=' '>{msg.message}</div>
                    }
                </div>
            ))
            }
        </div >
    );
}

export default MessageList;