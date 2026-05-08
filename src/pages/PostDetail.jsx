import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Button } from '../components/shared';

function PostDetail() {
  const { postId } = useParams();
  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <div className="text-center py-10">Loading post...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!post) return <div className="text-center py-10">Post not found</div>;

  return (
    <div className="py-10">
      <div className="max-w-2xl mx-auto">
        <Button onClick={() => window.history.back()} variant="secondary" size="sm">
          &larr; Back to Posts
        </Button>
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.body}</p>
        <div className="text-sm text-gray-500 border-t pt-4">
          Post ID: {post.id}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;