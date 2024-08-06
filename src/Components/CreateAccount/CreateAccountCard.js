import React from 'react';
import CreateAccountForm from './CreateAccountForm/CreateAccountForm';

export default function CreateAccountCard({setForm, setLoad, messages, setMessages}) {
    return (
        <div className="h-auto w-full md:w-1/3 flex flex-col items-center justify-center text-sm gap-5 px-5 py-20 rounded-[20px] shadow-lg bg-white">
            <h1 className="text-xl font-bold text-blue-900">Create Owner Account</h1>
            <CreateAccountForm setForm={setForm} setLoad={setLoad} messages={messages} setMessages={setMessages} />
        </div>
    )
}
