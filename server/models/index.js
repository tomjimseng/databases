var db = require('../db');
const { DateTime } = require('luxon');
var dateTime = JSON.stringify(DateTime.local());

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


    },
    post: function ({username}) {
      // function takes in call back
      // create query for username data (INSERT )
      // check for err
      // check if table was populated with data
      // callback the row
      return new Promise((resolve, reject) => {
        var queryString = `INSERT INTO users (username) VALUES (${username})`;
        db.dbConnection.query(queryString, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    }
  }
};

