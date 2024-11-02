import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import CreateProductsPage from './Pages/CreateProductsPage/CreateProductsPage';
import Sign from './Pages/SignPage/Sign';
import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import { useCookies } from 'react-cookie';
import OrdersPage from './Pages/OrdersPage/OrdersPage';

const getOwner = async (token) => {
    const response = await fetch('https://business-server.bitem.in/owner/get-owner', {
    // const response = await fetch('http://localhost:8000/owner/get-owner', {
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

export default function App() {
    const [owner, setOwner] = useState({});
    const [cookies] = useCookies(['token']);

    useEffect(()=>{
        const callAPI = async () => {
            const data = await getOwner(cookies.token);
            if(data.owner) {
                setOwner(data.owner);
            }
        }
        if(cookies.token) {
            callAPI();
        } else if(!cookies.token) {
            setOwner({});
        }
    },[cookies]);

    return (
        <div className="">
            <Routes>
                <Route
                    path={'/'}
                    element={ cookies.token ? <HomePage owner={owner} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
                <Route
                    path={'/create'}
                    element={ cookies.token ? <CreateProductsPage owner={owner} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
                <Route
                    path={'/sign'}
                    element={ <Sign setOwner={setOwner} /> }
                />
                <Route
                    path={'/products'}
                    element={ cookies.token ? <AllProductsPage owner={owner} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
                <Route
                    path={'/orders'}
                    element={ cookies.token ? <OrdersPage owner={owner} setOwner={setOwner} /> : <Navigate to={'/sign'} replace />}
                />
            </Routes>
        </div>
    );
}
