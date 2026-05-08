import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Header() {
  const [user] = useLocalStorage('user', null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="text-xl font-semibold text-gray-900">CommunityHub</span>
            </NavLink>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {user ? (
              <>
                <NavLink 
                  to="/user-profile" 
                  className={({ isActive }) => isActive 
                    ? 'text-gray-900 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                >
                  Profile
                </NavLink>
                <span className="ml-3 text-gray-600">Welcome, {user}!</span>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive 
                    ? 'text-gray-900 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/posts" 
                  className={({ isActive }) => isActive 
                    ? 'text-gray-900 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                >
                  Posts
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive 
                    ? 'text-gray-900 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                >
                  About
                </NavLink>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => isActive 
                    ? 'text-gray-900 border-b-2 border-indigo-500' 
                    : 'text-gray-600 hover:text-gray-900'
                  }
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;