import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CreateProductsPage from './CreateProductsPage/CreateProductsPage';
import Sign from './SignPage/Sign';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import { useCookies } from 'react-cookie';

const getOwner = async (id) => {
    try {
        const response = await fetch('https://business-server.vercel.app/owner/get-owner', {
        // const response = await fetch('http://localhost:8000/owner/get-owner', {
            method: "POST",
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({id})
        });
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            return {owner:{products: []}};
        }
    } catch(err) {
        return {owner:{products: []}};
    }
}

export default function App() {
    const [owner, setOwner] = useState({});
    const [products, setProducts] = useState([]);
    const [cookies] = useCookies(['token']);

    useEffect(()=>{
        const callOwnerAPI = async () => {
            const data = await getOwner(cookies.token);
            setOwner(data.owner);
            setProducts(data.owner.products);
        }
        if(cookies.token) {
            callOwnerAPI();
        }
    },[cookies]);

    return (
        <div className="">
            <Routes>
                <Route
                    path={'/'}
                    element={ <HomePage owner={owner} products={products} setProducts={setProducts} setOwner={setOwner} /> }
                />
                <Route
                    exact
                    path={'/create-products'}
                    element={ <CreateProductsPage owner={owner} setProducts={setProducts} setOwner={setOwner} /> }
                />
                <Route
                    path={'/sign'}
                    element={ <Sign setProducts={setProducts} setOwner={setOwner} /> }
                />
                <Route
                    exact
                    path={'/all-products'}
                    element={ <AllProductsPage owner={owner} products={products} setProducts={setProducts} setOwner={setOwner} /> }
                />
            </Routes>
        </div>
    );
}
