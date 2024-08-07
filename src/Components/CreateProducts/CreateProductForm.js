'use client'
import React,{useState, useRef, useEffect} from 'react'
import ProductDetailsForm from '../CreateProducts/CreateProductForm/ProductDetailsForm';
import PanelDetailForm from '../CreateProducts/CreateProductForm/PanelDetailForm';
import { useCookies } from 'react-cookie';

const uploadInfo = async (product) => {
    try {
        const response = await fetch('https://business-server.vercel.app/products/create', {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        });
        if(!response.ok) {
            return {message: "error creating product"};
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

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [email, setEmail] = useState("");
    const [cookies] = useCookies(['token']);

    const [bgcolor, setBgcolor] = useState("");
    const [panelColor, setPanelColor] = useState("");
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        setEmail(cookies.token);
    }, [setEmail, cookies]);

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setLoad(200);
        if(image !== "" && name !== "" &&  price !== "" && discount !== "" && bgcolor !== "" && panelColor !== "" && textColor !== "") {
            const product = {
                image,
                name,
                price,
                discount,
                bgcolor,
                panelColor,
                textColor,
                email
            }
            console.log(product);
            const data = await uploadInfo(product);
            formRef.current.reset();
            setLoad(100);
            setMessages([...messages, data.message]);
        } else {
            formRef.current.reset();
        }
        setLoad(100);
        setName("");
        setImage(null);
        setPrice("");
        setDiscount("");
        setBgcolor("");
        setPanelColor("");
        setTextColor("");
    }

    return (
        <div className="w-full md:w-4/5 h-full flex flex-col overflow-auto px-10 md:py-10 md:px-20">
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