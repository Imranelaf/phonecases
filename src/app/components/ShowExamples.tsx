'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ShowExamples() {
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

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
            <div className="w-full flex justify-center">
            <h1 className="w-10/12 text-center text-4xl lg:text-7xl font-extrabold text-gray-900 p-8 leading-relaxed">
            Upload your photo and get <span className="bg-green-500 rounded-lg text-white">your own case</span> now</h1>
            </div>

            <div className="flex items-center justify-center my-10 relative justify-evenly">
                <div>
                    <Image
                        src="/phone-template.png"
                        alt="phone template"
                        width={200}
                        height={200}
                        className="absolute z-10"
                    />

                    {/* Dynamic Animated Image */}
                    <motion.div
                        key={image}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1}}
                        
                    >
                        <Image
                            src={`/testimonials/${images[image]}`}
                            alt="image"
                            height={200}
                            width={200}
                            className="lg:rounded-[38px] rounded-[30px]"
                        />
                    </motion.div>
                </div>

                {windowSize > 900 && (
                    <div>
                        <Image
                            src="/phone-template.png"
                            alt="phone template"
                            width={200}
                            height={200}
                            className="absolute z-10"
                        />

                        {/* Dynamic Animated Image */}
                        <motion.div
                            key={secondImage}
                            initial={{ opacity: 0, scale:0}}
                            animate={{ opacity: 1, scale:1 }}
                            transition={{ duration: 1}}
                        >
                            <Image
                                src={`/testimonials/${images[secondImage]}`}
                                alt="image"
                                height={200}
                                width={200}
                                className="lg:rounded-[38px] rounded-[30px]"
                            />
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}
