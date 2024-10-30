'use client'
import React,{useState, useRef, useEffect} from 'react'
import ProductDetailsForm from '../CreateProducts/CreateProductForm/ProductDetailsForm';
import { useCookies } from 'react-cookie';
import ProductImageForm from './CreateProductForm/ProductImageForm';

const uploadInfo = async (product) => {
    try {
        const response = await fetch('https://business-server.bitem.in/products/create', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        });
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            const data = await response.json();
            return data;
        }
    } catch (err) {
        return {message: 'error creating product'};
    }
}

export default function CreateProductForm({messages, setMessages, setLoad}) {
    const formRef = useRef();

    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [id, setId] = useState("");
    const [cookies] = useCookies(['token']);

    const [bgcolor, setBgcolor] = useState("");
    const [panelColor, setPanelColor] = useState("");
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        setId(cookies.token);
    }, [setId, cookies]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setLoad(200);
        if(images.length > 0 && name !== "" &&  price !== "" && discount !== "" && bgcolor !== "" && panelColor !== "" && textColor !== "") {
            const product = {
                images,
                name,
                price,
                discount,
                bgcolor,
                panelColor,
                textColor,
                id
            }
            const data = await uploadInfo(product);
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, data.message]);
        } else {
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, "empty fields not allowed"]);
            setName("");
            setImages([]);
            setPrice("");
            setDiscount("");
            setBgcolor("");
            setPanelColor("");
            setTextColor("");
        }
    }

    return (
        <div className="w-full md:w-4/5 h-full md:h-[93vh] flex flex-col px-10 md:py-10 md:px-20 mt-5 md:mt-0 overflow-scroll">
            <h1 className="text-xl">Create New Product</h1>
            <form ref={formRef} onSubmit={handleSubmitForm} className="flex flex-col gap-10 md:gap-10 mt-5 md:mt-10" encType="multipartform/form-data">
                <h1 className="mb-5">Product Details</h1>
                <ProductImageForm images={images} setImages={setImages} numberOfImages={4} />
                <ProductDetailsForm setName={setName} setPrice={setPrice} setDiscount={setDiscount} />
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