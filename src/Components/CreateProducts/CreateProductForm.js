'use client'
import React,{useState, useRef} from 'react'
import ProductDetailsForm from '../CreateProducts/CreateProductForm/ProductDetailsForm';
import PanelDetailForm from '../CreateProducts/CreateProductForm/PanelDetailForm';

const uploadInfo = async (product) => {
    try {
        const response = await fetch('https://bitem-server.vercel.app/products/create', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        });
        const data = await response.json();
        return data.message;
    } catch (err) {
        console.error(err);
    }

}

export default function CreateProductForm() {
    const formRef = useRef();

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");

    const [bgcolor, setBgcolor] = useState("");
    const [panelColor, setPanelColor] = useState("");
    const [textColor, setTextColor] = useState("");

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        console.log(image);
        const product = {
            image,
            name,
            price,
            discount,
            bgcolor,
            panelColor,
            textColor
        }
        // console.log(product);
        const data = await uploadInfo(product);
        console.log(data);
        setName("");
        setImage(null);
        setPrice("");
        setDiscount("");
        setBgcolor("");
        setPanelColor("");
        setTextColor("");
        formRef.current.reset();
    }

    return (
        <div className="w-full h-full flex flex-col overflow-auto px-10 md:py-10 md:px-20">
            <h1 className="text-xl">Create New Product</h1>
            <form ref={formRef} onSubmit={handleSubmitForm} className="flex flex-col gap-10 md:gap-10 mt-5 md:mt-10" encType="multipartform/form-data">
                <ProductDetailsForm setImage={setImage} setName={setName} setPrice={setPrice} setDiscount={setDiscount} />
                <PanelDetailForm setBgcolor={setBgcolor} setPanelColor={setPanelColor} setTextColor={setTextColor} />
                <div className="text-sm">
                    <input
                        type="submit"
                        value="create new product"
                        className="bg-blue-500 text-white rounded-lg py-2 px-5 outline-none cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
}