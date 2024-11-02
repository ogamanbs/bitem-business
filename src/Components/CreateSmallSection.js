import { RiAddLine } from '@remixicon/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateSmallSection() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create');
    }
    return (
        <div className="">
            <button onClick={handleClick}>
                <div className="text-blue-500"><RiAddLine size={30} /></div>
            </button>
        </div>
    );
}
