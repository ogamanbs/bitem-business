import { RiCloseLine } from '@remixicon/react';
import React,{useState} from 'react';
import {useCookies} from 'react-cookie';

const getUpdatedOwner = async (id, image) => {
    try {
        const response = await fetch('https://business-server.bitem.in0/owner/update/image', {
        // const response = await fetch('http://localhost:8000/owner/update/image', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({id, image})
        });
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            const data = await response.json();
            return data;
        }
    } catch(err) {
        return {message: "error updating the owner name", owner: null}
    }
}


export default function Image({owner, setOwner}) {
    const [isEditable, setIsEditable] = useState(false);
    const [image, setImage] = useState("");
    const [cookies] = useCookies(['token']);

    const handleImageOnChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const image = reader.result.toString('base64');
            setImage(image);
        };
        reader.readAsDataURL(file);
    }

    const handleEditClick = (e) => {
        e.preventDefault();
        setIsEditable(true);
    }
    const handleUpdateClick = async (e) => {
        e.preventDefault();
        const data = await getUpdatedOwner(cookies.token, image);
        if(data.owner) {
            setOwner(data.owner);
            setImage("");
            setIsEditable(false);
        }
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
        setImage("");
        setIsEditable(false);
    }
    return (
        <div className="h-auto w-auto flex flex-col gap-2 items-center">
            {isEditable ? ( image === "" ? (<div className="relative h-32 w-32 rounded-[10px] border border-dashed border-zinc-400 bg-zinc-100 overflow-hidden cursor-pointer">
                        <div className="absolute h-32 w-32 flex flex-col items-center justify-center text-xs p-1">
                            <h1 className="text-center">Drag and Drop an image here</h1>
                            <h1 className="text-center">or</h1>
                            <h1 className="text-center">Click to select an image</h1>
                        </div>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageOnChange}
                            className="absolute opacity-0 h-32 w-32 display-none rounded-lg outline-none bg-transparent cursor-pointer"
                        />
                    </div>):(<div className="h-32 w-32 rounded-[10px] bg-zinc-100 overflow-hidden">
                            <img className="w-full h-full object-cover" src={image} alt={owner.name} />
                        </div>)
                    ) : (
                        <div className="h-32 w-32 rounded-[10px] bg-zinc-100 overflow-hidden">
                            <img className="w-full h-full object-cover" src={owner.image} alt={owner.name} />
                        </div>
                    )
            }
            {!isEditable ? (<div onClick={handleEditClick} className="w-32 md:w-full h-auto bg-blue-500 rounded-lg px-5 py-2 text-center text-white font-medium text-sm cursor-pointer">Edit</div>
            ) : (
                <div className="w-32 md:w-full h-auto flex items-center gap-2">
                    <div onClick={handleUpdateClick} className="w-full bg-blue-500 rounded-lg px-5 py-2 text-center text-white font-medium text-sm cursor-pointer">Update</div>
                    <div onClick={handleCancelClick} className="p-1 bg-red-100 text-red-500 flex items-center justify-center cursor-pointer rounded-lg"><RiCloseLine size={20}/></div>
                </div>
            )}
        </div>
    )
}
