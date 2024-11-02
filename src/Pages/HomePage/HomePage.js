'use client'
import React,{useState} from 'react';
import OwnerHead from '../../Components/OwnerHead';
import Menu from '../../Components/Menu';
import Home from '../../Components/Home/Home';
import Logout from '../../Components/Logout';
import MenuSmall from '../../Components/MenuSmall';
import PasswordModel from '../../Components/OwnerComponents/PasswordModel';
import DeleteModel from '../../Components/OwnerComponents/DeleteModel';

export default function HomePage({owner, setOwner}) {
  const [showModel, setShowModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const handleCloseModelClick = (e) => {
    e.preventDefault();
    setShowModel(false);
  }
  const handleDeleteModelClick = (e) => {
    e.preventDefault();
    setDeleteModel(false);
  }
  return (
    <div className='relative w-full h-auto'>
        { showModel && <div onClick={handleCloseModelClick} className="absolute h-full w-[100vw] bg-black/20 backdrop-blur-md flex items-center justify-center px-5 overflow-hidden">
          <PasswordModel handleCloseModelClick={handleCloseModelClick} setOwner={setOwner} setShowModel={setShowModel} />
        </div> }
        { deleteModel && <div onClick={handleCloseModelClick} className="absolute h-full w-[100vw] bg-black/20 backdrop-blur-md flex items-center justify-center px-5 overflow-hidden">
          <DeleteModel handleDeleteModelClick={handleDeleteModelClick} setOwner={setOwner} />
        </div> }
        <div className="h-[7vh] flex items-center justify-between px-5 md:px-10 md:justify-between border-b border-zinc-200 md:border-0">
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
            <div className="w-full md:w-[80%] h-auto">
              <Home owner={owner} setOwner={setOwner} setShowModel={setShowModel} setDeleteModel={setDeleteModel} />
            </div>
        </div>
    </div>
  );
}