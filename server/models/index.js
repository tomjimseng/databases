var db = require('../db');
const { DateTime } = require('luxon');
var dateTime = JSON.stringify(DateTime.local());
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      //

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // function takes in call back
      // create query for username data (SELECT )
      // check for err
      // resolve result
      return new Promise((resolve, reject) => {
        var queryString = 'SELECT * FROM user';
        db.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

    },
    post: function (username) {
      console.log('model/index.js - username:', username);
      // function takes in call back
      // create query for username data (INSERT )
      // check for err
      // check if table was populated with data
      // callback the row
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO user (username) VALUES ('${username}')`;
        db.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  },

  rooms: {
    // Ditto as above.
    get: function () {
      // function takes in call back
      // create query for username data (SELECT )
      // check for err
      // resolve result
      return new Promise((resolve, reject) => {
        var queryString = 'SELECT * FROM room';
        db.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });

    },
    post: function (roomname) {
      // console.log('model/index.js - roomname:', roomname);
      // function takes in call back
      // create query for roomname data (INSERT )
      // check for err
      // check if table was populated with data
      // callback the row
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO room (roomname) VALUES ('${roomname}')`;
        db.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  }
};

