import './App.css';
import { Header, Post, Layout } from './components';
import { HomePage, LoginPage, RegisterPage } from './pages';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
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
      </Route>
    </Routes>
  );
}

export default App;
