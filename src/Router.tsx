import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage  from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import NotFoundPage from './pages/notFound/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
    {
    path: '*',
    element: <NotFoundPage />,
  },

]);

export function Router() {
  return <RouterProvider router={router} />;
}
