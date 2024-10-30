import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import React,{useState} from 'react'

export default function ProductImageForm({images, setImages, numberOfImages}) {
    const [render, setRender] = useState(true);
    const handleImageOnChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const image = reader.result.toString('base64');
            setImages([...images, image]);
        };
        reader.readAsDataURL(file);
    }

    const addInputBox = () => {
        let count = images.length + 1;
        const elem = document.querySelector(`${'#input-box-' + count}`);
        elem.classList.remove('hidden');
        if(images.length + 1 === numberOfImages) {
            setRender(false);
        }
    }

    const removeImage = () => {
        if(images.length > 1) {
            console.log('image-length: ' + images.length);
            setImages(images.slice(0, -1));
            setRender(true);
            console.log('image-length: ' + images.length);
            let count = images.length;
            console.log('#input-box-' + count);
            const elem = document.querySelector(`#input-box-${count}`);
            if(elem) {
                elem.classList.add('hidden');
            }
        } else if(images.length === 1) {
            setImages(images.slice(0, -1));
        }
    }

    console.log(images.length);

    return (
        <div className="h-auto w-auto">
            <div className="flex gap-5">
                <div className="flex gap-5">
                    {
                    images.length < 1 ? (<div id={"input-box-1"} className="relative h-32 w-32 rounded-[10px] border border-dashed border-zinc-400 bg-zinc-100 overflow-hidden cursor-pointer">
                        <div className="absolute h-32 w-32 flex flex-col items-center justify-center text-xs">
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
                    </div>) : (
                        <div className="h-32 w-32 rounded-[10px] bg-zinc-100 overflow-hidden">
                            <img className="w-full h-full object-cover" src={images[0]} alt={"1"} />
                        </div>
                    )
                    }
                    {
                    images.length < 2 ? (<div id={"input-box-2"} className="relative h-32 w-32 rounded-[10px] border border-dashed border-zinc-400 bg-zinc-100 overflow-hidden cursor-pointer hidden">
                        <div className="absolute h-32 w-32 flex flex-col items-center justify-center text-xs">
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
                    </div>) : (
                        <div className="h-32 w-32 rounded-[10px] bg-zinc-100 overflow-hidden">
                            <img className="w-full h-full object-cover" src={images[1]} alt={"2"} />
                        </div>
                    )
                    }
                    {
                    images.length < 3 ? (<div id={"input-box-3"} className="relative h-32 w-32 rounded-[10px] border border-dashed border-zinc-400 bg-zinc-100 overflow-hidden cursor-pointer hidden">
                        <div className="absolute h-32 w-32 flex flex-col items-center justify-center text-xs">
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
                    </div>) : (
                        <div className="h-32 w-32 rounded-[10px] bg-zinc-100 overflow-hidden">
                            <img className="w-full h-full object-cover" src={images[2]} alt={"3"} />
                        </div>
                    )
                    }
                    {
                    images.length < 4 ? (<div id={"input-box-4"} className="relative h-32 w-32 rounded-[10px] border border-dashed border-zinc-400 bg-zinc-100 overflow-hidden cursor-pointer hidden">
                        <div className="absolute h-32 w-32 flex flex-col items-center justify-center text-xs">
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
                    </div>) : (
                        <div className="h-32 w-32 rounded-[10px] bg-zinc-100 overflow-hidden">
                            <img className="w-full h-full object-cover" src={images[3]} alt={"4"} />
                        </div>
                    )
                    }
                </div>
                <div className="w-10 flex flex-col items-center gap-2 justify-center">
                    {
                    images.length < numberOfImages && render && <div onClick={addInputBox} className="h-10 w-10 bg-blue-50 text-blue-500 rounded-full flex items-center cursor-pointer justify-center">
                        <RiAddLine />
                    </div>
                    }
                    {
                    images.length > 0 && <div onClick={removeImage} className="h-10 w-10 bg-red-50 text-red-500 rounded-full flex items-center cursor-pointer justify-center">
                        <RiSubtractLine />
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
