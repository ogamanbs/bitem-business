import React from 'react';
import {useCookies} from 'react-cookie';
import { RiLogoutBoxRLine } from '@remixicon/react';

export default function Logout({setOwner}) {
    const [, , removeCookie] = useCookies(['token']);
    const handleClick = () => {
        setOwner({});
        removeCookie('token', {path:'/'});
    }
    return (
        <button onClick={handleClick} className="">
            <h1 className="hidden md:block bg-red-500 rounded-full text-sm text-white px-5 py-2">Logout</h1>
            <h1 className="block md:hidden text-red-500"><RiLogoutBoxRLine/></h1>
        </button>
    );
}
