package com.auth.auth_backend.dto;

public class AuthResponse {
    private String token;
    private String message;
    private String email;

    public AuthResponse() {}

    public AuthResponse(String token, String message, String email) {
      this.token = token;
      this.message = message;
      this.email = email;
    }
    
    public String getToken() {
      return this.token;
    }
    public void setToken(String value) {
      this.token = value;
    }

    public String getMessage() {
      return this.message;
    }
    public void setMessage(String value) {
      this.message = value;
    }

    public String getEmail() {
      return this.email;
    }
    public void setEmail(String value) {
      this.email = value;
    }
}
