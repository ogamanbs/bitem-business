'use client'
import React,{useState} from 'react';
import {useCookies} from 'react-cookie';

const getUpdatedOwner = async (id, contact) => {
    try {
        const response = await fetch('https://business-server.bitem.in/owner/update/contact', {
        // const response = await fetch('http://localhost:8000/owner/update/contact', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id, contact})
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



export default function Contact({owner, setOwner}) {
    const [contact, setContact] = useState(undefined);
    const [isEditable, setIsEditable] = useState(false);
    const [cookies] = useCookies(['token']);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleEditClick = (e) => {
        e.preventDefault();
        setContact(owner.contact);
        setIsEditable(true);
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setContact(undefined);
        setIsEditable(false);
    }
    const handleUpdateClick = async (e) => {
        e.preventDefault();
        if(contact !== undefined && owner.contact !== contact && contact.toString().length === 10) {
            setIsUpdating(true);
            const data = await getUpdatedOwner(cookies.token, contact);
            if(data.owner) {
                setOwner(data.owner);
                setContact(undefined);
                setIsUpdating(false);
                setIsEditable(false);
            }
        } else {
            setIsEditable(false);
        }
    }
    const handleAddContact = (e) => {
        e.preventDefault();
        setIsEditable(true);
    }

    return (
        <>
            {owner.contact === undefined && !isEditable ? (
                <div className="flex md:flex-row flex-col mt-2 md:items-center gap-3">
                    <div className="">Contact not present,</div>
                    <div className="flex gap-2 items-center">
                        <h1 className="">Please</h1>
                        <div onClick={handleAddContact} className="bg-black px-5 py-2 rounded-lg text-white cursor-pointer font-medium text-sm">Add Contact</div>
                    </div>
                </div>
            ):(
                <div className="flex flex-col gap-1">
                    <h1 className="">Contact:</h1>
                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                        <input
                            type="text"
                            name="contact"
                            value={!isEditable ? owner.contact.toString() : contact}
                            disabled={!isEditable}
                            onChange={e=>setContact(isNaN(Number(e.target.value)) ? undefined : Number(e.target.value))}
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
            )}
        </>
    );
}