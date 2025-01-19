'use client'

import { useImageStore } from "@/Zustand/store"

export default function DesignPage() {
    const imageUrl = useImageStore((state) => state.imageUrl)

    return (
        <div>
            <h1>Design Page</h1>
            {imageUrl ? (
                <img src={imageUrl} alt="Uploaded" />
            ) : (
                <p>No image uploaded yet.</p>
            )}
        </div>
    )
}
