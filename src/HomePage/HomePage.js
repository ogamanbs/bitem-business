import React,{useState, useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import { useCookies } from 'react-cookie';
import Home from '../Components/Home/Home';
import {useNavigate, useLocation} from 'react-router-dom';
import Logout from '../Components/Logout';

export default function HomePage() {
  const [cookies, setCookie] = useCookies(['token', 'menue']);
  const [menue, setMenue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!cookies.token) {
      navigate('/sign');
    } else if(location.pathname === '/') {
      setCookie('menue', 0, {path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
      setMenue(0);
    } else if(cookies.menue === 0 || cookies.menue === undefined) {
      setMenue(0);
    } else if(cookies.menue === 1) {
      navigate('/all-products');
    } else if(cookies.menue === 2) {
      navigate('/create-products');
    }
  }, [cookies.token, cookies.menue, navigate, setCookie, location.pathname]);

  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] flex items-center justify-between px-10 md:justify-between ">
            <OwnerHead setMenue={setMenue} />
            <Logout />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <Menu menue={menue} setMenue={setMenue} />
            <Home setMenue={setMenue} />
        </div>
    </div>
  )
}