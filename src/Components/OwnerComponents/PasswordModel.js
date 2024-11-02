import { RiCloseLine } from '@remixicon/react';
import React,{useState} from 'react';
import logo from '../../images/bitem.svg';
import {useCookies} from 'react-cookie';

const getUpdatedOwner = async (password, newPassword, id) => {
    try {
        const response = await fetch('https://business-server.bitem.in/owner/update/password', {
        // const response = await fetch('http://localhost:8000/owner/update/password', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({password, newPassword, id})
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

export default function PasswordModel({setOwner, handleCloseModelClick, setShowModel}) {
    const [oldp, setOldp] = useState("");
    const [newp, setnewp] = useState("");
    const [cookies] = useCookies(['token']);
    const [isSame, setIsSame] = useState();
    const [check, setCheck] = useState();

    const handleConfirmChange = (e) => {
        if(e.target.value === newp) {
            setIsSame(true);
        } else {
            setIsSame(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(oldp !== newp) {
            const data = await getUpdatedOwner(oldp, newp, cookies.token);
            if(data.owner) {
                setOwner(data.owner);
                setOldp("");
                setnewp("");
                setIsSame();
                setShowModel(false);
            }
        }
    }

    const handleNewpChange = (e) => {
        if(e.target.value !== "" && oldp !== "") {
            if(e.target.value === oldp) {
                setCheck(false);
            } else {
                setCheck(true);
            }
        } else {
            setCheck();
        }
        setnewp(e.target.value);
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className="h-auto w-full md:w-1/3 bg-white rounded-lg">
            <div onClick={handleCloseModelClick} className="flex justify-end h-auto px-3 py-3 cursor-pointer"><RiCloseLine /></div>
            <div className="flex flex-col px-10">
                <div className="flex justify-center mb-5">
                    <div className="h-10 w-auto overflow-hidden">
                        <img className="h-full w-full" src={logo} alt={'bitem-logo'}/>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-sm">Old Password:</h1>
                        <input
                            type="text"
                            name="old-password"
                            onChange={e=>setOldp(e.target.value)}
                            placeholder="Please enter old password"
                            className="w-full h-auto px-5 py-2 border border-zinc-900 rounded-lg outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-sm">New Password:</h1>
                        <input
                            type="text"
                            name="new-password"
                            placeholder="Please enter new password"
                            onChange={handleNewpChange}
                            className={`w-full h-auto px-5 py-2 border ${check === undefined && 'border-zinc-900'} ${check === true && 'border-green-500'} ${check === false && 'border-red-500'} rounded-lg outline-none`}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-sm">Confirm New Password:</h1>
                        <input
                            type="text"
                            name="confirm-new-password"
                            placeholder="Please confirm new password"
                            disabled={newp === ""}
                            onChange={handleConfirmChange}
                            className={`w-full h-auto px-5 py-2 border ${isSame === undefined && 'border-zinc-900'} ${isSame === true && 'border-green-500'} ${isSame === false && 'border-red-500'} rounded-lg outline-none`}
                        />
                    </div>
                </div>
                <div className="flex justify-center my-10">
                    <div onClick={handleSubmit} className="px-5 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium cursor-pointer">Submit</div>
                </div>
            </div>
        </div>
    );
}
