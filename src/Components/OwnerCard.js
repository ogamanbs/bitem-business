import React from 'react';
import Name from './OwnerComponents/Name';
import Email from './OwnerComponents/Email';
import Contact from './OwnerComponents/Contact';
import Greeting from './OwnerComponents/Greeting';
import Image from './OwnerComponents/Image';
import Password from './OwnerComponents/Password';
import DeleteProfile from './OwnerComponents/DeleteProfile';

export default function OwnerCard({owner, setOwner, setShowModel, setDeleteModel}) {
  return (
    <div className="h-full w-full">
      <Greeting name={owner.name || "Owner"} />
      <div className="h-auto w-full flex flex-col md:flex-row gap-10 md:gap-10 px-10">
        <Image owner={owner} setOwner={setOwner} />
        <div className="flex flex-col gap-5 w-full h-auto">
          <Name owner={owner} setOwner={setOwner} />
          <Email owner={owner} setOwner={setOwner} />
          <Contact owner={owner} setOwner={setOwner} />
          <div className="flex gap-5">
            <Password owner={owner} setOwner={setOwner} setShowModel={setShowModel} />
            <DeleteProfile owner={owner} setOwner={setOwner} setDeleteModel={setDeleteModel} />
          </div>
        </div>
      </div>
    </div>
  )
}

