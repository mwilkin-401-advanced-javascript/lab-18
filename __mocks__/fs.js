'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if(file.match(/bad/i || (!file))){
    cb('Invalid file');
  }else{
    cb(undefined, new Buffer('File Contents'));
    // cb(null, new Buffer('success'));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if(file.match(/bad/i || (!file))){
    cb('Invalid file');
  }else if(! Buffer.isBuffer(buffer)){
    cb('Invalid buffer', undefined);
    cb(null, null);
  } else {
    cb(undefined, undefined);
  }
};