
# Inventory Management System

## Overview

The Inventory Management System (IMS) is a web-based application designed to help manage and track products in a business's inventory. This system enables administrators to manage products, view high-selling products, track stock levels, and monitor sales. Additionally, the application supports user authentication, including separate login functionalities for administrators and patients.

The application is built using **Python (Flask)** for the backend, **MySQL** for database management, and a combination of **HTML**, **CSS**, and **JavaScript** for the frontend.

## Features

- **User Authentication**: Secure login functionality for different roles (Admin, Doctor, Patient).
- **Product Management**:
  - Admins can add, update, and view products in the inventory.
  - Admins can view product details, including price, quantity, and sales.
- **High-Selling Products**: Displays the top-selling products based on sales data.
- **Search and Filtering**: Users can search for products and filter them by category or name.
- **Responsive Design**: Mobile-friendly user interface.
- **Chatbot Integration**: A chatbot to assist users and answer queries.

## Tech Stack

- **Backend**: Python (Flask)
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript
- **User Authentication**: Flask-Login
- **Database Connector**: MySQL Connector (Python)
- **Web Styling**: Custom CSS, FontAwesome for icons
- **Chatbot**: Integrated with the frontend for user interaction

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/inventory-management-system.git
cd inventory-management-system
```

### 2. Install Python Dependencies

Ensure Python 3.x is installed. Then, use pip to install the required dependencies from `requirements.txt`.

```bash
pip install -r requirements.txt
```

### 3. Setup MySQL Database

- Install MySQL locally using **XAMPP** or **MySQL Workbench**.
- Create a new database, for example, `inventory_db`.

Example SQL Schema:

```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    quantity INT,
    sales INT
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'doctor', 'patient') NOT NULL
);
```

### 4. Update Database Configuration

In `app.py` or the configuration file, update the database connection details.

```python
import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',       # Update with your MySQL username
        password='password',   # Update with your MySQL password
        database='inventory_db'    # Name of your database
    )
```

### 5. Run the Application

Start the Flask server using the following command:

```bash
flask run
```

Your application will now be running at `http://localhost:5000`.

## Usage

- **Admin Login**: Admin users can manage products, view high-selling products, and track bed availability.
- **Product Management**: Admin can add, update, or remove products from the inventory.
- **High-Selling Products**: Admins can view the top 10 high-selling products on the "High-Selling Products" page.
- **Search Products**: Users can search for products by name, category, and filter results.

## Database Schema

- **products**:
  - `id`: Auto-increment primary key.
  - `name`: Product name.
  - `description`: A description of the product.
  - `price`: The price of the product.
  - `quantity`: Available stock.
  - `sales`: The number of units sold.

- **users**:
  - `id`: Auto-increment primary key.
  - `username`: Username for login.
  - `password`: Hashed password for login.
  - `role`: Role of the user (admin, doctor, or patient).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Flask** for the backend framework.
- **MySQL** for database management.
- **HTML, CSS, JavaScript** for frontend development.
 
## outputs
![Screenshot (120)](https://github.com/user-attachments/assets/be29a641-9cde-4558-bf8f-ea5ad8cb1da5)

![Screenshot (121)](https://github.com/user-attachments/assets/d4d07e21-0cb8-4c4b-8c78-2999a36b7c3a)

![Screenshot (122)](https://github.com/user-attachments/assets/16db449e-e254-4b4f-813a-ab197a611604)

![Screenshot (123)](https://github.com/user-attachments/assets/0f849382-e08d-4aa1-8c24-f6e54a95bc69)

This README provides the necessary instructions for setting up and using the Inventory Management System. If you need any modifications or additional features, feel free to ask!
