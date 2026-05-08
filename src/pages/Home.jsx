import { useFetch } from '../hooks/useFetch';
import PostCard from '../components/Post/PostCard';

function Home() {
  const { data: posts, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to CommunityHub</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Stay updated with the latest posts from our community.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;