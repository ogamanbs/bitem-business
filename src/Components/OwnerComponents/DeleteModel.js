import React from 'react';
import {useCookies} from 'react-cookie';

export default function DeleteModel({handleDeleteModelClick}) {
    const [cookies,, removeCookie] = useCookies(['token']);
    const handleDeleteClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://business-server.bitem.in/owner/delete', {
            // const response = await fetch('http://localhost:8000/owner/delete', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({ id: cookies.token })
            });
            if(response.ok) {
                await response.json();
                removeCookie('token', {path: '/'});
            } else {
                const data = await response.json();
                console.log(data.message);
            }
        } catch(err) {
            console.log('error deleting owner');
        }
    }
    return (
        <div onClick={(e) => e.stopPropagation()} className="h-auto w-full md:w-1/3 bg-white rounded-lg flex flex-col">
            <div className="text-xl border-b border-zinc-300 px-5 py-5">Are you sure ?</div>
            <div className="text-sm border-b border-zinc-300 px-5 py-5">Once you delete all your products will be deleted and you will no longer be an owner on this website.</div>
            <div className="flex px-5 py-5 gap-5">
                <button onClick={handleDeleteClick} className="text-sm px-5 py-2 rounded-lg bg-red-500 text-white">Delete</button>
                <button onClick={handleDeleteModelClick} className="text-sm px-5 py-2 rounded-lg bg-blue-500 text-white">Cancel</button>
            </div>
        </div>
    );
}
