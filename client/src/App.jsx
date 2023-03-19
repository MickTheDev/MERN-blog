import './App.css';
import { Header, Post, Layout } from './components';
import {
  CreatePost,
  HomePage,
  LoginPage,
  RegisterPage,
  PostPage,
} from './pages';

import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path='/login'
            element={<LoginPage />}
          />
          <Route
            path='/register'
            element={<RegisterPage />}
          />
          <Route
            path='/create'
            element={<CreatePost />}
          />
          <Route
            path='/post/:id'
            element={<PostPage />}
          />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
