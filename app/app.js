'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const fs = require('fs');


/**
 * app module
 * @module app
 */

/**
* @function readFile 
* @param file - file being read from
* @param err - file being altered
* @param data - data being altered
* @desc calls readFile and writeFile
 */

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if(error){
        reject(error);
      } else {
        resolve(data);
      }
    });
  });  
}

/**
* @function writeFile 
* @param file - file being writen to
* @param text - text being writen after altered
* @desc calls readFile and writeFile
 */

function writeFile(file, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, Buffer.from(text), (error, data) => {
      if(error){
        reject(error);
      }else {
        resolve();
      }
    });
  });
}

/**
* @function convertCase 
* @param data - data being altered
* @desc changes data to uppercase
 */

function convertCase(data){
  return data.toString().toUpperCase();
}

/**
* @function alterFile 
* @param file - file being altered
* @desc calls readFile and writeFile
 */

const alterFile = (file) => {
  readFile(file)
    .then(data => {
      writeFile(file, convertCase(data));
      socket.emit('file-save', file);
    })
    .catch(error => socket.emit('file-error'), 500);
};

let file = process.argv.slice(2).shift();
alterFile(file);

/**
* events export
* @type {Object} - convertCase
* @type {Object} - readFile
* @type {Object} - writeFile
* 
 */

module.exports = {convertCase, readFile, writeFile};