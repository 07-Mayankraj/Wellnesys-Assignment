# Objective:

The goal of this assignment was to gain practical experience in building a web application using Node.js and the Express framework. We aimed to understand the basics of creating a web server, handling requests and responses, setting up routes, and working with middleware in Node.js Express.

# Requirements:

- Use Node.js and Express framework to create the web application.
- Set up a simple server that listens on a specific port.
- Create at least three different routes:
  - Route 1: Handle GET requests for the main URL ("/") and display a welcome message.
  - Route 2: Handle POST requests to "/api/users" and save user information to a JSON file.
  - Route 3: Handle GET requests to "/api/users" and retrieve user information from the JSON file.
- Use middleware to handle common tasks like logging and error handling.
- Implement error handling for incorrect routes and server errors.
- Use the appropriate HTTP methods (GET, POST, etc.) for each route based on their intended purpose.
- Use the correct status codes (200, 404, etc.) in the HTTP responses.
- Use the appropriate JSON structure for request/response data.

# Steps Followed:

- Created a new Node.js project using npm.
- Installed Express framework and other necessary dependencies.
- Created a server file named server.js and imported required modules.
- Set up a basic Express server that listens on a specified port.
- Implemented the three routes as mentioned, ensuring they handle the correct HTTP methods and provide the expected responses.
- Used middleware to handle logging and error handling, utilizing existing middleware libraries.
- Tested the application using tools like Postman or curl to ensure the routes and responses are working correctly.
- Documented the steps taken, challenges faced, and lessons learned during the assignment.


# To start the application

- Run command
  - install all dependencies   ```npm i```
  - install nodemon   ```npm i nodemon```
  - set up nodemon in package.json file
  - start the server with nodemon  ```nodemon server``` 

  
# tools 

- vs code  
- postman 


# API endpoints

| METHOD | ENDPOINT   | DESCRIPTION                                 | STATUS CODE | REQ.BODY                                                                     |
| ------ | ---------- | ------------------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| GET    | /api/      | This home page show welcome message         | 200         | No data required.                                                            |
| POST   | /api/users | This endpoint will allow users to register. | 201         | body : {"name": "chikkuuu","email": "chikkuuu@gmail.com","password": "1234"} |
| GET    | /api/users | This endpoint will all register users.      | 201         | flight id should be passed in params                                         |

<br/>

## User Model

```
{

    name: String,
    email: String,
    password: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    }

}

```


# Challenges Faced:

- Handling errors for invalid routes and server issues
- Managing request and response data in the correct JSON format
- Storing the users data in the correct JSON format into the json file
- hashing the password so it won't be visible to everyone
- implementing the logger file to store logs along with ip addresses,timestamps,method and url endpoint

# Lessons Learned :

- Setting up a web server using Node.js and Express
- Handling different types of HTTP requests and designing appropriate routes
- Efficiently managing common tasks with middleware
- Importance of proper status codes and JSON structures for API design
- Gained practical experience in developing web applications with Node.js and Express.
