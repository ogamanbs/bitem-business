import { RiBox3Line } from '@remixicon/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllProdSmallSection() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/all-products');
    }
    return (
        <div className="">
            <button onClick={handleClick}>
                <div className="text-blue-500"><RiBox3Line size={30} /></div>
            </button>
        </div>
    )
}
