import React from 'react';
import LoginForm from './LoginForm/LoginForm';

export default function LoginCard() {
    return (
        <div className="h-auto w-full md:w-1/3 flex flex-col items-center justify-center text-sm gap-5 px-5 py-20 rounded-[20px] shadow-lg bg-white">
            <h1 className="text-xl font-bold text-blue-900">Login to your account</h1>
            <LoginForm />
        </div>
    )
}
