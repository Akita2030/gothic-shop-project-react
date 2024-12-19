import React from 'react';
import { Link } from 'react-router-dom';

export const AuthButtons = () => {
  return (
    <>
      <Link to="/login" className="text-gothic-100 hover:text-crimson-500 transition uppercase tracking-wider text-sm">
        Login
      </Link>
      <Link to="/register" className="btn-gothic">
        Register
      </Link>
    </>
  );
};