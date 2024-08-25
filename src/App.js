import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CreateProductsPage from './CreateProductsPage/CreateProductsPage';
import Sign from './SignPage/Sign';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import { useCookies } from 'react-cookie';

const getOwner = async (id) => {
    try {
        const response = await fetch('https://business-server.bitem.in/owner/get-owner', {
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
    const [owner, setOwner] = useState(() => {
        const savedOwner = localStorage.getItem('owner');
        return savedOwner === null ? null : JSON.parse(savedOwner);
    });
    const [products, setProducts] = useState(() => {
        return owner !== null ? owner.products : [];
    });
    const [cookies] = useCookies(['token']);

    useEffect(()=>{
        const callOwnerAPI = async () => {
            const data = await getOwner(cookies.token);
            let cachedOwner = localStorage.getItem('owner');
            cachedOwner = JSON.parse(cachedOwner);
            if(cookies.token && !owner) {
                if(cachedOwner) {
                    setOwner(cachedOwner);
                    setProducts(cachedOwner.products);
                    console.log(cachedOwner);
                } else {
                    setOwner(data.owner);
                    setProducts(data.owner.products);
                    localStorage.setItem('owner', JSON.stringify(data.owner));
                }
            } else if(!cookies.token){
                setOwner(null);
                setProducts([]);
                localStorage.setItem('owner', JSON.stringify(null));
            }
        }
        if(cookies.token) {
            callOwnerAPI();
        }
    // eslint-disable-next-line
    },[cookies]);

    return (
        <div className="">
            <Routes>
                <Route
                    path={'/'}
                    element={ cookies.token ? <HomePage owner={owner} products={products} setProducts={setProducts} setOwner={setOwner} /> : <Navigate to={'/sign'} />}
                />
                <Route
                    path={'/create-products'}
                    element={ cookies.token ? <CreateProductsPage owner={owner} setProducts={setProducts} setOwner={setOwner} /> : <Navigate to={'/sign'} />}
                />
                <Route
                    path={'/sign'}
                    element={ <Sign setProducts={setProducts} setOwner={setOwner} /> }
                />
                <Route
                    path={'/all-products'}
                    element={ cookies.token ? <AllProductsPage owner={owner} products={products} setProducts={setProducts} setOwner={setOwner} /> : <Navigate to={'/sign'} />}
                />
            </Routes>
        </div>
    );
}
