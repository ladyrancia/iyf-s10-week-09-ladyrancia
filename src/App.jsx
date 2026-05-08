import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import ProtectedRoute from './components/daily-challenges/ProtectedRoute';
import UserProfile from './pages/UserProfile';
import UserSearch from './components/daily-challenges/UserSearch';
import TabsDemo from './components/daily-challenges/TabsDemo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="create-post" element={
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        } />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="user-search" element={<UserSearch />} />
        <Route path="tabs-demo" element={<TabsDemo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;