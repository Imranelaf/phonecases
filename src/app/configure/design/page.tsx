'use client'
import { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useImageStore } from "@/Zustand/store";
import NextImage from "next/image";
import Link from 'next/link';

export default function Page() {
    const imageUrl = useImageStore((state) => state.imageUrl);
    const configId = useImageStore((state) => state.configId);
    const setDimensions = useImageStore((state) => state.setDimensions);
    const [imageDimensions, setImageDimensions] = useState({ width: 245, height: 500 });

    if (!imageUrl) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <h1>There is no image, please try to upload it again</h1>
            </div>
        );
    }

    const handleZoom = (ref: { state: { scale: number } }) => {
        const scale = ref.state.scale;
        const originalWidth = 245;
        const originalHeight = 500;

        const newWidth = originalWidth * scale;
        const newHeight = originalHeight * scale;

        setImageDimensions({ width: newWidth, height: newHeight });
        setDimensions(newWidth, newHeight);
    };

    return (
        <div className="w-full min-h-[600px] flex flex-col items-center p-5">
            <div className="relative h-[500px] w-[245px] rounded-[40px] overflow-hidden">
                <NextImage
                    src='/phone-template.png'
                    alt='Phone Template'
                    width={245}
                    height={500}
                    className='absolute z-50 pointer-events-none'
                />
                <div className="absolute inset-0 z-40">
                    <TransformWrapper onZoom={handleZoom}>
                        <TransformComponent>
                            <img
                                src={imageUrl}
                                alt="user's picture"
                                style={{
                                    width: `${imageDimensions.width}px`,
                                    height: `${imageDimensions.height}px`,
                                }}
                                className="object-cover"
                            />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </div>

            <div className="mt-4">
                <p>Image Width: {imageDimensions.width.toFixed(2)}px</p>
                <p>Image Height: {imageDimensions.height.toFixed(2)}px</p>
                <Link
                    className="bg-green-600 flex p-1 px-4 rounded-sm shadow-md text-white text-lg font-semibold tracking-wide text-sm hover:bg-green-500"
                    href={`/configure/final?id=${configId}`}
                >
                    I'm fine with my design
                </Link>
            </div>
        </div>
    );
}
