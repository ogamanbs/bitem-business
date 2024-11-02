import React,{useState, useEffect} from 'react';
import OwnerHead from '../../Components/OwnerHead';
import Menu from '../../Components/Menu';
import AllProducts from '../../Components/AllProducts/AllProducts';
import Logout from '../../Components/Logout';
import MenuSmall from '../../Components/MenuSmall';
import {useCookies} from 'react-cookie';

const getProducts = async (id) => {
  try {
    
    const response = await fetch('https://business-server.bitem.in/products/get-products', {
    // const response = await fetch('http://localhost:8000/products/get-products', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({id})
    });
    if(response.ok) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      return data;
    }
  } catch(err) {
    return {message: "error fetching products", products: []}
  }
}

export default function AllProductsPage({owner, setOwner}) {
  const [products, setProducts] = useState(null);
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    const callAPI = async () => {
      const data = await getProducts(cookies.token);
      if(data.products) {
        setProducts(data.products);
      }
    }
    callAPI();
  // eslint-disable-next-line
  }, []);

  return (
    <div className='w-full h-auto'>
        <div className="h-[7vh] w-full flex items-center justify-between px-5 md:px-10 md:justify-between border-b border-zinc-200 md:border-0">
            <OwnerHead />
            <Logout setOwner={setOwner} />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <div className="hidden md:block w-[20%]">
              <Menu />
            </div>
            <div className="w-auto block md:hidden">
              <MenuSmall owner={owner} />
            </div>
            <AllProducts products={products} />
        </div>
    </div>
  )
}