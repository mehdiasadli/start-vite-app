import { Navigate, Route, Routes } from 'react-router-dom';
import { CategoriesPage, Dashboard, LandingPage, VotingPage } from '../pages';
import { AuthLayout, Layout } from '../components';
import { useAuth } from '../store/auth.store';

export default function Navigator() {
  const { token, user } = useAuth();

  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path='/' element={!token ? <AuthLayout /> : <Navigate to='/categories' />}>
        <Route index element={<LandingPage />} />
      </Route>
      {/* PRIVATE ROUTES */}
      <Route path='/categories' element={token ? <Layout /> : <Navigate to='/' />}>
        <Route index element={<CategoriesPage />} />
        <Route path=':id' element={<VotingPage />} />
      </Route>
      {/* ADMIN ROUTES */}
      <Route
        path='/dashboard'
        element={
          token && user?.isAdmin ? <Layout /> : <Navigate to={token ? '/categories' : '/'} />
        }
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
