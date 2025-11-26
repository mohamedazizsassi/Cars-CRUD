# 🚗 Premium Auto Dealership - MEAN Stack Application

A modern, professional car dealership management system with a stunning UI/UX, built with **MongoDB**, **Express.js**, **Angular 17**, and **Node.js** (MEAN stack).

---

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Architecture](#architecture)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Data Model](#data-model)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

### 🎨 Modern UI/UX Design
- **Professional dealership interface** with gradient color schemes (Navy + Coral Red)
- **Hero section** with eye-catching background and call-to-action
- **Animated vehicle cards** with hover effects and smooth transitions
- **Responsive design** that works seamlessly on all devices
- **Font Awesome icons** integrated throughout the application

### 🚀 Core Functionality
- **Vehicle Inventory Management** - Add, view, update, and delete vehicles
- **Advanced Search & Filtering** - Search by name, brand, or specifications
- **Pagination** - Efficient browsing through large inventories
- **Featured Vehicles Showcase** - Highlight your latest arrivals
- **Detailed Vehicle Information** - Comprehensive specs and pricing
- **Professional Forms** - Modern, icon-enhanced input fields with validation

### 💼 Dealership Features
- **Dealer Information Display** - Location, hours, and contact details
- **Contact Dealer Button** - Direct customer engagement
- **Schedule Test Drive** - Call-to-action for potential buyers
- **Quality Assurance Section** - Build trust with guarantees and support info
- **Price Highlighting** - Clear, prominent pricing display

### 🛠️ Technical Features
- RESTful API with Express and MongoDB
- Reactive forms with validation
- SweetAlert2 integration for beautiful notifications
- Custom scrollbar styling
- Loading animations
- Modal dialogs for editing

---

## Screenshots

### Home Page
- Hero section with "Find Your Dream Car" headline
- Featured vehicles grid with modern card design
- "Why Choose Us" section with quality, pricing, and support highlights

### Inventory Management
- Professional dashboard with search functionality
- Data table with brand badges and price highlighting
- Edit/Delete actions with animated modals

### Vehicle Details
- Large image display with professional layout
- Detailed specifications and pricing
- Contact dealer and test drive buttons

### Add Vehicle Form
- Modern form with gradient header
- Icon-enhanced input fields
- Two-column responsive layout

---

## Architecture

```
MongoDB <--> Node.js/Express (RESTful API) <--> Angular 17 (SPA Frontend)
```

**Design Pattern:** MVC (Model-View-Controller)  
**Frontend Framework:** Angular 17 (Standalone Components)  
**Styling:** Custom CSS with Bootstrap 5 + Font Awesome 6  
**State Management:** Reactive Forms + Services

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

4. **Navigate through the app:**
   - **Home** (`/show-cars`) - Browse featured vehicles
   - **Our Inventory** (`/liste`) - View and manage all vehicles
   - **Add Vehicle** (`/ajouter`) - Add new vehicles to inventory

---

## API Endpoints

| Method | Endpoint        | Description        |
| ------ | --------------- | ------------------ |
| GET    | `/api/cars`     | List all cars      |
| GET    | `/api/cars/:id` | Get car by ID      |
| POST   | `/api/cars`     | Create a new car   |
| PUT    | `/api/cars/:id` | Update a car by ID |
| DELETE | `/api/cars/:id` | Delete a car by ID |

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
  angular-frontend/          # Angular 17 frontend (Standalone)
    src/
      app/
        ajout-car/           # Add vehicle form with modern UI
        car-info/            # Vehicle details page with dealer info
        gestion-car/         # Inventory management dashboard
        show-cars/           # Home page with featured vehicles
        header/              # Navigation header with branding
        services/            # HTTP services for API calls
        environments/        # Environment configurations
      styles.css             # Global styles with custom theme
      
  backend/                   # Node.js/Express backend
    src/api/
      controllers/           # Business logic controllers
      models/                # Mongoose schema models
      routes/                # API route definitions
      config/                # Configuration files
      database/              # Database connection setup
    index.js                 # Express server entry point
```

---

## Technologies Used

### Frontend
- **Angular 17** - Latest version with standalone components
- **TypeScript** - Type-safe development
- **Bootstrap 5** - Responsive grid system
- **Font Awesome 6** - Beautiful icon library
- **SweetAlert2** - Elegant alert dialogs
- **RxJS** - Reactive programming

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

### Design Features
- **Custom CSS Animations** - Smooth transitions and hover effects
- **Gradient Color Schemes** - Modern visual appeal
- **Custom Scrollbar** - Branded scrollbar styling
- **Responsive Design** - Mobile-first approach
- **Glass Morphism** - Modern UI trend elements

---

## Color Palette

- **Primary Dark:** `#1a1a2e`, `#16213e`
- **Accent Red:** `#e94560`, `#ff6b6b`
- **Background:** `#f5f7fa`, `#e4e9f2`
- **Text:** `#1a1a2e`, `#333`, `#666`

---

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Image upload functionality
- [ ] Advanced filtering (price range, brand, year)
- [ ] Customer reviews and ratings
- [ ] Financing calculator
- [ ] Comparison feature for vehicles
- [ ] Email notifications
- [ ] Dark mode toggle

---

## License

This project is licensed under the MIT License.

---

## Author

**Mohamed Aziz Sassi**  
GitHub: [@mohamedazizsassi](https://github.com/mohamedazizsassi)

---

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/mohamedazizsassi/Cars-CRUD/issues).

---

## Show Your Support

Give a ⭐️ if you like this project! 