'use strict';

cont io = {};

io.listen = port => {
  console.log('listener on', port);
};

io.connet = () => {
  return io.socket;
};

io.socket = {
  on: (command, callback) => {
    console.log('listening to ', command);
  },

  emit: (command, payload, callback) => {
    console.log('emit');
  },
};

module.exports = io;
