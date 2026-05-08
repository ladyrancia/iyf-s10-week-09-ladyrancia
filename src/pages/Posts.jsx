import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import PostCard from '../components/Post/PostCard';

function Posts() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all posts
  const { data: allPosts, loading: fetchLoading, error: fetchError } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // Update posts state when data changes
  React.useEffect(() => {
    if (fetchLoading) {
      setLoading(true);
      setError(null);
    } else if (fetchError) {
      setLoading(false);
      setError(fetchError);
    } else {
      setPosts(allPosts || []);
      setLoading(false);
    }
  }, [allPosts, fetchLoading, fetchError]);

  // Filter posts based on search
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  if (loading && posts.length === 0) return <div className="text-center py-10">Loading posts...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">All Posts</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length === 0 ? (
          <p className="col-span-3 text-center text-gray-500">No posts found matching your search.</p>
        ) : (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;