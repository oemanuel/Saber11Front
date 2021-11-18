import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';

import DashboardApp from './pages/DashboardApp';
import Desempenos from './pages/Desempenos'
import DiagramaDeCaja from './pages/DiagramaDeCaja';
import Desviacion from './pages/Desviacion';
import Promedio from './pages/Promedio'
import Prediccion from './pages/Prediccion'
import Probabilidad from './pages/Probabilidad'
import Registros from './pages/Registros'

import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/ranking" replace /> },
        { path: 'ranking', element: <DashboardApp /> },
        { path: 'niveles', element: <Desempenos /> },
        { path: 'box', element: <DiagramaDeCaja /> },
        { path: 'deviation', element: <Desviacion /> },
        { path: 'average', element: <Promedio /> },
        { path: 'prediction', element: <Prediccion /> },
        { path: 'probability', element: <Probabilidad /> },
        { path: 'registers', element: <Registros /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
