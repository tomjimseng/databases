var models = require('../models');
var express = require('express');

// request({
//   method: 'POST',
//   uri: 'http://127.0.0.1:3000/classes/users',
//   json: { username: 'Valjean' }
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
    get: function (req, res) { },
    post: function (req, res) {
      models.users.post(req.json)
        .then((result) => {
          if (result === undefined) {
            console.log('No result from INSERT');
          } else {
            res.send('User added');
            console.log(result);
          }
        })
        .catch(err => {
          res.send(err);
          console.log(err);
        });

    }
  }
};

