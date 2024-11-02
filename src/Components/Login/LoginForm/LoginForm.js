'use client'
import React,{useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {RiEye2Line, RiEyeCloseLine } from '@remixicon/react';

const login = async (owner) => {
    try {
        const response = await fetch('https://business-server.bitem.in/owner/login', {
        // const response = await fetch('http://localhost:8000/owner/login', {
            method:"POST",
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(owner)
        });
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            return { message: "owner not found" };
        }
    } catch(err) {
        console.log(err);
        return { message: "unable to fetch owner" };
    }
}

export default function LoginForm({setForm, setLoad, messages, setMessages, setOwner}) {
    const [show, setShow] = useState(false);
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
                setCookie('token', data.owner._id, {path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
                setOwner(data.owner);
                navigate('/');
            }
        } else {
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, "empty fields not allowed"]);
            setEmail("");
            setPassword("");
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setForm("create");
    }

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="h-auto w-full flex flex-col gap-2 md:px-10">
            <input
                type="email"
                name="email"
                placeholder="email"
                autoComplete="off"
                onChange={e=>setEmail(e.target.value)}
                className="w-full border border-zinc-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <div className="w-full flex items-center border border-zinc-700 rounded-full cursor-pointer">
                <input
                    type={ show ? 'text' : "password"}
                    name="password"
                    placeholder="password"
                    autoComplete="off"
                    onChange={e=>setPassword(e.target.value)}
                    className="w-full rounded-full py-2 px-5 outline-none bg-transparent"
                />
                <div onClick={handleShow} className="px-3 py-2">
                    {show ? <RiEye2Line size={20} /> : <RiEyeCloseLine size={20} />}
                </div>
            </div>
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
