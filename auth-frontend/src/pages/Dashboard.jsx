import Navbar from '../components/Navbar';
import { ProtectedRoute } from '../utils/auth';
import { authService } from '../services/authService';

const Dashboard = () => {
  const userEmail = authService.getCurrentUser();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Hello, <span className="font-semibold text-blue-600">{userEmail}</span>! 
                You have successfully logged into your account.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-blue-800 mb-3">Account Information</h2>
                  <p className="text-blue-700">
                    Your account is active and secured with JWT authentication.
                  </p>
                  <div className="mt-4">
                    <span className="text-sm text-blue-600">Email: {userEmail}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-green-800 mb-3">Security</h2>
                  <p className="text-green-700">
                    Your password is securely hashed and stored in the database.
                  </p>
                  <div className="mt-4">
                    <span className="text-sm text-green-600">✓ JWT Token Active</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Application Features</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Secure user registration with password hashing</li>
                  <li>JWT-based authentication system</li>
                  <li>Protected routes and navigation</li>
                  <li>Responsive design with Tailwind CSS</li>
                  <li>H2 database integration (ready for SQL migration)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;