'use client'
import React,{useState, useEffect} from 'react'
import LoginCard from '../Components/Login/LoginCard';
import CreateAccountCard from '../Components/CreateAccount/CreateAccountCard';
import PreLoader from '../Components/PreLoader';
import Notification from '../Components/Notification';
import { AnimatePresence } from 'framer-motion';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import OwnerHead from '../Components/CreateProducts/OwnerHead';


export default function Sign({setProducts, setOwner}) {
    const [form, setForm] = useState("login");
    const [load, setLoad] = useState(100);
    const [vis, setVis] = useState('hidden');
    const [messages, setMessages] = useState([]);
    const [cookies] = useCookies(['token']);
    const navigate = useNavigate();

    useEffect(() => {
        if(cookies.token) {
            navigate('/');
        }
        if(load === 200) {
            setVis('block');
        } else if(load === 100) {
            setVis('hidden');
        }
    }, [load, setVis, cookies, navigate]);

    const removeNotif = (msg) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message !== msg));
    }

    return (
        <div className="relative w-full min-h-screen">
            <div className={`absolute ${vis} w-full min-h-screen bg-zinc-200/20 backdrop-blur-md`}>
                <PreLoader load={load} setLoad={setLoad} />
            </div>
            <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none mt-10 md:mt-0">
                <AnimatePresence>
                {messages.map((message, index) => (
                    <Notification key={index} removeNotif={removeNotif} message={message} />
                ))}
                </AnimatePresence>
            </div>
            <div className="px-10 py-5 flex items-center justify-center md:justify-start">
                <OwnerHead />
            </div>
            <div className="h-full md:h-[80vh] w-full px-5 md:px-10 mt-5 flex">
                <div className="h-full w-full flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10">
                    <div className="w-full md:w-[70%] h-96 md:h-full rounded-[30px] overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt=""/>
                    </div>
                    { form === 'login' ? <LoginCard setForm={setForm} setLoad={setLoad} setMessages={setMessages} messages={messages} setProducts={setProducts}  setOwner={setOwner} /> : <CreateAccountCard setForm={setForm} setLoad={ setLoad } setMessages={setMessages} messages={messages} /> }
                </div>
            </div>
        </div>
    )
}
