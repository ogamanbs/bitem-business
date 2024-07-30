'use client'
import React,{useState, useRef} from 'react'

const createOwner = async (owner) => {
    const response = await fetch('https://bitem-server.vercel.app', {
        method:"POST",
        headers: {'Context-Type':'application/json'}
    });
    if(!response.ok) {
        return { message: "error creating owner" };
    } else {
        const data = await response.json();
        return data;
    }
}

export default function CreateAccountForm({setForm}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const owner = {
            name,
            image,
            email,
            password
        }
        console.log(owner);
        const res = await createOwner(owner);
        console.log(res.message);
        formRef.current.reset();
    }

    const handleClick = () => {
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
                    value="create"
                    className="rounded-full py-2 px-5 outline-none bg-blue-500 text-white cursor-pointer"
                />
                <button onClick={handleClick} className="text-blue-500">Login</button>
            </div>
        </form>
    )
}
