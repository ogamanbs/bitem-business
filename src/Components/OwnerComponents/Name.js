'use client'
import React,{useState} from 'react';
import {useCookies} from 'react-cookie';

const getUpdatedOwner = async (id, name) => {
    try {
        const response = await fetch('https://business-server.bitem.in/owner/update/name', {
        // const response = await fetch('http://localhost:8000/owner/update/name', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id, name})
        });
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            const data = await response.json();
            return data;
        }
    } catch(err) {
        return {message: "error updating the owner name", owner: null}
    }
}

export default function Name({owner, setOwner}) {
    const [name, setName] = useState("");
    const [isEditable, setIsEditable] = useState(false);
    const [cookies] = useCookies(['token']);

    const handleEditClick = (e) => {
        e.preventDefault();
        setName(owner.name);
        setIsEditable(true);
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setName("");
        setIsEditable(false);
    }
    const handleUpdateClick = async (e) => {
        e.preventDefault();
        if(name !== "" && owner.name !== name) {
            const data = await getUpdatedOwner(cookies.token, name);
            if(data.owner !== null) {
                setOwner(data.owner);
                setName("");
                setIsEditable(false);
            }
        } else {
            setIsEditable(false);
        }
    }
    return (
        <div className="flex flex-col gap-1">
            <h1 className="">Name:</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                <input
                    type="text"
                    name="name"
                    value={!isEditable ? owner.name : name}
                    disabled={!isEditable}
                    onChange={e=>setName(e.target.value)}
                    className={`w-full md:w-1/2 px-5 py-2 capitalize border ${isEditable ? 'bg-zinc-50 text-black border-black' : 'bg-zinc-200 text-zinc-700 border-transparent'} rounded-lg outline-none`}
                />
                {!isEditable ? (
                    <div className="flex">
                        <div onClick={handleEditClick} className="px-5 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg cursor-pointer">Edit</div>
                    </div>
                ):(
                    <div className="flex gap-3">
                        <div onClick={handleUpdateClick} className="px-5 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg cursor-pointer">Update</div>
                        <div onClick={handleCancelClick} className="px-5 py-2 bg-red-500 text-white font-medium text-sm rounded-lg cursor-pointer">Cancel</div>
                    </div>
                )}
            </div>
        </div>
    );
}
