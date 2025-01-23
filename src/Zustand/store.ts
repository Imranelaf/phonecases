import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ImageStore {
    imageUrl: string | undefined
    configId: string | undefined
    newWidth: number
    newHeight:number
    setImageUrl: (url: string) => void
    setConfigId: (id: string) => void
    setDimensions: (width: number, height: number) => void;
}

export const useImageStore = create(
    persist<ImageStore>(
        (set) => ({
            imageUrl: undefined,
            configId: undefined,
            newWidth:245,
            newHeight:500,
            setImageUrl: (url) => set({ imageUrl: url }),
            setConfigId: (id) => set({ configId: id }),
            setDimensions: (width, height) => set({ newWidth: width, newHeight: height }),
        }),
        {
            name: 'image-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
