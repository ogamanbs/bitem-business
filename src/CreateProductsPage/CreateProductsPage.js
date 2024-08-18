import React,{useState, useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import CreateProductForm from '../Components/CreateProducts/CreateProductForm';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import Logout from '../Components/Logout';
import Notification from '../Components/Notification';
import { AnimatePresence } from 'framer-motion';
import PreLoader from '../Components/PreLoader';
import MenuSmall from '../Components/CreateProducts/MenuSmall';

export default function CreateProductsPage({owner, setOwner, setProducts}) {
  const [cookies] = useCookies(['token', 'menue']);
  const navigate = useNavigate();
  const [load, setLoad] = useState(100);
  const [vis, setVis] = useState('hidden');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(!cookies.token) {
      navigate('/sign');
    }
    if(load === 200) {
      setVis('block');
    } else if(load === 100) {
        setVis('hidden');
    }
  }, [cookies, navigate, load, setVis]);

  const removeNotif = (msg) => {
    setMessages((prevMessages) => prevMessages.filter((message) => message !== msg));
  }

  return (
    <div className='relative w-full h-auto'>
        <div className={`absolute ${vis} w-full min-h-screen bg-zinc-200/20 backdrop-blur-md`}>
            <PreLoader load={load} setLoad={setLoad} />
        </div>
        <div className="h-[7vh] flex items-center justify-between px-10 md:justify-between border-b border-zinc-200 md:border-0">
            <OwnerHead />
            <Logout setProducts={setProducts} setOwner={setOwner} />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-non mt-[7vh]">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <Notification key={index} removeNotif={removeNotif} message={message} />
                ))}
              </AnimatePresence>
            </div>
            <div className="h-full w-auto hidden md:block">
              <Menu />
            </div>
            <div className="w-full h-full block md:hidden">
              <MenuSmall owner={owner} />
            </div>
            <CreateProductForm setLoad={setLoad} setMessages={setMessages} messages={messages} />
        </div>
    </div>
  )
}