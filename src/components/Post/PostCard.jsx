import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="block hover:shadow-xl transition-shadow">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post.body}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span># {post.id}</span>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;