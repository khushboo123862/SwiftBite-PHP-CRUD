# SwiftBite - Full-Stack Food Delivery Web Application

SwiftBite is a high-performance, secure food delivery platform developed to provide a seamless ordering experience. It features a robust administrative dashboard and high-level security protocols for user data protection.

## 🛠️ Technical Stack
- **Frontend:** HTML5, Custom CSS3 (Flexbox & Grid), JavaScript (ES6+)
- **Backend:** Core PHP
- **Database:** MySQL (Relational Database Management)
- **Communication:** AJAX, JSON
- **Security:** JWT (JSON Web Tokens), OTP Verification, RBAC

## 🚀 Key Features

### 🔐 Advanced Security & Authentication
- **Secure Login:** Integrated **JWT (JSON Web Tokens)** for stateless and secure user sessions.
- **Two-Factor Safety:** Implemented **OTP Verification** to ensure authentic user registration and account recovery.
- **Access Control:** Developed **RBAC (Role-Based Access Control)** to differentiate permissions between Customers and Administrators.

### 🍱 Full-Stack Functionality
- **Dynamic CRUD:** A complete **Create, Read, Update, and Delete** system for managing food categories, pricing, and inventory.
- **Real-time Cart:** Developed an interactive shopping cart using **AJAX**, allowing users to add/remove items without page reloads.
- **Data Integrity:** Implemented strict client-side and server-side **Form Validation** to prevent SQL injection and ensure clean data entry.

### 📱 Modern & Responsive UI
- **Custom CSS Architecture:** Built from scratch using CSS Variables and Media Queries for a 100% mobile-responsive design.
- **Asynchronous Data Handling:** Used **JSON** for smooth data exchange between the frontend and the MySQL database.

## 📂 Project Structure
- `/assets`: Images and CSS files.
- `/config`: Database connection and security constants.
- `/auth`: Login, JWT handling, and OTP logic.
- `/admin`: Management dashboard for food items and orders.
- `index.php`: Main landing page with dynamic product listing.

## 🔧 Installation
1. Clone the repository: `git clone https://github.com/khushboo123862/SwiftBite-PHP-CRUD.git`
2. Import the `.sql` database file into your MySQL server.
3. Update database credentials in `config.php`.
4. Run the project using XAMPP/WAMP or any PHP server.
5.
