# Car Management MEAN Stack Application

A full-stack web application for managing cars, built with **MongoDB**, **Express.js**, **Angular**, and **Node.js** (MEAN stack).

---

## Table of Contents
- [Features](#features)
- [Architecture](#architecture)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Data Model](#data-model)
- [Project Structure](#project-structure)
- [License](#license)

---

## Features
- Add, view, update, and delete cars.
- Responsive Angular frontend with Bootstrap styling.
- RESTful API with Express and MongoDB.
- Modular code structure for scalability.

---

## Architecture

```
MongoDB <--> Node.js/Express (API) <--> Angular (Frontend)
```

---

## Backend Setup

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in the `backend` directory with:
   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/carsdb
   ```

3. **Start the backend server:**
   ```bash
   node index.js
   ```
   The API will be available at `http://localhost:3000/api/`.

---

## Frontend Setup

1. **Install dependencies:**
   ```bash
   cd angular-frontend
   npm install
   ```

2. **Configure API endpoint (optional):**

   The default API URL is set in `src/app/environments/environments.ts`:
   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000',
     prefix: 'api',
   }
   ```

3. **Start the Angular development server:**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:4200/`.

---

## API Endpoints

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/cars`        | List all cars          |
| GET    | `/api/cars/:id`    | Get car by ID          |
| POST   | `/api/cars`        | Create a new car       |
| PUT    | `/api/cars/:id`    | Update a car by ID     |
| DELETE | `/api/cars/:id`    | Delete a car by ID     |

---

## Data Model

A car document in MongoDB has the following structure:

```json
{
  "nom": "string",
  "marque": "string",
  "caracteristique": "string",
  "prix": number,
  "picture": "string (URL, optional)"
}
```

---

## Project Structure

```
PROJET-MEAN/
  angular-frontend/   # Angular 17 frontend
    src/app/
      ajout-car/      # Add car component
      car-info/       # Car details component
      gestion-car/    # Car management
      show-cars/      # List cars
      services/       # Angular services (API calls)
      header/         # Header component
      environments/   # Environment configs
  backend/            # Node.js/Express backend
    src/api/
      controllers/    # API controllers
      models/         # Mongoose models
      routes/         # API routes
      config/         # Config files
      database/       # Database config
```

---

## License

This project is licensed under the MIT License.

---

**Author:** Mohamed Aziz Sassi 