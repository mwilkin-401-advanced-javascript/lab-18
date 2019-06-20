'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

/**
 * logger module
 * @module logger
 */


/**
 * @fucntion saveLog - fires a message upon receipt of emit event from server 
 * @desc consoles a message upon save
 */

let saveLog = payload => {
  console.log('I heard this message:', payload);
};

/**
 * @function errorLog - fires upon receipt emit event from server
 * @desc consoles an error message when an error is encounterd
 */

let errorLog = () => {
  console.error('Opps. Something went wrong');
};

socket.on('file-save', saveLog);
socket.on('file-error', errorLog);



module.exports = {saveLog, errorLog};
