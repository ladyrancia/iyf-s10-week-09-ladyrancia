import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Tabs from '../../components/daily-challenges/Tabs';
import PostCard from '../../components/Post/PostCard';

function UserProfile() {
  const [userId] = useState(1); // Fixed user ID for demo
  const [user, setUser] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userTodos, setUserTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user data
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch user's posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        if (!postsResponse.ok) {
          throw new Error('Failed to fetch user posts');
        }
        const postsData = await postsResponse.json();
        setUserPosts(postsData);

        // Fetch user's todos
        const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
        if (!todosResponse.ok) {
          throw new Error('Failed to fetch user todos');
        }
        const todosData = await todosResponse.json();
        setUserTodos(todosData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) return <div className="text-center py-10">Loading user profile...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  const tabs = [
    {
      label: 'User Info',
      content: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-700"><strong>Website:</strong> {user.website}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">
              {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-gray-700"><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <p className="text-gray-700"><strong>Name:</strong> {user.company.name}</p>
            <p className="text-gray-700"><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
            <p className="text-gray-700"><strong>BS:</strong> {user.company.bs}</p>
          </div>
        </div>
      )
    },
    {
      label: 'Posts',
      content: (
        <div>
          {userPosts.length === 0 ? (
            <p className="text-center text-gray-500">No posts found.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {userPosts.map(post => (
                <PostCard key={post.id} post={post} className="hover:shadow-xl transition-shadow" />
              ))}
            </div>
          )}
        </div>
      )
    },
    {
      label: 'Todos',
      content: (
        <div>
          {userTodos.length === 0 ? (
            <p className="text-center text-gray-500">No todos found.</p>
          ) : (
            <div className="space-y-3">
              {userTodos.map(todo => (
                <div key={todo.id} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      readOnly
                      className="h-4 w-4 text-indigo-600"
                    />
                    <div>
                      <p className={`
                        text-sm font-medium 
                        ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}
                      `}>{todo.title}</p>
                    </div>
                  </div>
                  <span className={`
                    px-2 py-1 text-xs font-medium rounded 
                    ${todo.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {todo.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
        <Tabs tabs={tabs} className="mb-6" />
      </div>
    </div>
  );
}

export default UserProfile;