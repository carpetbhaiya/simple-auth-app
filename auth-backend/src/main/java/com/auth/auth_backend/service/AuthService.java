package com.auth.auth_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth.auth_backend.dto.AuthResponse;
import com.auth.auth_backend.dto.LoginRequest;
import com.auth.auth_backend.dto.SignupRequest;
import com.auth.auth_backend.entity.User;
import com.auth.auth_backend.repository.UserRepository;
import com.auth.auth_backend.utill.JwtUtil;

import java.util.Optional;

@Service
public class AuthService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    public AuthResponse signup(SignupRequest signupRequest) {
        // Check if user already exists
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return new AuthResponse(null, "Email already exists", null);
        }
        
        // Create new user with hashed password
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        
        userRepository.save(user);
        
        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail());
        
        return new AuthResponse(token, "User registered successfully", user.getEmail());
    }
    
    public AuthResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());
        
        if (userOptional.isEmpty()) {
            return new AuthResponse(null, "User not found", null);
        }
        
        User user = userOptional.get();
        
        // Check password
        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return new AuthResponse(null, "Invalid credentials", null);
        }
        
        // Generate JWT token
        String token = jwtUtil.generateToken(user.getEmail());
        
        return new AuthResponse(token, "Login successful", user.getEmail());
    }
}
