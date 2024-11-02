import { RiFileList3Line } from '@remixicon/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrdersSmallSection() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/orders');
    }
    return (
        <div className="">
            <button onClick={handleClick}>
                <div className="text-blue-500"><RiFileList3Line size={30} /></div>
            </button>
        </div>
    );
}
