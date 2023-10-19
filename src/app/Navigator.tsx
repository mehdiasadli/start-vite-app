import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthLayout, PrivateLayout } from '../components';
import { LandingPage, LoginPage, ProfilePage } from '../pages';

export default function Navigator() {
  const isAuthenticated = false; // TODO: isAuthenticated logic has to be implemented

  return (
    <Routes>
      {/* PUBLIC PAGES */}
      <Route path='/' element={<LandingPage />} />
      {/* PRIVATE PAGES */}
      <Route path='/user' element={isAuthenticated ? <PrivateLayout /> : <Navigate to='/auth' />}>
        <Route index element={<ProfilePage />} />
      </Route>
      {/* AUTH PAGES (only for non-Authenticated) */}
      <Route path='/auth' element={!isAuthenticated ? <AuthLayout /> : <Navigate to='/user' />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
