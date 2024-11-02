import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSection() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="flex items-center">
            <button onClick={handleClick}>
                <h1 className="cursor-pointer px-5 p-1 hover:bg-zinc-100 rounded-lg transition linear delay-100">Profile</h1>
            </button>
        </div>
    )
}
