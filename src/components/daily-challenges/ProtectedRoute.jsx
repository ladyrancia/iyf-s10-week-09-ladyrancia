import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [user] = useLocalStorage('user', null);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;