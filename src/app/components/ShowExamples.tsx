'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ShowExamples() {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
    const phrases = ["High-quality silicone material", "Scratch- and fingerprint resistant coating",
        "Wireless charging compatible", "5 year print warranty"]

    const [windowSize, setWindowSize] = useState<number>(0);
    const [image, setImage] = useState<number>(0);
    const [secondImage, setSecondImage] = useState<number>(3);

    useEffect(() => {
        const size = window.innerWidth;
        setWindowSize(size);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => (prev + 1) % images.length);
            setSecondImage((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className="min-h-screen h-fit w-full">
            {/* Header Section */}
            <div className="w-full flex justify-center">
                <h1 className="w-10/12 text-center text-4xl lg:text-7xl font-extrabold text-gray-900 p-8 leading-relaxed">
                    Upload your photo and get <span className="bg-green-500 rounded-lg text-white">
                        your own case</span> now
                </h1>
            </div>

            {/* Phones Section */}
            <div className="flex items-center justify-center my-10 relative justify-evenly">


                {/* First Phone */}
                <div className="relative w-[200px] h-[400px] flex items-center justify-center">
                    <Image
                        src="/phone-template.png"
                        alt="phone template"
                        fill
                        className="absolute z-10 object-contain"
                    />
                    <motion.div
                        key={secondImage}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute w-[195px] h-[400px] rounded-[35px] overflow-hidden z-0"
                    >
                        <Image
                            src={`/testimonials/${images[image]}`}
                            alt="image"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Second Phone (if screen is wide enough) */}
                {windowSize > 900 && (
                    <div className="relative w-[200px] h-[400px] flex items-center justify-center">
                        <Image
                            src="/phone-template.png"
                            alt="phone template"
                            fill
                            className="absolute z-10 object-contain"
                        />
                        <motion.div
                            key={secondImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="absolute w-[195px] h-[400px] rounded-[35px] overflow-hidden z-0"
                        >
                            <Image
                                src={`/testimonials/${images[secondImage]}`}
                                alt="image"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Features Section */}
            <div className="w-full flex flex-col items-center m-5">
                <div className="lg:w-4/12 w-full h-fit p-5">
                    {phrases.map((phrase, index) => (
                        <div key={index} className="w-full flex flex-row items-center m-2 lg:text-base text-sm">
                            <Check className="text-green-600 mx-4" />
                            <p className="font-bold">{phrase}</p>
                        </div>
                    ))}
                </div>
                
                    <Link href={'configure/upload'} className="bg-green-600 flex p-2 px-5 rounded-sm shadow-md text-white hover:bg-green-500">Create your own case now</Link>
            </div>

        </div>
    );

}
