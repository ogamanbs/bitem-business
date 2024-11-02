import React from 'react'

export default function Password({ owner, setOwner, setShowModel }) {
    const handleChangePasswordClick = (e) => {
        e.preventDefault();
        setShowModel(true);
    }
    return (
        <div className="flex mt-5 mb-10">
            <h1 onClick={handleChangePasswordClick} className="px-5 py-2 bg-red-500 text-sm font-medium text-white rounded-lg cursor-pointer">Change Password</h1>
        </div>
    );
}
