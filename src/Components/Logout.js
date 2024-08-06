import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import { RiLogoutBoxRLine } from '@remixicon/react';

export default function Logout() {
    const [, , removeCookie] = useCookies(['token', 'menue']);
    const navigate = useNavigate();
    const handleClick = () => {
        removeCookie('token');
        removeCookie('menue');
        navigate('/');
    }
    return (
        <button onClick={handleClick} className="">
            <h1 className="hidden md:block bg-red-500 rounded-full text-xs text-white px-5 py-2">Logout</h1>
            <h1 className="block md:hidden text-red-500"><RiLogoutBoxRLine/></h1>
        </button>
    );
}
