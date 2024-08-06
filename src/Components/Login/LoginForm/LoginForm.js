'use client'
import React,{useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const login = async (owner) => {
    try {
        const response = await fetch('https://business-server.vercel.app/owner/login', {
        // const response = await fetch('https://localhost:8000/owner/login', {
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(owner)
        });
        if(!response.ok) {
            return {message: "owner not found"}
        } else {
            const data = await response.json();
            return data;
        }
    } catch(err) {
        console.log(err);
    }
}

export default function LoginForm({setForm, setLoad, messages, setMessages}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['token']);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(200);
        if(email !== "" && !email.includes(" ") && password !== "" && !password.includes(" ") && !email.includes("<") && !email.includes(">") && !password.includes("<") && !password.includes(">")){
            const owner = {
                email,
                password
            }
            const data = await login(owner);
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, data.message]);
            if(data.message === 'successfully verified owner'){
                setCookie('token', email, {path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
                navigate('/');
            }
        } else {
            formRef.current.reset();
        }
        setLoad(100);
        setEmail("");
        setPassword("");
    }

    const handleClick = (e) => {
        e.preventDefault();
        setForm("create");
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="h-auto w-full flex flex-col gap-2 md:px-10">
            <input
                type="email"
                name="email"
                placeholder="email"
                onChange={e=>setEmail(e.target.value)}
                className="w-full border border-zinc-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                onChange={e=>setPassword(e.target.value)}
                className="wfull border border-zinc-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <div className="flex items-center gap-4 mt-3">
                <input
                    type="submit"
                    value="login"
                    className="rounded-full py-2 px-5 outline-none bg-blue-500 text-white cursor-pointer"
                />
                <button onClick={handleClick} className="text-blue-500">Create Account</button>
            </div>
        </form>
    )
}
