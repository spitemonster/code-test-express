# Code Test: Node

A simple Express app designed to provide a basic API for our code test.

### Quick start

1. [Install node](https://github.com/creationix/nvm)
> Recommended version >= 10.x

1. Run `npm install` to install dependencies

1. Run `npm run migrate` to migrate your development database

1. Run `npm run seed` to seed your development database

1. Run `npm start` to start up the local development server

You should get JSON output from http://localhost:3000/members

### Testing

Run `npm test` to run the test suite.

### Docker

As an alternative to installing node directly, you can use the provided Docker files to run the app and test suite. 

Run `docker-compose up -d` to start the Docker container, then run the same tasks above, prepending `docker-compose exec web` to the command. e.g. `docker-compose exec web npm run migrate`

Changes to the app code may require restarts to the node process. To do so, run `docker-compose restart`
