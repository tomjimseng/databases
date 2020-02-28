var models = require('../models');
var express = require('express');

// request({
//   method: 'POST',
//   uri: 'http://127.0.0.1:3000/classes/users',
//   json: { roomname: 'Valjean' }
// }, function () {
//   // Post a message to the node chat server:
//   request({
//     method: 'POST',
//     uri: 'http://127.0.0.1:3000/classes/messages',
//     json: {
//       username: 'Valjean',
//       message: 'In mercy\'s name, three days is all I need.',
//       roomname: 'Hello'
//     }

module.exports = {
  messages: {
    get: function (req, res) { }, // a function which handles a get request for all messages
    post: function (req, res) { } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get()
        .then((result) => {
          console.log('resolved');
          res.end(JSON.stringify(result));
        })
        .catch(err => {
          res.send(err);
          console.log(err);
        });
    },
    post: function (req, res) {
      // added req.body.username instead of req.json
      console.log('req.body:', req.body);
      // console.log('req.json:', req.json );
      var username = req.body.username;
      models.users.post(username)
        .then(() => {
          console.log('resolved');
          res.end('User added');
        })
        .catch(err => {
          res.send(err);
          console.log(err);
        });
    }
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      models.rooms.get()
        .then((result) => {
          console.log('resolved');
          res.end(JSON.stringify(result));
        })
        .catch(err => {
          res.send(err);
          console.log(err);
        });
    },
    post: function (req, res) {
      // added req.body.username instead of req.json
      console.log('req.body:', req.body);
      // console.log('req.json:', req.json );
      var roomname = req.body.roomname;
      models.rooms.post(roomname)
        .then(() => {
          console.log('resolved');
          res.end('Room added');
        })
        .catch(err => {
          res.send(err);
          console.log(err);
        });
    }
  }
};

