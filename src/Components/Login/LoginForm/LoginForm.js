'use client'
import React,{useState, useRef} from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const admin = {
            email,
            password
        }
        console.log(admin);
        formRef.current.reset();
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
            <div className="mt-3">
                <input
                    type="submit"
                    value="submit"
                    className="rounded-full py-2 px-5 outline-none bg-blue-500 text-white cursor-pointer"
                />
            </div>
        </form>
    )
}
