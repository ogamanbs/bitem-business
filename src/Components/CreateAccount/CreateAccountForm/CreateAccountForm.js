'use client'
import { RiEye2Line, RiEyeCloseLine } from '@remixicon/react';
import React,{useState, useRef} from 'react';

const createOwner = async (owner) => {
    const response = await fetch('https://business-server.bitem.in/owner/create', {
    // const response = await fetch('http://localhost:8000/owner/create', {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(owner)
    });
    if(!response.ok) {
        return { message: "error creating owner" };
    } else {
        const data = await response.json();
        return data;
    }
}

export default function CreateAccountForm({setForm, setLoad, setMessages, messages}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(200);
        if(image!=="" && name !== "" && !name.includes("<") && !name.includes(">") && email !== "" && !email.includes(" ") && !email.includes("<") && !email.includes(">") && password !== "" && !password.includes(" ") && !password.includes("<") && !password.includes(">")){
            const owner = {
                name,
                image,
                email,
                password
            }
            const data = await createOwner(owner);
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, data.message]);
            setForm('login');
        } else {
            formRef.current.reset();
        }
        setLoad(100);
        setName("");
        setImage("");
        setEmail("");
        setPassword("");
    }

    const handleClick = (e) => {
        e.preventDefault();
        setForm("login");
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = reader.result.toString('base64');
            setImage(img);
        }
        reader.readAsDataURL(file);
    }

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="h-auto w-full flex flex-col gap-2 md:px-10">
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={e=>setName(e.target.value)}
                className="w-full border border-zinc-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <input
                type="file"
                name="image"
                onChange={handleImage}
                className="w-full rounded-full outline-none bg-transparent file:rounded-full file:border-0 file:px-5 file:py-2 file:bg-amber-300 file:mr-3 file:cursor-pointer cursor-pointer"
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                onChange={e=>setEmail(e.target.value)}
                className="w-full border border-zinc-600 rounded-full py-2 px-5 outline-none bg-transparent"
            />
            <div className="w-full flex items-center border border-zinc-600 rounded-full cursor-pointer">
                <input
                    type={show ? 'text' : "password"}
                    name="password"
                    placeholder="password"
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
                    value="create"
                    className="rounded-full py-2 px-5 outline-none bg-blue-500 text-white cursor-pointer"
                />
                <button onClick={handleClick} className="text-blue-500">Login</button>
            </div>
        </form>
    )
}
