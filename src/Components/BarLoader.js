import React from 'react';
import { motion } from "framer-motion";

const variants = {
    initial: {
        scaleY: 0.5,
        opacity: 0,
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "circIn",
        },
    },
};

const BarLoader = () => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.25,
            }}
            className="flex gap-1"
        >
            <motion.div variants={variants} className="h-20 w-5 bg-black" />
            <motion.div variants={variants} className="h-20 w-5 bg-black" />
            <motion.div variants={variants} className="h-20 w-5 bg-black" />
            <motion.div variants={variants} className="h-20 w-5 bg-black" />
            <motion.div variants={variants} className="h-20 w-5 bg-black" />
        </motion.div>
    );
};

export default BarLoader;
