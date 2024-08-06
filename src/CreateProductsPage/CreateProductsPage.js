import React,{useState, useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import CreateProductForm from '../Components/CreateProducts/CreateProductForm';
import { useCookies } from 'react-cookie';
import {useNavigate, useLocation} from 'react-router-dom';
import Logout from '../Components/Logout';

export default function CreateProducts() {
  const [cookies, setCookies] = useCookies(['token', 'menue']);
  const [menue, setMenue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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
  }, [cookies, setCookies, navigate, location]);


  return (
    <div className='w-full h-[calc(100vh-72.9px)]'>
        <div className="h-[7vh] flex items-center justify-between px-10 md:justify-between ">
            <OwnerHead setMenue={setMenue} />
            <Logout />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <Menu menue={menue} setMenue={setMenue} />
            <CreateProductForm setMenue={setMenue} />
        </div>
    </div>
  )
}