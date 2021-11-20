import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';
import Dashboard from './dashboard';
import Clients from './clients';

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <PrivateRoute>
            <Clients />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  );

}
export default MainRoutes;
