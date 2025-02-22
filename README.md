# textToImageGenerator


This project is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack.  It provides [briefly describe the project's purpose - e.g., a platform for sharing recipes, a task management tool, etc.].

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure) 
- [Features](#features) (Optional)



## Introduction

This is Project aims to simplify the image generated form texts. Simply pass the prompt and get your AI version Image

## Technologies Used

This project leverages the following technologies:

*   **Frontend:** React, Recoil, React Router DOM, Tailwind CSS
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Other:**  Axios (for API requests), CORS (for cross-origin resource sharing), JSON Web Token (JWT) for authentication, Bcrypt for password hashing.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/pankaj-gitcode/textToImageGenerator.git  
    cd your-project-directory
    ```

2.  **Install dependencies:**

    ```bash
    # For both frontend and backend
    npm install
    ```

    Or, if you separate client and server:

    ```bash
    cd client  # Go to the frontend directory
    npm install

    cd ../server # Go to the backend directory
    npm install
    ```

    Ensure you have the following dependencies installed (either via `npm install` or `yarn add`):

    ```
    bcrypt
    cors
    axios
    mongoose
    express
    recoil
    react-router-dom
    jsonwebtoken
    ```

3. (Optional) **Set up environment variables:**

    Create a `.env` file in the root directory (or in the respective client/server directories if separated) and add your environment variables.  For example:

    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    # ... other environment variables
    ```

## Running the Application

1.  **Start the backend server:**

    ```bash
    npm run server
    ```

2.  **Start the frontend development server:**

    ```bash
    npm run dev
    ```

3.  **Open your browser:**

    Navigate to `http://localhost:5173` (or the port specified by your frontend development server) to access the application.


