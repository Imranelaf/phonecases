import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ImageStore {
    imageUrl: string | undefined
    setImageUrl: (url: string) => void
}

export const useImageStore = create(
    persist<ImageStore>(
        (set) => ({
            imageUrl: undefined,
            setImageUrl: (url) => set({ imageUrl: url }),
        }),
        {
            name: 'image-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
