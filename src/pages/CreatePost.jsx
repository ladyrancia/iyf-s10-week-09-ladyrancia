import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/shared';
import { Input } from '../components/shared';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          userId: 1, // Assuming a fixed user for simplicity
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const newPost = await response.json();
      // In a real app, we might update the list or navigate to the new post
      navigate(`/posts/${newPost.id}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Post</h1>
      {error && <div className="mb-4 p-4 bg-red-50 text-red-500 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
            Body
          </label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter post content"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            required
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          loading={loading}
          className="w-full"
        >
          Create Post
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;