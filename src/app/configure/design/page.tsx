'use client'

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useImageStore } from "@/Zustand/store";
import Image from "next/image";

export default function Page() {
    const imageUrl = useImageStore((state) => state.imageUrl);

    if (!imageUrl) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <h1>There is no image, please try to upload it again</h1>
            </div>
        );
    }

    return (
        <div className="w-full min-h-[600px] flex flex-col items-center p-5">
            {/* Phone Template */}
            <div className="relative h-[500px] w-[245px] rounded-[40px] overflow-hidden">
                <Image
                    src='/phone-template.png'
                    alt='Phone Template'
                    width={250}
                    height={250}
                    className='absolute z-50 pointer-events-none'
                />

                {/* User's Image */}
                <div className="absolute inset-0 z-40">
                    <TransformWrapper>
                        <TransformComponent>
                            <img
                                src={imageUrl}
                                alt="user's picture"
                                className="w-full h-full object-cover"
                            />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>
        </div>
    );
}