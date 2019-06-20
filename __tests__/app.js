'use strict';

const app = require('../app/app.js');

jest.mock('fs');

describe('convertCase function', () => {
  it('should turn a buffer into an uppercased string ', () => {
    let string = Buffer.from('test string');
    let convertedString = app.convertCase(string);
    expect(convertedString).toEqual('TEST STRING');
  });
});

describe('error function', () => {
  it('should console.error a message', () => {
    //test error function
  });
});

describe('log function', () => {
  it('it should console.log a message', () => {
    //test logger 
  });
});

describe('readFile function', () => {
  it('it should read a file', () => {
    

  });
  it('it should throw and error with a bad file', () => {
     
  });
});

describe('writeFile function', () => {
  it('it should write a file', () => {
    
  });
  it('it should throw and error if given a bad file', () => {
    
  });
});
