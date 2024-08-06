import React,{useState, useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import { useCookies } from 'react-cookie';
import AllProducts from '../Components/AllProducts/AllProducts';
import {useNavigate, useLocation} from 'react-router-dom';
import Logout from '../Components/Logout';

export default function AllProductsPage() {
  const [cookies, setCookies] = useCookies(['token', 'menue']);
  const [menue, setMenue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!cookies.token) {
      navigate('/sign');
    } else if(location.pathname === '/all-products') {
      setCookies('menue', 1, {path:'/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)});
      setMenue(1);
    } else if(cookies.menue === 0 || cookies.menue === undefined) {
      navigate('/');
    } else if(cookies.menue === 1) {
      setMenue(1);
    } else if(cookies.menue === 2) {
      navigate('/create-products');
    }
  }, [cookies, navigate, setCookies, location]);


  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] w-full flex items-center justify-between px-10 md:justify-between">
            <OwnerHead setMenue={setMenue} />
            <Logout />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <Menu menue={menue} setMenue={setMenue} />
            <AllProducts setMenue={setMenue} />
        </div>
    </div>
  )
}