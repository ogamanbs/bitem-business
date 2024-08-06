import React,{useState, useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import CreateProductForm from '../Components/CreateProducts/CreateProductForm';
import { useCookies } from 'react-cookie';
import {useNavigate, useLocation} from 'react-router-dom';
import Logout from '../Components/Logout';
import Notification from '../Components/Notification';
import { AnimatePresence } from 'framer-motion';
import PreLoader from '../Components/PreLoader';

export default function CreateProductsPage() {
  const [cookies, setCookies] = useCookies(['token', 'menue']);
  const [menue, setMenue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [load, setLoad] = useState(100);
  const [vis, setVis] = useState('hidden');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if(!cookies.token) {
      navigate('/sign');
    } else if(location.pathname === '/create-products') {
      setCookies('menue', 2, {path:'/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
      setMenue(2);
    } else if(cookies.menue === 0 || cookies.menue === undefined) {
      navigate('/');
    } else if(cookies.menue === 1) {
      navigate('/all-products');
    } else if(cookies.menue === 2) {
      setMenue(2);
    }

    if(load === 200) {
      setVis('block');
    } else if(load === 100) {
        setVis('hidden');
    }
  }, [cookies, setCookies, navigate, location, load, setVis]);

  const removeNotif = (msg) => {
    setMessages((prevMessages) => prevMessages.filter((message) => message !== msg));
  }

  return (
    <div className='relative w-full h-[calc(100vh-72.9px)]'>
        <div className={`absolute ${vis} w-full min-h-screen bg-zinc-200/20 backdrop-blur-md`}>
            <PreLoader load={load} setLoad={setLoad} />
        </div>
        <div className="h-[7vh] flex items-center justify-between px-10 md:justify-between ">
            <OwnerHead setMenue={setMenue} />
            <Logout />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="flex flex-col gap-1 w-72 fixed top-2 right-2 z-50 pointer-events-none">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <Notification key={index} removeNotif={removeNotif} message={message} />
                ))}
              </AnimatePresence>
            </div>
            <Menu menue={menue} setMenue={setMenue} />
            <CreateProductForm setMenue={setMenue} setLoad={setLoad} setMessages={setMessages} messages={messages} />
        </div>
    </div>
  )
}