import React from 'react';
import logo from '../images/bitem.svg';

export default function LogoImage() {
    return (
        <img className="h-full w-full object-cover" src={logo} alt={'logo'} />
    );
}