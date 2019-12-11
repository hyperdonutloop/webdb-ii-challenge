# Project Notes

## Step 1:

- ran `npm i` to get all dependencies
- ran `npm i knex helmet express` to install knex, helmet, and express
- ran `knex init` to create knexfile.js

### Created a folder called `api` and within that folder created a file called `server.js`

- set up server

### Created a file in root directory called index.js

- set up index file with server.listen

_Don't forget to `module.exports = server`_

## Step 2:

### Taught knex how to connect to DB

- added `migrations` and `seeds` to knexfile under `development`
- created dbConfig.js file (copied from previous project)

## Step 3:

### Created a Migration

- create: `knex migrate:make nameOfMigration`
- run: `knex migrate:latest`

After creating migration files appeared in a new migrations folder. In this file is where we create the table with constraints as needed.

**_Don't forget to add `dropTableIfExists`_**

## Step 4: 

### Set up CRUD operations

Created folder called `cars` and within it a file called `cars-router.js` 
 
 - built out CRUD operations to interact with database
 - used `const knex = require('../data/dbConfig.js');` to make sure requests would talk to database without an issue.

## Step 5: 

### Created seed to supply DB with information

- create: `knex seed:make nameOfSeed`
  - filled out seed file with mock data and made sure the names matched the migration file

- run: `knex seed:run`
  - once you do this now the DB is pre-populated with this data

## Step 6: 

## Tested all endpoints with Insomnia to verify everthing functions properly

Created middleware function as well to validate whether required information was entered into the POST request
