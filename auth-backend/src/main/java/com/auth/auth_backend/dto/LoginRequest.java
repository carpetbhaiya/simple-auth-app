package com.auth.auth_backend.dto;

public class LoginRequest {

    private String email;
    private String password;

    public LoginRequest() {}
    
    public LoginRequest(String email, String password) {
      this.email = email;
      this.password = password;
    }
    

    public String getEmail() {
      return this.email;
    }
    public void setEmail(String value) {
      this.email = value;
    }

    public String getPassword() {
      return this.password;
    }
    public void setPassword(String value) {
      this.password = value;
    }
}
