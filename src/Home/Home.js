'use client'
import React from 'react';
import {useCookies} from 'react-cookie';
import {Navigate} from 'react-router-dom';

const Home = () => {
  const [cookies] = useCookies(['token']);
  if(!cookies.token){
    return <Navigate to="/login" />
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <h1 className="">Aman Sharma</h1>
    </div>
  );
}

export default Home;
