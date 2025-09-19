import SignupForm from '../components/SignupForm';
import Navbar from '../components/Navbar';
import { PublicRoute } from '../utils/auth';

const Signup = () => {
  return (
    <PublicRoute>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <SignupForm />
        </div>
      </div>
    </PublicRoute>
  );
};

export default Signup;