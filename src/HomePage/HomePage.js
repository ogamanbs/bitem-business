import React,{useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import Home from '../Components/Home/Home';
import { useCookies } from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import Logout from '../Components/Logout';
import MenuSmall from '../Components/CreateProducts/MenuSmall';

export default function HomePage({owner, products, setProducts, setOwner}) {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!cookies.token) {
      navigate('/sign');
    }
  }, [cookies, navigate]);

  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] flex items-center justify-between px-10 md:justify-between border-b border-zinc-200 md:border-0">
            <OwnerHead />
            <Logout setProducts={setProducts} setOwner={setOwner} />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-auto">
              <Menu />
            </div>
            <div className="w-auto block md:hidden">
              <MenuSmall owner={owner} />
            </div>
            <Home owner={owner} products={products} />
        </div>
    </div>
  );
}