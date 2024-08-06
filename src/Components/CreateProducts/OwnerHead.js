import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function OwnerHead() {
  const navigate = useNavigate();
  const [, setCookies] = useCookies(['menue']);
  const handleClick= () => {
    setCookies('menue', 0, {path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
    navigate('/');
  }
  return (
    <button onClick={handleClick}>
      <h1 className='text-2xl font-bold text-blue-400'>Bitem</h1>
    </button>
  );
}
