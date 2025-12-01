### Clothing Store E-Commerce

A full-stack e-commerce web application built with MERN (MongoDB, Express, React, Node.js) that allows users to browse products, filter by category, size, price, add items to cart, and place orders. Orders trigger email confirmations to users.

### Features

Product Catalog: Browse all products with images, descriptions, prices, and sizes.

Search & Filters: Search products by name/description, filter by category, size, and price range.

Pagination: Products displayed with pagination for better navigation.

Shopping Cart: Add, update, and remove items in cart.

User Authentication: Register and login users with hashed passwords.

Order Management: Place orders, stock reduction, and email confirmation sent.

Responsive UI: Mobile-friendly design with React components.

### 🛠️Tech Stack

Frontend: React, React Router, Axios, CSS

Backend: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: JWT tokens, HTTP-only cookies

Email Service: Nodemailer (Gmail)

### Installation

Clone the repository:

git clone <your-repo-url>
cd clothing-ecommerce


Install backend dependencies:

cd backend
npm install


Install frontend dependencies:

cd ../frontend
npm install


Create a .env file in the backend directory:

PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EMAIL_USER=<your-gmail-address>
EMAIL_PASS=<your-gmail-app-password>


Start the backend server:

cd backend
nodemon server.js


Start the frontend:

cd frontend
npm start

Folder Structure
backend/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 ├─ middleware/
 ├─ utils/
 ├─ server.js
frontend/
 ├─ src/
     ├─ components/
     ├─ pages/
     ├─ App.js
     ├─ index.js

### API Endpoints

Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login user

Products

GET /api/products → Get all products with filters and pagination

GET /api/products/:id → Get product by ID

Cart

POST /api/cart/add → Add item to cart

PUT /api/cart/update → Update item quantity

DELETE /api/cart/remove → Remove item from cart

GET /api/cart → Get user's cart

Orders

POST /api/orders → Create new order (checkout)

Notes

Make sure to allow less secure apps in Gmail or use an App Password for Nodemailer.

Ensure MongoDB Atlas URI is correct and accessible from your network.

