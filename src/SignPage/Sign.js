'use client'
import React,{useState} from 'react'
import LoginCard from '../Components/Login/LoginCard';
import CreateAccountCard from '../Components/CreateAccount/CreateAccountCard';


export default function Sign() {
    const [form, setForm] = useState("login");
    return (
        <div className="w-full min-h-screen">
            <div className="px-10 py-5 flex items-center justify-center md:justify-start">
                <h1 className="text-2xl font-bold text-blue-500">Bitem Business</h1>
            </div>
            <div className="h-full md:h-[80vh] w-full px-5 md:px-10 mt-5 flex">
                <div className="h-full w-full flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10">
                    <div className="w-full md:w-[70%] h-96 md:h-full rounded-[30px] overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt=""/>
                    </div>
                    {form === 'login' ? <LoginCard setForm={setForm} /> : <CreateAccountCard setForm={setForm} />}
                </div>
            </div>
        </div>
    )
}
