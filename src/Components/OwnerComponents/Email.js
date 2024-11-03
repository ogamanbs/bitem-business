import React,{useState} from 'react';
import {useCookies} from 'react-cookie';

const getUpdatedOwner = async (id, email) => {
    try {
        const response = await fetch('https://business-server.bitem.in/owner/update/email', {
        // const response = await fetch('http://localhost:8000/owner/update/email', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id, email})
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


export default function Email({owner, setOwner}) {
    const [email, setEmail] = useState("");
    const [isEditable, SetIsEditable] = useState(false);
    const [cookies] = useCookies(['token']);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        setEmail(owner.email);
        SetIsEditable(true);
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setEmail("");
        SetIsEditable(false);
    }
    const handleUpdateClick = async (e) => {
        e.preventDefault();
        if(email !== "" && email !== owner.email) {
            setIsUpdating(true);
            const data = await getUpdatedOwner(cookies.token, email);
            if(data.owner) {
                setOwner(data.owner);
                setEmail("");
                setIsUpdating(false);
                SetIsEditable(false);
            }
        } else {
            SetIsEditable(false);
        }
    }
    return (
        <div className="flex flex-col gap-1">
            <h1 className="">Email:</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                <input
                    type="email"
                    name="email"
                    value={!isEditable ? owner.email : email}
                    disabled={!isEditable}
                    onChange={e=>setEmail(e.target.value)}
                    className={`w-full md:w-1/2 px-5 py-2 border ${isEditable ? 'bg-zinc-50 text-black border-black' : 'bg-zinc-200 text-zinc-700 border-transparent'} rounded-lg outline-none`}
                />
                {!isEditable ? (
                    <div className="flex">
                        <button onClick={handleEditClick} className="px-5 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg cursor-pointer">Edit</button>
                    </div>
                ):(
                    <div className="flex gap-3">
                        <button onClick={handleUpdateClick} className="px-5 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg cursor-pointer" disabled={isUpdating}>Update</button>
                        <button onClick={handleCancelClick} className="px-5 py-2 bg-red-500 text-white font-medium text-sm rounded-lg cursor-pointer" disabled={isUpdating}>Cancel</button>
                    </div>
                )}
            </div>
        </div>
    );
}
