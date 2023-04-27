const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*",
    }
});




io.on('connection', function (socket) {
    // io.to(socket.id).emit("mySelf",{me:socket.id});
    console.log('A user connected: ', socket.id);

    socket.on('message', function (msg) {
        console.log('user: ', socket.id, ' || msg: ', msg)
        socket.broadcast.emit('new-message', {
            message: msg
        });
    });

});


server.listen(3000, function () {
    console.log('Server listening on port 3000');
});