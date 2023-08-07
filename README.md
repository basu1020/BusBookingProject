# BusBookingProject

![Bus-booking](https://github.com/basu1020/BusBookingProject/assets/106004070/936da145-2567-4e09-9c0a-503481550a70)


This full-stack bus booking application enables users to search for and book bus tickets to different destinations. The backend of the application is developed using Node.js and Express, with MongoDB as the database. The backend includes various APIs for handling user authentication, searching for available buses, making bookings, and fetching booking details.

For the frontend, the application is built using React, which provides a dynamic and interactive user interface. Redux is utilized for efficient state management, enabling seamless navigation and real-time updates. Additionally, React Icons are employed to enhance the visual aesthetics of the user interface.

The project's main objective is to offer users a convenient and hassle-free bus booking experience, allowing them to search for buses, view seat availability, and securely book tickets with just a few clicks.

## Frontend Technologies Used:

### React:

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage the state of an application. React follows a component-based architecture, which helps in maintaining a clean and structured codebase. It enables developers to build interactive and dynamic web applications with ease.

### Redux:

Redux is a state management library for JavaScript applications. It helps in managing the application's state in a predictable and centralized way. Redux follows a single source of truth principle, where the entire application state is stored in a single store object. Components can access and update the state by dispatching actions, which are handled by reducers to modify the state.

### React Icons:

React Icons is a popular library that provides a wide range of customizable icon components for React applications. It offers a collection of commonly used icons from various icon packs, making it easy for developers to integrate visually appealing icons into their UI components.

These technologies, React, Redux, and React Icons, work together to create a smooth and efficient frontend experience, enabling the development of modern and feature-rich web applications.

# Backend Project Documentation

## Overview

This backend project is built using Node.js and Express.js, and it serves as an API to handle booking and user-related functionalities. It uses MongoDB as the database and Mongoose as the object modeling tool. The project is structured into separate files for routing, controllers, middleware, and models.

## Packages Used

The project utilizes the following Node.js packages:

- **Express**: A web application framework for Node.js that simplifies the process of building robust APIs and web applications.

- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB. It provides a straightforward way to interact with MongoDB collections and perform CRUD operations.

- **bcryptjs**: A library used for hashing and salting passwords. It enhances security by securely storing passwords in the database.

- **jsonwebtoken**: A library for generating JSON Web Tokens (JWTs). JWTs are used for user authentication and authorization.

- **express-validator**: A set of express.js middlewares to validate incoming requests. It helps validate data before processing it further.

## Project Structure

The backend project consists of the following files and directories:

1. **app.js**: The main application file that sets up the Express app, defines routes, and connects middleware.

2. **controllers**: This directory contains two controllers - `userController.js` and `bookingController.js`. These controllers handle user-related and booking-related functionalities, respectively.

3. **middleware**: The `fetchuser.js` middleware is used to extract and verify the user's token from the request headers.

4. **models**: Contains two model files - `userModel.js` and `BookingModel.js`. These files define the Mongoose schemas for users and bookings.

## Endpoints

The following API endpoints are defined in the `app.js` file:

### User Endpoints

1. `POST /api/v1/user/signup`: Allows users to sign up with a username, email, password, first name, last name, birthdate, gender, address, and phone number.

2. `POST /api/v1/user/login`: Enables users to log in using their email and password.

3. `POST /api/v1/get-user`: Retrieves the user details based on the provided authentication token.

### Booking Endpoints

1. `GET /api/v1/bookings/get`: Fetches all bookings from the database.

2. `GET /api/v1/bookings/date/:date`: Retrieves bookings based on a specific date.

3. `GET /api/v1/bookings/search`: Searches for bookings based on query parameters provided in the URL.

4. `POST /api/v1/bookings/new`: Creates a new booking with various booking details like date, time, from, to, bus owner ID, start time, end time, category, seat bookings, bus number, amenities, bus fare, name, gender, age, email, mobile number, and seat number.

## Validation and Error Handling

The controllers `userController.js` and `bookingController.js` utilize `express-validator` to validate the incoming request data and handle validation errors. The `userValidationRules` and `bookingValidationRules` define the validation rules for the user and booking schemas, respectively.

If a validation error occurs, the API responds with a 400 status code and an array of error messages in JSON format.

## Database Models

The `userModel.js` and `BookingModel.js` files define the Mongoose schemas for users and bookings, respectively. These models help interact with the MongoDB collections and store user and booking data.

Dummy userModel

```json
{
  "username": "john_doe",
  "email": "john.doe@email.com",
  "password": "hashed_password_here",
  "firstName": "John",
  "lastName": "Doe",
  "birthdate": "1995-07-15",
  "gender": "male",
  "address": {
    "street": "123 Main Street",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "United States"
  },
  "phone": "123-456-7890",
  "createdAt": "2023-08-07T12:00:00Z",
  "updatedAt": "2023-08-07T14:30:00Z"
}

```
Dummy bookingSchema 
```json
{
  "date": "2023-08-15",
  "time": "10:00 AM",
  "from": "Patna",
  "to": "Mumbai",
  "busOwnerID": 12345,
  "startTime": 10,
  "EndTime": 16,
  "category": "AC Sleeper",
  "SeatBooked": ["A1", "A2", "B1"],
  "bus_no": "MH-01-AB-1234",
  "amenities_list": ["WiFi", "Charging Ports", "Refreshments"],
  "busFare": 1500.50,
  "busName": "Mumbai Express",
  "name": "John Doe",
  "gender": "male",
  "age": 30,
  "email": "john.doe@email.com",
  "mobileNo": "9876543210",
  "seatNumber": 12
}

```

## Authentication

User authentication is implemented using JWT (JSON Web Tokens). The `generateAuthToken` function in `userController.js` creates a JWT token with the user's ID and a secret key stored in the environment variable `JWT_SECRET`. This token is sent back to the client upon successful user login or signup.

## Error Handling

In case of any server errors, the API responds with a 500 status code and an error message in JSON format.

## Conclusion

This backend project provides a robust API for handling user signups, logins, and bookings. It uses Express.js, MongoDB, and Mongoose to manage data and includes validation and error handling for enhanced security and reliability.
