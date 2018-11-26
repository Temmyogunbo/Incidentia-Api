[![Build Status](https://travis-ci.com/Temmyogunbo/Incidentia-Api.svg?branch=master)](https://travis-ci.com/Temmyogunbo/Incidentia-Api)

## Description
- An incidence report app API. It is intended to track failures that  happens in production. For example, downtime. The cause, solution, severity, time can be recorded for better analysis. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before this application can work, you need the following:
- [NodeJS](https://nodejs.org/en/) -A platform to run javascript, not in the browser
- MongoDB A NoSQL database that would persist data

### INSTALLING
1. Download or clone the project [here](https://github.com/Temmyogunbo/Incidentia-Api.git)
2. Run `npm install` to install packages. 
3. Rename the .env.sample file to .env and edit
4. Create an `incidencia` database for development not compulsory
3. Start the server by running `npm run start:dev` or `yarn start:dev`.

The application listens on port `3000` by default unless otherwise started by an environment variable.

 Test the API using `postman` or `insomnia`

 ### Tech
The app is built using the following tech:
1. [Hapijs](https://hapijs.com/) as server-side framework
2. [MongoDB](https://www.mongodb.com/) as database
3. [JOI](https://github.com/hapijs/joi) as object schema validator


### Frequently asked quesion

## What is Incidencia-API?
It is a simple app built to track failures of applications that  happens in production.

## What are the current available features?
These includes: 
* Sign up
* Sign in
* Create an incidence
* Get all incidences

## How do I own an account?
You need to sign up via postman or insomnia [here](https://incidencia-api.herokuapp.com/api/v1)


## Author

* **Emmanuel Ogunbo** 

## License

Incidencia-API is  [MIT licensed](https://github.com/Temmyogunbo/Incidentia-Api/blob/master/LICENSE) 
