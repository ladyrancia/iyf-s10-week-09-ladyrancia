import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/shared';
import { Input } from '../components/shared';
import { useLocalStorage } from '../hooks/useLocalStorage';

function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [, setUser] = useLocalStorage('user', null);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Simulate login by storing username in localStorage
    if (username.trim()) {
      setUser(username);
      navigate('/');
    } else {
      setError('Please enter a username');
    }
    setLoading(false);
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Login to CommunityHub</h1>
      {error && <div className="mb-4 p-4 bg-red-50 text-red-500 rounded">{error}</div>}
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            loading={loading}
            className="w-full"
          >
            Login
          </Button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          This is a simulated login. Just enter any username to continue.
        </p>
      </div>
    </div>
  );
}

export default Login;