import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import * as AuthService from "./services/auth.service";
import IUser from './types/user.type';

import Login from './pages/login';
import Home from './pages/home';
import { PrivateRoute } from './PrivateRoute';

import EventBus from "./utils/EventBus";


export default function App() {
  const [, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", logout);

    return () => {
      EventBus.remove("logout", logout);
    };
  }, []);

  const logout = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}