import React,{useEffect} from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import { useCookies } from 'react-cookie';
import AllProducts from '../Components/AllProducts/AllProducts';
import {useNavigate} from 'react-router-dom';
import Logout from '../Components/Logout';
import MenuSmall from '../Components/CreateProducts/MenuSmall';

export default function AllProductsPage({owner, products, setOwner, setProducts}) {
  const [cookies] = useCookies(['token']);
  const navigate = useNavigate();

  useEffect(() => {
    if(!cookies.token) {
      navigate('/sign');
    }
  }, [cookies, navigate]);


  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] w-full flex items-center justify-between px-10 md:justify-between border-b border-zinc-200 md:border-0">
            <OwnerHead />
            <Logout setOwner={setOwner} setProducts={setProducts} />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-auto">
              <Menu />
            </div>
            <div className="w-auto block md:hidden">
              <MenuSmall owner={owner} />
            </div>
            <AllProducts products={products} owner={owner} />
        </div>
    </div>
  )
}