'use strict';

const io = require('socket.io')(3001);

/**
 * server module
 * @module server
 */


io.on('connection', socket => {
  console.log(`server.js connected to socket: ${socket.id}`);
  socket.on('file-save', payload => {
    io.emit('file-save', payload);
  });
  
  socket.on('file-error', payload => {
    io.emit('file-error', payload);
  });
});
