# Weather Application

This is a weather application built using React.js, Express.js, and Handlebars (hbs). The app provides weather information for a specified location, along with basic user authentication features (registration and login).

## Features

- Get weather information based on the provided address.
- User registration and login.
- Error handling for invalid or missing data.
- Custom 404 page for handling undefined routes.

## Tech Stack

- **Frontend:** Handlebars (hbs)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose)
- **Weather Data Provider:** External API (utilized in `weatherData` function)

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (for the database)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/m0hitchaudhary/Weather-Application.git
   cd Weather-Application
2. **Install dependencies:**
   
   ```bash
   npm install

4. **Configure the environment:**
   
   Create a .env file in the root directory.
   Add your MongoDB connection string and any other environment variables, such as:

   PORT=3000
   MONGO_URI=your_mongodb_connection_string

5. **Run the application:**

   ```bash
   npm run dev

   The server will start on http://localhost:3000.

## Folder Structure


    weather-application/
    ├── public/                 # Static files (CSS, images, etc.)
    ├── templates/              # Templates for views
    │   ├── views/              # Main views
    │   └── partials/           # Partial views (header, footer, etc.)
    ├── utils/                  # Utility functions (weatherData.js)
    ├── models/                 # Mongoose models
    ├── db/                     # Database connection
    ├── app.js                  # Main server file
    └── .env                    # Environment variables


## API Endpoints

  GET / - Home page.
  
  GET /home - Redirects to home page.
  
  GET /register - Displays registration form.
  
  POST /register - Registers a new user.
  
  GET /login - Displays login form.
  
  POST /login - Authenticates a user.
  
  GET /weather - Fetches weather data for a given address (query parameter address is required).
  
  GET / - 404 error page for any undefined routes.


## Contributing

  Contributions are welcome! Please submit a pull request or open an issue for any improvements or bug fixes.

## Acknowledgements

  Express.js
  
  Handlebars
  
  Node.js
  
  MongoDB

