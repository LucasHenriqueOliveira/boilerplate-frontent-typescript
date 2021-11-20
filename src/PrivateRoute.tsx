import React from 'react';
import { Navigate } from 'react-router-dom';
import * as AuthService from "./services/auth.service";

interface Props {
  children: JSX.Element
}

export const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = AuthService.isLoggedIn();

  if (isLoggedIn) {
    return children
  }

  return <Navigate to="/login" />
}

