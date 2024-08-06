import React from 'react';
import {
  RiAddLine
} from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';

export default function CreateSection({menue, setMenue}) {
  const navigate = useNavigate();
  const [, setCookies] = useCookies(['menue']);
  const handleClick = () => {
    setCookies('menue', 2, {path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
    navigate('/create-products');
  }
  return (
    <div className="py-2 px-4 flex items-center md:p-0 rounded-full md:rounded-none border border-zinc-400 md:border-none">
      <div className="hidden md:block">
      <button onClick={handleClick}>
        {menue === 2 ?
          (
            <h1 className="cursor-pointer px-5 p-2 rounded-lg transition linear delay-100 text-blue-500">Create Products</h1>
          ) : (
            <h1 className="cursor-pointer hover:px-5 p-2 hover:bg-zinc-100 rounded-lg transition linear delay-100">Create Products</h1> 
          )
        }
      </button>
      </div>
      <div className="block md:hidden">
        <button onClick={handleClick} >
        {menue === 2 ?
          (
            <div className="text-blue-500"><RiAddLine /></div>
          ) : (
            <div className=""><RiAddLine /></div>
          )
        }
        </button>
      </div>
    </div>
  )
}
