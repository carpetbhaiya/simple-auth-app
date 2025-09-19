# 🔐 Full-Stack Authentication App

A complete authentication system built with **Spring Boot** (backend) and **React + Vite** (frontend), featuring JWT-based authentication and PostgreSQL database.

## ✨ Features

- 🔑 User registration and login
- 🛡️ JWT-based authentication
- 🔐 Password hashing with BCrypt
- 🎨 Responsive UI with Tailwind CSS
- 🐘 PostgreSQL database integration
- 🔒 Protected routes and navigation
- ⚡ Built with modern technologies

## 🛠️ Tech Stack

### Backend
- **Java 21**
- **Spring Boot 3.x**
- **Spring Security**
- **Spring Data JPA**
- **PostgreSQL**
- **JWT (jsonwebtoken)**
- **Maven**

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- ☕ Java 17+
- 🐘 PostgreSQL
- 📦 Node.js 16+
- 🔧 Maven

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/auth-app.git
cd auth-app
```

### 2. Database Setup

Create a PostgreSQL database:

```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create database
CREATE DATABASE authdb;

-- Create user (replace with your credentials)
CREATE USER your_username WITH ENCRYPTED PASSWORD 'your_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE authdb TO your_username;
```

### 3. Backend Setup

```bash
cd backend

# Update application.properties with your database credentials
# src/main/resources/application.properties

# Install dependencies and run
mvn clean install
mvn spring-boot:run
```

Backend will be available at: `http://localhost:8080`

### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at: `http://localhost:5173`

## 📋 API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/test` | Test endpoint |

### Example API Usage

#### Register User
```bash
curl -X POST http://localhost:8080/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

#### Login User
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

## 🔧 Configuration

### Backend Configuration

Update `backend/src/main/resources/application.properties`:

```properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/authdb
spring.datasource.username=your_username
spring.datasource.password=your_password

# JWT
jwt.secret=your-256-bit-secret-key-here
jwt.expiration=86400000
```

### Environment Variables (Recommended)

```bash
export DATABASE_URL=jdbc:postgresql://localhost:5432/authdb
export DATABASE_USERNAME=your_username
export DATABASE_PASSWORD=your_password
export JWT_SECRET=your-secure-jwt-secret-key
```
