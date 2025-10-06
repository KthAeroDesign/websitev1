# KTH Aero Design Website

This repository contains the source code for the official website of the KTH Aero Design team. The project is a monorepo consisting of a React frontend and a Spring Boot backend.

## Project Structure

The repository is organized into two main parts:

-   `frontend/`: A React application built with Vite that serves as the user interface.
-   `backend/`: A Spring Boot application that provides a REST API for the frontend.

---

## Backend

The backend is a Java-based Spring Boot application that handles business logic and data persistence.

### Prerequisites

-   Java 21 or later
-   Maven 3.8 or later

### Key Technologies

-   **Spring Boot 3.3**: Core framework for building the application.
-   **Spring Web**: For creating RESTful APIs.
-   **Spring Data JPA**: For database interaction.
-   **H2 Database**: In-memory database for development and testing.
-   **Lombok**: To reduce boilerplate code.

### Getting Started

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Build the project:**
    ```bash
    ./mvnw clean install
    ```

3.  **Run the application:**
    ```bash
    ./mvnw spring-boot:run
    ```

The backend server will start on `http://localhost:8080`.

---

## Frontend

The frontend is a modern React application built with TypeScript and Vite for a fast development experience.

### Prerequisites

-   Node.js 20 or later
-   npm 10 or later

### Key Technologies

-   **React 19**: For building the user interface.
-   **Vite**: A fast build tool and development server.
-   **TypeScript**: For type-safe JavaScript.
-   **React Router**: For client-side routing.
-   **ESLint**: For code linting.

### Getting Started

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The frontend development server will start on `http://localhost:5173`.

---

## Full Project Setup

To run the entire project, you will need to have both the backend and frontend servers running simultaneously.

1.  **Start the backend server** in one terminal window (from the `backend` directory):
    ```bash
    ./mvnw spring-boot:run
    ```

2.  **Start the frontend server** in another terminal window (from the `frontend` directory):
    ```bash
    npm run dev
    ```

You can now access the website by navigating to `http://localhost:5173` in your browser.