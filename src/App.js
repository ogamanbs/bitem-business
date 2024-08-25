import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CreateProductsPage from './CreateProductsPage/CreateProductsPage';
import Sign from './SignPage/Sign';
import AllProductsPage from './AllProductsPage/AllProductsPage';
import { useCookies } from 'react-cookie';

const getOwner = async (token) => {
    // const response = await fetch('https://business-server.bitem.in/owner/get-owner', {
    const response = await fetch('http://localhost:8000/owner/get-owner', {
        method: 'POST',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({id: token})
    });
    if(response.ok) {
        const data = await response.json();
        return data;
    } else {
        const data = await response.json();
        return data;
    }
}

const isProductAdded = (data) => {
    let prevData = localStorage.getItem('owner');
    prevData = JSON.parse(prevData);
    if(data.products.length !== prevData.products.length) {
        return true;
    } else {
        return false;
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
        const callAPI = async () => {
            const data = await getOwner(cookies.token);
            if(data.owner) {
                if(isProductAdded(data.owner)) {
                    setOwner(data.owner);
                    setProducts(data.owner.products);
                    localStorage.setItem('owner', JSON.stringify(data.owner));
                }
            }
        }
        if(cookies.token) {
            callAPI();
        } else if(!cookies.token) {
            setOwner(null);
            setProducts([]);
            localStorage.setItem('owner', JSON.stringify(null));
        }
    },[cookies]);

    return (
        <div className="">
            <Routes>
                <Route
                    path={'/'}
                    element={ cookies.token ? <HomePage owner={owner} products={products} setProducts={setProducts} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
                <Route
                    path={'/create-products'}
                    element={ cookies.token ? <CreateProductsPage owner={owner} setProducts={setProducts} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
                <Route
                    path={'/sign'}
                    element={ <Sign setProducts={setProducts} setOwner={setOwner} /> }
                />
                <Route
                    path={'/all-products'}
                    element={ cookies.token ? <AllProductsPage owner={owner} products={products} setProducts={setProducts} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
            </Routes>
        </div>
    );
}
