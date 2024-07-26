import React from 'react'

export default function ProductDetailsForm({setImage, setName, setPrice, setDiscount}) {
    const handleImageOnChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        // const imageType = file.name.split('.');
        reader.onloadend = () => {
            const image = reader.result.toString('base64');
            setImage(image);
        // setImage(image);
        };
        reader.readAsDataURL(file);
    }
    return (
        <div className="h-full w-full flex flex-col gap-5">
            <h1 className="">Product Details</h1>
            <div className="w-full text-sm">
                <input
                    type="file"
                    name="image"
                    onChange={handleImageOnChange}
                    className="w-full md:w-1/3 border border-zinc-300 rounded-lg file:px-5 file:border-0 file:cursor-pointer cursor-pointer file:bg-amber-300 file:rounded-lg file:py-2 file:mr-5 outline-none bg-transparent"
                />
                <div className="flex flex-wrap flex-col md:flex-row gap-3 md:gap-5 mt-3 md:mt-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="product name"
                        onChange={e=>setName(e.target.value)}
                        className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="product price"
                        onChange={e=>setPrice(e.target.value)}
                        className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="discount price"
                        onChange={e=>{setDiscount(e.target.value)}}
                        className="w-full md:w-1/3 border border-zinc-300 rounded-lg py-2 px-5 outline-none bg-transparent"
                    />
                </div>
            </div>
        </div>
    );
}
