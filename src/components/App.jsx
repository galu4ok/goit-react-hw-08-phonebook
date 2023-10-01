import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<RegisterPage />} />
          <Route element={<LoginPage />} />
          <Route element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
