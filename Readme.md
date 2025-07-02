# PaymentsApp

A simple full-stack payments application that allows users to sign up, sign in, view their balance, and send money to other users. The app uses MongoDB transactions to ensure safe and atomic money transfers.

## Tech Stack

- **Frontend:** React, Axios, TailwindCSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT (JSON Web Tokens)

## Features

- User registration and authentication (JWT-based)
- View account balance
- Search for users
- Send money to other users
- All money transfers use MongoDB sessions for transaction safety

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

#### Backend

1. Go to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file with your MongoDB URI and JWT secret:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
4. Start the backend server:
    ```sh
    npm start
    ```

#### Frontend

1. Go to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the frontend dev server:
    ```sh
    npm run dev
    ```

## Usage

- Sign up for a new account.
- Sign in to your account.
- View your balance on the dashboard.
- Search for other users and send them money.
- All transactions are handled safely using MongoDB sessions.

## Project Structure

- `backend/` - Express.js API, MongoDB models, authentication, and transaction logic
- `frontend/` - React app for user interface

## License

MIT