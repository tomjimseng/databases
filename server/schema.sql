CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  room_id INTEGER,
  user_id INTEGER,
  messageText TEXT,
  dateCreated DATE,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id) REFERENCES Room(id),
  FOREIGN KEY (user_id) REFERENCES User(id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE User (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE Room (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE StalkerMode (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  stalker_id INTEGER,
  victim_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (stalker_id) REFERENCES User(id),
  FOREIGN KEY (victim_id) REFERENCES User(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

