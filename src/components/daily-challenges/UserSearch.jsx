import { useState, useEffect } from 'react';

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [state, setState] = useState({ users: [], loading: false, error: null });

  // Debounce the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Fetch users and update state when debouncedTerm changes
  useEffect(() => {
    if (!debouncedTerm) {
      setState({ users: [], loading: false, error: null });
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    fetch(`https://jsonplaceholder.typicode.com/users?name=${debouncedTerm}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then(data => {
        setState({ users: data, loading: false, error: null });
      })
      .catch(err => {
        setState({ users: [], loading: false, error: err.message });
      });
  }, [debouncedTerm]);

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">User Search Component</h2>
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search Users
        </label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search users..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {state.loading && <p className="text-center">Searching users...</p>}
      
      {state.error && <p className="text-center text-red-500">Error: {state.error}</p>}
      
      {!state.loading && !state.error && state.users.length === 0 && debouncedTerm && (
        <p className="text-center text-gray-500">No users found matching "{debouncedTerm}"</p>
      )}
      
      {!state.loading && !state.error && state.users.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Results ({state.users.length})</h3>
          <div className="space-y-3">
            {state.users.map(user => (
              <div key={user.id} className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {/* Using placeholder avatar since we don't have real images */}
                    <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">ID: {user.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserSearch;