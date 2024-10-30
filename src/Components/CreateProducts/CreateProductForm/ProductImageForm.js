import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import React,{useState} from 'react'

export default function ProductImageForm({images, setImages, numberOfImages}) {
    const [render, setRender] = useState(false);

    const handleImageOnChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const image = reader.result.toString('base64');
            setImages([...images, image]);
        };
        reader.readAsDataURL(file);
        if(images.length !== numberOfImages) {
            setRender(true);
        }
    }

    const addInputBox = () => {
        let count = images.length + 1;
        const elem = document.querySelector(`${'#input-box-' + count}`);
        elem.classList.remove('hidden');
        setRender(false);
    }

    const removeImage = () => {
        if(images.length !== numberOfImages) {
            const item = document.querySelector(`#input-box-${images.length + 1}`);
            if(item) {
                if(!item.classList.contains('hidden')) {
                    item.classList.add('hidden');
                    setRender(true);
                } else {
                    if(images.length > 1) {
                        setImages(images.slice(0, -1));
                        setRender(true);
                        let count = images.length;
                        const elem = document.querySelector(`#input-box-${count}`);
                        if(elem) {
                            elem.classList.add('hidden');
                        }
                    } else if(images.length === 1) {
                        setImages(images.slice(0, -1));
                        setRender(false);
                    }
                }
            }
        } else {
            if(images.length > 1) {
                setImages(images.slice(0, -1));
                setRender(true);
                let count = images.length;
                const elem = document.querySelector(`#input-box-${count}`);
                if(elem) {
                    elem.classList.add('hidden');
                }
            } else if(images.length === 1) {
                setImages(images.slice(0, -1));
            }
        }
    }

    return (
        <div className="h-auto w-auto">
            <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="flex gap-5 flex-wrap justify-center md:justify-start">
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
                <div className="h-auto w-[276px] md:h-auto md:w-10 flex flex-row py-2 md:p-0 md:flex-col items-center gap-2 justify-center">
                    {
                    images.length < numberOfImages && render && <div onClick={addInputBox} className="h-auto w-full md:h-10 md:w-10 bg-blue-50 text-blue-500 rounded-lg md:rounded-full md:ounded-full flex items-center cursor-pointer justify-center py-3 md:p-0">
                        <RiAddLine />
                    </div>
                    }
                    {
                    images.length > 0 && <div onClick={removeImage} className="h-auto w-full md:h-10 md:w-10 bg-red-50 text-red-500 rounded-lg md:rounded-full flex items-center cursor-pointer justify-center py-3 md:p-0">
                        <RiSubtractLine />
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
