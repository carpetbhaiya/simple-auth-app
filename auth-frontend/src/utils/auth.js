import { authService } from '../services/authService';

// Protected Route component
export const ProtectedRoute = ({ children }) => {
  if (!authService.isAuthenticated()) {
    window.location.href = '/login';
    return null;
  }
  return children;
};

// Public Route component (redirect to dashboard if already authenticated)
export const PublicRoute = ({ children }) => {
  if (authService.isAuthenticated()) {
    window.location.href = '/dashboard';
    return null;
  }
  return children;
};