import React from 'react';
import OwnerHead from '../Components/CreateProducts/OwnerHead';
import Menu from '../Components/CreateProducts/Menu';
import CreateProductForm from '../Components/CreateProducts/CreateProductForm';
import {useCookies} from 'react-cookie';
import {Navigate} from 'react-router-dom';

export default function CreateProducts() {
  const [cookies] = useCookies(['token']);
  if(!cookies.token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className='w-full h-[calc(100vh-72.9px)]'>
        <div className="h-[7vh] flex items-center justify-between md:px-10 md:justtify-between ">
            <OwnerHead />
        </div>
        <div className="h-full md:h-[93vh] flex flex-col md:flex-row w-full">
            <Menu />
            <CreateProductForm />
        </div>
    </div>
  )
}
