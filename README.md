# CalendarApp

This App is built using React, TypeScript, Node.js, GraphQL, Apollo-server-express, Apollo Codegen, TypeGraphQL, MongoDB, Typegoose, Mongoose

## Steps to Run the Application

Fork the code from **[Calendar App](https://github.com/roberth6060/react-calender-app)** repo to your workstation.

### Mongo Database Setup

* Sign-up for database at [MongoDB](https://account.mongodb.com/account/login)
* Create a database and cluster called **calendar**
* Create a **database user** and provide access to **notes** cluster/db
* Allow **Network access** to your database from your workstation/client  **IP Address** .

### Server setup

* Use the command/shell and go to the **Server** folder (`cd Server`)
* Create **.env** file and enter mongodb ( **`username`** ,  **`password`** ) and **`server listening port`** information.
* Run `npm install` command to install npm modules and packages.
* Run `npm start` to start the server. You will see a message on command window about the **running** status.
* Go to [http://localhost:8000/graphql](http://localhost:3333/graphql) and you will be able to execute **GraphQL queries**
  ENV file format (`Server`)

```
    MANGODB_URI =<mangodbURI>
    DB_PASSWORD=<Password> 
```

### Client setup

* Use the command/shell and go to the **lclient** folder (`cd Client`)
* Create **.env** file and enter **`listening port`** information.
* Run `npm install` command to install npm modules and packages.
* Run `npm run codegen` if you are making changes to graphql schema. (optional)
* Run `npm start` to start the server. You will see a message on command window about the running status.
* Go to [http://localhost:3000](http://localhost:3000/) and you will be able to create simple notes.
  .ENV file format (`Client`)

```
  GRAPHQL_API_URL="http://localhost:<serverPort>/graphql"
```

### Requirement

Enjoy the App and provide the feedback at [@jainrasik](https://twitter.com/jainrasik) or open git P

1. Choose a DateTime handling library such as luxon, date-fns, or moment.js
2. Design the calendar user interface, either following the design in the picture or creating a new design.
3. Implement the functionality to switch between months by adding controls to the UI, such as buttons to move to the next or previous month.
4. Fetch the data for the selected month from the API and display only the dates for that month in the calendar.
5. Show the appropriate data for each day in the day cell of the calendar, possibly limited to a certain number of events.
6. Implement the functionality to determine the current month and year from the URL, such as /2022-05-01.
7. (Optional) Add the ability to show more details about events by clicking on them in the calendar, using the API to fetch additional information.

# Stack

#### FrontEnd

* React
* Apollo Client
* GraphQL

#### BackEnd

* NodeJS
* ExpressJS
* Expresss-GraphQL
* GraphQL
* MangoDB
