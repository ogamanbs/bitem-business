import React, {useEffect} from 'react';
import {
    RiCloseLine,
    RiCheckboxLine
} from '@remixicon/react';
import { motion } from 'framer-motion';

const NOTIFICATION_TTL = 3000;

export default function Notification({removeNotif, message}) {
    useEffect(() => {
        const timeOutRef = setTimeout(() => {
            removeNotif(message);
        }, NOTIFICATION_TTL);
        return () => clearTimeout(timeOutRef);
    }, [message, removeNotif]);
    return (
        <motion.div
        layout
        initial={{y:-15, scale:0.95}}
        animate={{y:0, scale:1}}
        exit={{x:"100%", opacity:0}}
        transition={{duration:0.35, ease:"easeOut"}}
        className="p-2 flex items-start rounded gap-2 text-sm font-medium shadow-lg text-white bg-blue-500 pointer-events-auto">
            <RiCheckboxLine className="mt-0.5" size={15}/>
            <span>{message}</span>
            <button
            onClick={() => removeNotif(message)}
            className="ml-auto mt-0.5">
                <RiCloseLine size={15}/>
            </button>
        </motion.div>
    );
}