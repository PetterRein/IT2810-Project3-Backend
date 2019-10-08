# Backend repo for Project 3 in IT2810

This is a project developed with express, mongoDB, mongoose and nodemon for the course IT2810.

The guide at https://medium.com/@romerorickyio/how-to-setup-express-js-mongodb-cb3be7fab4b5 was used for this setup

### Notes
Made a new repo because Petter thinks it looks cleaner, downside is that we either have to use the issue board on the frontend for everything or have two issue boards. Its impossible to make a team wide project 3 issue board as this require Gitlab Silver.

For every other file like contributing, documentation see the Frontends README.

Server is running on port 5050 not 5000 because Petter had already something running on port 5000 and it was just easier to have this on 5050.

Express is the server application, mongoDB is the database, Mongoose is a ORM that abstracts the communication with the Database. Nodemon just restarts server when files changes.


## Getting started
- [Prerequisites](#prerequisites)
- [Setup](#setup)

### Prerequisites
- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/)

### Setup
- Install [Prerequisites](#prerequisites)
- Navigate to desired location and clone repo
- Enter `cd project-3-backend` to enter repo folder
- Enter `npm install` to install required packages
- Enter `npm run server` to run the application
- backend should start at `localhost:5050`
