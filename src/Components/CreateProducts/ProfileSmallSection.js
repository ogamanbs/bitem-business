import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileSmallSection({owner}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div className="">
            <button onClick={handleClick}>
                <div className="h-10 w-10 bg-zinc-200 rounded-full overflow-hidden">
                    <img src={owner.image} alt={owner.profile} />
                </div>
            </button>
        </div>
    )
}