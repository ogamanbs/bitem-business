'use client'
import React,{useState, useRef, useEffect} from 'react'
import ProductDetailsForm from '../CreateProducts/CreateProductForm/ProductDetailsForm';
import { useCookies } from 'react-cookie';
import ProductImageForm from './CreateProductForm/ProductImageForm';
import ProductFeaturesForm from './CreateProductForm/ProductFeaturesForm';
import ProductDescriptionForm from './CreateProductForm/ProductDescriptionForm';

const uploadInfo = async (product) => {
    try {
        const response = await fetch('https://business-server.bitem.in/products/create', {
        // const response = await fetch('http://localhost:8000/products/create', {
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
    const [units, setUnits] = useState(0);
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [userId, setUserId] = useState("");
    const [cookies] = useCookies(['token']);

    useEffect(() => {
        setUserId(cookies.token);
    }, [setUserId, cookies]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setLoad(200);
        if(images.length > 0 && name !== "" &&  price !== "" && discount !== "" && units > 0) {
            const product = {
                images,
                name,
                price,
                discount,
                description,
                units,
                features,
                userId
            }
            const data = await uploadInfo(product);
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, data.message]);
        } else {
            setLoad(100);
            setMessages([...messages, "empty fields not allowed"]);
        }
    }

    return (
        <div className="w-full md:w-4/5 h-full md:h-[93vh] flex flex-col px-10 md:py-5 md:px-20 mt-5 md:mt-0 overflow-scroll">
            <h1 className="text-xl">Create New Product</h1>
            <form ref={formRef} onSubmit={handleSubmitForm} className="flex flex-col gap-5 md:gap-5 mt-5 md:mt-5" encType="multipartform/form-data">
                <h1 className="mb-2">Product Details</h1>
                <ProductImageForm images={images} setImages={setImages} numberOfImages={4} />
                <ProductDetailsForm setName={setName} setPrice={setPrice} setDiscount={setDiscount} setUnits={setUnits} />
                <ProductDescriptionForm setDescription={setDescription} />
                <ProductFeaturesForm setFeatures={setFeatures} features={features} />
                <div className="text-sm pb-5 mt-5">
                    <input
                        type="submit"
                        value="Create New Product"
                        className="bg-blue-500 text-base font-medium text-white rounded-lg py-2 px-5 outline-none cursor-pointer"
                    />
                </div>
            </form>
        </div>
    );
}