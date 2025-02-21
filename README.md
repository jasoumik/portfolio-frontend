# Portfolio Frontend with React & Laravel API

This is a full-stack project using React for the frontend and Laravel for the backend API. This guide will help you set up and run both parts of the project on your local machine.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (for React)
- **npm** (Node package manager)
- **PHP** (for Laravel)
- **Composer** (for PHP package management)
- **MySQL** (or another database for Laravel)
- **Laravel** (for the API backend)

## Setting Up the Frontend (React)

 1. Clone the repository:
git clone https://github.com/your-username/portfolio-frontend.git
cd portfolio-frontend
2. Install dependencies:
npm install
3. Start the React development server:
npm start
This will start the frontend server at http://localhost:3000.

Setting Up the Backend (Laravel API)
1. Clone the repository (if you haven't already):
git clone https://github.com/your-username/portfolio-backend.git
cd portfolio-backend
2. Install Composer dependencies:
composer install
3. Create a .env file:
Copy the .env.example file to .env:
cp .env.example .env
4. Generate the application key:
php artisan key:generate
5. Set up your database:
Make sure your database settings in .env are correct. Update the following values based on your setup:

env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
6. Run the migrations:
php artisan migrate
7. Start the Laravel development server:
php artisan serve
This will start the backend server at http://127.0.0.1:8000.

Testing the API
Once both the frontend and backend are running, you can test the API by visiting http://127.0.0.1:8000/api/projects in your browser or using an API tool like Postman.

Troubleshooting
404 Not Found Error:

Ensure your routes in routes/api.php are set up correctly.
Run php artisan route:list to verify your API routes are listed.
CORS Issues:

If you're facing CORS (Cross-Origin Resource Sharing) issues, make sure you have fruitcake/laravel-cors installed and properly configured in app/Http/Kernel.php.
Frontend API Request Not Working:

Ensure your React frontend is making requests to the correct backend URL (http://127.0.0.1:8000/api/).
Additional Notes
This project assumes you're familiar with the basics of React, Laravel, and API development.
The frontend React project uses TypeScript and the backend is powered by Laravel and MySQL.
For production, make sure to set up proper environment configurations for both frontend and backend.

