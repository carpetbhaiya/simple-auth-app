# 🔧 Backend - Spring Boot Authentication API

REST API for user authentication built with Spring Boot, Spring Security, and PostgreSQL.

## 🛠️ Technologies

- Java 17
- Spring Boot 3.x
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT (jsonwebtoken)
- BCrypt for password hashing
- Maven

## 🚀 Getting Started

### Prerequisites
- Java 17+
- PostgreSQL
- Maven

### Setup

1. **Database Setup**
```sql
CREATE DATABASE authdb;
CREATE USER your_username WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE authdb TO your_username;
```

2. **Configuration**
Update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/authdb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

3. **Run Application**
```bash
mvn clean install
mvn spring-boot:run
```

Server runs on: `http://localhost:8080`

## 📋 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/test` - Test endpoint

### Request/Response Examples

**Signup Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Login Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login successful",
  "email": "user@example.com"
}
```

## 🏗️ Project Structure

```
src/main/java/com/auth/app/
├── config/
│   └── SecurityConfig.java
├── controller/
│   └── AuthController.java
├── dto/
│   ├── AuthResponse.java
│   ├── LoginRequest.java
│   └── SignupRequest.java
├── entity/
│   └── User.java
├── repository/
│   └── UserRepository.java
├── service/
│   └── AuthService.java
├── util/
│   └── JwtUtil.java
└── AuthApplication.java
```

## 🔐 Security Features

- Password hashing with BCrypt
- JWT token generation and validation
- CORS configuration for frontend
- Secure endpoints with Spring Security
