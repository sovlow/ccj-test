# Coffee Club Japan Ordering System

This project is a web-based ordering system designed for **Coffee Club Japan**, where administrators can manage the menu, and customers or waiters can place orders. The system is built using **Laravel** for the backend and **React** for the frontend, with additional libraries like **Axios** and **ShadCN** for UI components.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Libraries](#libraries)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **PHP 8.2+** and **Composer** for running the Laravel backend.
- **Node.js 20.x+** and **npm/yarn** for managing frontend dependencies and React integration.
- **Docker** (optional) for setting up a containerized development environment.
- **Database**: MySQL, PostgreSQL, or any database supported by Laravel.
  
## Features

### Admin Panel:
- **CRUD operations for the menu**: Admins can create, update, read, and delete menu items.
- **Menu Management**: Organize and categorize items (e.g., beverages, desserts, etc.).

### Customer/Waiter Interface:
- **Browse and Order Menu Items**: Customers and waiters can view the available items and place orders.
- **Responsive Design**: The interface adapts to both desktop and mobile devices for ease of use.

## Installation

### Backend (Laravel Setup)

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/coffee-club-japan.git
    cd coffee-club-japan
    ```

2. Install Laravel dependencies:
    ```bash
    composer install
    ```

3. Set up the `.env` file for your environment:
    ```bash
    cp .env.example .env
    ```

4. Generate the application key:
    ```bash
    php artisan key:generate
    ```

5. Run database migrations:
    ```bash
    php artisan migrate
    ```

### Frontend (React Setup)

1. Install Node.js dependencies:
    ```bash
    npm install
    ```

2. Run the development server:
    ```bash
    npm run dev
    ```

### Build for Production

1. Compile assets for production:
    ```bash
    npm run build
    ```

2. Start the Laravel application:
    ```bash
    php artisan serve
    ```

## Usage

- **Admin** can log into the admin panel to manage the coffee shop's menu items.
- **Customers/Waiters** can browse the menu, add items to their order, and place an order directly from the app.

### Example Workflow

1. **Admin**: Adds new menu items, updates item details, and removes out-of-stock items.
2. **Customer/Waiter**: Selects items from the menu, places an order, and receives confirmation.