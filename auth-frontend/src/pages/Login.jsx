import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import { PublicRoute } from '../utils/auth';

const Login = () => {
  return (
    <PublicRoute>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <LoginForm />
        </div>
      </div>
    </PublicRoute>
  );
};

export default Login;