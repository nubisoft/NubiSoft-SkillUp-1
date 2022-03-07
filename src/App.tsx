import { Route, Routes } from 'react-router-dom';

import DefaultLayout from '@/layout/DefaultLayout';
import Dashboard from '@/views/Dashboard';
import Users from '@/views/Users';

import OldStyle from './views/OldStyle';
import UserAlbums from './views/UserAlbums';
import UserPosts from './views/UserPosts';

import './App.css';

function App() {
  return (
    <main id="app">
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId/posts" element={<UserPosts />} />
          <Route path="/users/:userId/albums" element={<UserAlbums />} />
          <Route path="/old-style" element={<OldStyle />} />
        </Routes>
      </DefaultLayout>
    </main>
  );
}

export default App;
